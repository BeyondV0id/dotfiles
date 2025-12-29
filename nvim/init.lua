
-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")

-- Only set default if no colorscheme is set
if vim.g.colors_name == nil then
  local success = pcall(vim.cmd.colorscheme, "everblush")
  if not success then
    pcall(vim.cmd.colorscheme, "habamax")
  end
end

