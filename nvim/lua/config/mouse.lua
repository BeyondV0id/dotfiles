-- Mouse configuration for better interaction with completion and documentation
vim.opt.mouse = "a" -- Enable mouse in all modes
vim.opt.mousemodel = "popup" -- Right-click opens popup menu

-- Enhanced floating window behavior
vim.api.nvim_create_autocmd("FileType", {
  pattern = "*",
  callback = function()
    -- Make all floating windows mouse-clickable and scrollable
    vim.api.nvim_buf_set_option(0, "mouse", "a")
  end,
})

-- Better hover window configuration
vim.lsp.handlers["textDocument/hover"] = vim.lsp.with(vim.lsp.handlers.hover, {
  border = "rounded",
  focusable = true,
  close_events = { "CursorMoved", "BufHidden", "InsertCharPre" },
  max_width = 80,
  max_height = 20,
})

-- Better signature help configuration
vim.lsp.handlers["textDocument/signatureHelp"] = vim.lsp.with(vim.lsp.handlers.signature_help, {
  border = "rounded",
  focusable = true,
  close_events = { "CursorMoved", "BufHidden", "InsertCharPre" },
})

-- Global keybindings for navigating floating windows
vim.keymap.set("n", "<C-w>f", function()
  -- Focus the first floating window found
  local wins = vim.api.nvim_list_wins()
  for _, win in ipairs(wins) do
    local config = vim.api.nvim_win_get_config(win)
    if config.relative ~= "" then -- floating window
      vim.api.nvim_set_current_win(win)
      return
    end
  end
end, { desc = "Focus Floating Window" })

vim.keymap.set("n", "<Esc>", function()
  -- Close floating windows on Escape
  local wins = vim.api.nvim_list_wins()
  local closed_any = false
  for _, win in ipairs(wins) do
    local config = vim.api.nvim_win_get_config(win)
    if config.relative ~= "" then -- floating window
      vim.api.nvim_win_close(win, false)
      closed_any = true
    end
  end
  if not closed_any then
    -- If no floating windows were closed, do normal escape behavior
    vim.cmd("nohlsearch")
  end
end, { desc = "Close Floating Windows or Clear Search" })
