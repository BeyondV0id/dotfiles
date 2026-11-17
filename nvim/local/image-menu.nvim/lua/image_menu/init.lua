local M = {}
local options, selected, preview, menu, renderer
local renderers = {
  { name = "Chafa ASCII", command = "chafa", args = { "--format", "symbols", "--symbols", "ascii", "--colors", "full", "--size", "60x60" } },
  { name = "Chafa block tiles", command = "chafa", args = { "--format", "symbols", "--symbols", "block", "--colors", "full", "--size", "60x60" } },
  { name = "ASCII Image Converter", command = "ascii-image-converter", args = { "--width", "60", "--color", "--complex" } },
}
local extensions = { jpg = true, jpeg = true, png = true, gif = true, bmp = true, webp = true, tif = true, tiff = true }

function M.list()
  local files = {}
  local scan = vim.uv.fs_scandir(options.directory)
  if scan then
    while true do
      local name, kind = vim.uv.fs_scandir_next(scan)
      if not name then
        break
      end
      if kind == "file" and extensions[(name:match("%.([^%.]+)$") or ""):lower()] then
        files[#files + 1] = name
      end
    end
  end
  table.sort(files, function(a, b)
    return a:lower() == b:lower() and a < b or a:lower() < b:lower()
  end)
  return files
end

function M.current()
  local files = M.list()
  for _, name in ipairs({ preview or selected or options.default }) do
    if vim.tbl_contains(files, name) then
      return name
    end
  end
  return vim.tbl_contains(files, options.default) and options.default or files[1]
end

local function refresh()
  if _G.Snacks then
    Snacks.dashboard.update()
  end
end

function M.select(name)
  if not vim.tbl_contains(M.list(), name) then
    return false, "Image no longer exists"
  end
  local ok, err = pcall(function()
    vim.fn.mkdir(vim.fs.dirname(options.state), "p")
    local result = vim.fn.writefile({ vim.json.encode({ image = name }) }, options.state)
    assert(result == 0, "Could not save image selection")
  end)
  if not ok then
    return false, tostring(err)
  end
  selected, preview = name, nil
  refresh()
  return true
end

function M.section()
  local name = M.current()
  if not name then
    return {}
  end
  local style = renderers[renderer] or renderers[1]
  if vim.fn.executable(style.command) ~= 1 then return {} end
  local command = { style.command, vim.fs.joinpath(options.directory, name) }
  vim.list_extend(command, style.args)
  return {
    pane = 2,
    section = "terminal",
    cmd = command,
    height = 30,
    indent = 0,
  }
end

function M.styles()
  local items = {}
  for _, style in ipairs(renderers) do items[#items + 1] = style.name end
  vim.ui.select(items, { prompt = "Dashboard image style" }, function(choice, index)
    if not index then return end
    renderer = index
    refresh()
    vim.notify("Dashboard style: " .. choice)
  end)
end

local function dimensions(count)
  local width = math.max(1, math.min(50, vim.o.columns - 4))
  local height = math.max(1, math.min(count, vim.o.lines - 6))
  return {
    relative = "editor",
    width = width,
    height = height,
    row = math.max(0, math.floor((vim.o.lines - height - 2) / 2)),
    col = math.max(0, math.floor((vim.o.columns - width - 2) / 2)),
  }
end

function M.open()
  if menu and vim.api.nvim_win_is_valid(menu.win) then
    vim.api.nvim_set_current_win(menu.win)
    return
  end
  local files = M.list()
  if #files == 0 then
    vim.notify("No images found in " .. options.directory, vim.log.levels.WARN)
    return
  end
  local current = M.current()
  local buf = vim.api.nvim_create_buf(false, true)
  vim.bo[buf].bufhidden = "wipe"
  vim.bo[buf].filetype = "image_menu"
  vim.api.nvim_buf_set_lines(buf, 0, -1, false, files)
  vim.bo[buf].modifiable = false
  local config = vim.tbl_extend("force", dimensions(#files), {
    style = "minimal",
    border = "rounded",
    title = " Dashboard Images ",
    title_pos = "center",
    footer = " Enter: save · Esc/q: cancel ",
    footer_pos = "center",
    zindex = 100,
  })
  local win = vim.api.nvim_open_win(buf, true, config)
  menu = { win = win, buf = buf }
  vim.wo[win].cursorline = true
  vim.wo[win].wrap = false
  for i, name in ipairs(files) do
    if name == current then
      vim.api.nvim_win_set_cursor(win, { i, 0 })
    end
  end
  local function close()
    if vim.api.nvim_win_is_valid(win) then
      vim.api.nvim_win_close(win, true)
    end
  end
  local group = vim.api.nvim_create_augroup("ImageMenuWindow", { clear = true })
  vim.api.nvim_create_autocmd("CursorMoved", {
    group = group,
    buffer = buf,
    callback = function()
      preview = files[vim.api.nvim_win_get_cursor(win)[1]]
      refresh()
    end,
  })
  vim.api.nvim_create_autocmd("VimResized", {
    group = group,
    callback = function()
      vim.api.nvim_win_set_config(win, dimensions(#files))
    end,
  })
  vim.api.nvim_create_autocmd("WinClosed", {
    group = group,
    pattern = tostring(win),
    once = true,
    callback = function()
      menu, preview = nil, nil
      vim.api.nvim_del_augroup_by_id(group)
      vim.schedule(refresh)
    end,
  })
  for _, key in ipairs({ "q", "<Esc>" }) do
    vim.keymap.set("n", key, close, { buffer = buf, nowait = true, silent = true })
  end
  vim.keymap.set("n", "<CR>", function()
    local name = files[vim.api.nvim_win_get_cursor(win)[1]]
    local ok, err = M.select(name)
    if not ok then
      vim.notify(err, vim.log.levels.ERROR)
      return
    end
    close()
    vim.notify("Dashboard image: " .. name)
  end, { buffer = buf, silent = true })
end

function M.setup(opts)
  options = vim.tbl_extend("force", {
    directory = vim.fn.stdpath("config") .. "/images",
    state = vim.fn.stdpath("state") .. "/image-menu.json",
    default = "2099.jpeg",
    converter = "ascii-image-converter",
  }, opts or {})
  selected, preview = nil, nil
  local ok, data = pcall(function()
    return vim.json.decode(table.concat(vim.fn.readfile(options.state), "\n"))
  end)
  if ok and type(data) == "table" and type(data.image) == "string" then
    selected = data.image
  end
  vim.api.nvim_create_user_command("ImageMenu", M.open, { desc = "Choose dashboard image", force = true })
  vim.api.nvim_create_user_command("ImageStyle", M.styles, { desc = "Choose dashboard image style", force = true })
end

return M
