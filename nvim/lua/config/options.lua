-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here

-- Hide whitespace markers, overriding LazyVim's default of showing them.
vim.opt.list = false -- Don't show listchars

vim.opt.showtabline = 2 -- Always show bufferline/tabs
vim.opt.expandtab = true -- Use spaces instead of tabs
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.softtabstop = 4 -- Keep C/C++ indentation aligned at four spaces
-- Formatting is explicit via Ctrl-S; auto-save only writes changes.
vim.g.autoformat = false
vim.o.timeout = true
vim.o.timeoutlen = 250
