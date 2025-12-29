-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here

-- Hide tab characters and make them invisible
vim.opt.list = false  -- Don't show listchars
vim.opt.listchars = ""  -- Clear listchars
vim.opt.showbreak = ""  -- Don't show line break indicators

vim.opt.showtabline = 4  -- Always show bufferline/tabs
vim.opt.tabline = ""     -- Let bufferline handle the tabline

-- Disable swap file creation
vim.opt.swapfile = false

-- Tab settings
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.softtabstop = 4
vim.opt.expandtab = true
