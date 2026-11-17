-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

local keymap = vim.keymap.set
local opts = { noremap = true, silent = true }

-- ⎋ Escape from all modes using 'jk'
keymap("i", "jk", "<Esc>", opts)
keymap("v", "jk", "<Esc>", opts)
keymap("s", "jk", "<Esc>", opts)

keymap("n", "<leader>fh", function()
  Snacks.picker.help()
end, { desc = "Find Help Tags" })
keymap("n", "<leader>fs", function()
  Snacks.picker.lsp_symbols()
end, { desc = "Document Symbols" })

-- Complete formatting before writing the buffer to disk.
keymap({ "n", "i" }, "<C-s>", function()
  require("conform").format({ async = false, lsp_format = "fallback", timeout_ms = 3000 })
  vim.cmd("write")
end, { desc = "Format and Save" })

keymap("n", "<C-f>", function()
  vim.lsp.buf.format({ bufnr = 0 })
end, { desc = "Format with LSP" })

keymap({ "n", "i" }, "<C-a>", "<Esc>ggVG", { desc = "Select All" })

-- Buffer navigation (Tab/Shift-Tab and Alt+h/l)
keymap("n", "<Tab>", ":bnext<CR>", opts)
keymap("n", "<S-Tab>", ":bprevious<CR>", opts)
keymap("n", "<A-l>", ":bnext<CR>", opts)
keymap("n", "<A-h>", ":bprevious<CR>", opts)

-- Move selected lines up or down
local function move_selection(direction)
  local first = math.min(vim.fn.line("v"), vim.fn.line(".")) - 1
  local last = math.max(vim.fn.line("v"), vim.fn.line("."))
  local count = vim.api.nvim_buf_line_count(0)

  if (direction < 0 and first == 0) or (direction > 0 and last == count) then
    return
  end

  local selected = vim.api.nvim_buf_get_lines(0, first, last, false)
  vim.api.nvim_buf_set_lines(0, first, last, false, {})

  local new_first = first + direction
  vim.cmd("undojoin")
  vim.api.nvim_buf_set_lines(0, new_first, new_first, false, selected)
  vim.fn.setpos("'<", { 0, new_first + 1, 1, 0 })
  vim.fn.setpos("'>", { 0, new_first + #selected, 1, 0 })
  vim.api.nvim_win_set_cursor(0, { new_first + 1, 0 })
  vim.cmd("normal! gv")
end

keymap("v", "<S-j>", function()
  move_selection(1)
end, { desc = "Move selection down" })
keymap("v", "<S-k>", function()
  move_selection(-1)
end, { desc = "Move selection up" })

keymap("n", "<leader>cs", "<cmd>lua vim.lsp.buf.document_symbol()<CR>", opts)
