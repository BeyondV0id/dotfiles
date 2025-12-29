local keymap = vim.keymap.set
local opts = { noremap = true, silent = true }

-- 🔍 LazyVim Picker keybindings  
keymap("n", "<leader>ff", function() LazyVim.pick("files") end, { desc = "Find Files" })
keymap("n", "<leader>fb", function() LazyVim.pick("buffers") end, { desc = "Find Buffers" })
keymap("n", "<leader>fh", function() LazyVim.pick("help_tags") end, { desc = "Help Tags" })
keymap("n", "<leader>fs", function() LazyVim.pick("lsp_document_symbols") end, { desc = "Document Symbols" })
keymap("n", "<leader>fg", function() LazyVim.pick("live_grep") end, { desc = "Live Grep" })

-- 🧠 Terminal mode window nav
keymap("t", "<C-h>", [[<C-\><C-n><C-w>h]], opts)
keymap("t", "<C-l>", [[<C-\><C-n><C-w>l]], opts)
keymap("t", "<C-j>", [[<C-\><C-n><C-w>j]], opts)
keymap("t", "<C-k>", [[<C-\><C-n><C-w>k]], opts)

-- � Disable Ctrl+N globally (except terminal-mode) so it doesn't move down or trigger completion
keymap({ "n", "i", "v", "x", "s", "o" }, "<C-n>", "<Nop>", { noremap = true, silent = true, desc = "Disable Ctrl+N" })

-- ️ Ctrl+A to select all text
keymap("n", "<C-a>", "ggVG", opts)
keymap("i", "<C-a>", "<Esc>ggVG", opts)
keymap("v", "<C-a>", "ggVG", opts)

-- 💾 Ctrl+S to save + format (your main save keybind!)
keymap("n", "<C-s>", function()
  require("conform").format({ async = true, lsp_fallback = true })
  vim.cmd("write")
end, { desc = "Format and Save" })
keymap("i", "<C-s>", function()
  require("conform").format({ async = true, lsp_fallback = true })
  vim.cmd("write")
end, { desc = "Format and Save" })

-- 🪟 Split shortcuts
keymap("n", "sh", ":split<CR>", opts) -- Horizontal
keymap("n", "sv", ":vsplit<CR>", opts) -- Vertical

-- 🪜 Move lines in visual mode
keymap("x", "<S-j>", ":move '>+1<CR>gv=gv", opts) -- Down
keymap("x", "<S-k>", ":move '<-2<CR>gv=gv", opts) -- Up

-- 📜 Page navigation using Ctrl+U and Ctrl+D
keymap("n", "<C-u>", "<C-u>", opts) -- Page up (default)
-- Removed normal-mode <C-d> mapping to free it for Visual Multi
-- keymap("n", "<C-d>", "<C-d>", opts) -- Page down (default)

-- 📜 Page navigation using Shift+H and Shift+L (like Ctrl+U and Ctrl+D)
keymap("n", "<S-h>", "<C-u>", opts) -- Page up with Shift+H
keymap("n", "<S-l>", "<C-d>", opts) -- Page down with Shift+L

-- 🧭 Buffer navigation (Tab/Shift-Tab AND Alt+h/l)
keymap("n", "<Tab>", ":bnext<CR>", opts)
keymap("n", "<S-Tab>", ":bprevious<CR>", opts)
keymap("n", "<A-l>", ":bnext<CR>", opts)     -- Alt+L for next buffer
keymap("n", "<A-h>", ":bprevious<CR>", opts) -- Alt+H for prev buffer

--  Document symbols
keymap("n", "<leader>cs", "<cmd>lua vim.lsp.buf.document_symbol()<CR>", opts)

-- ⎋ Escape from all modes using 'jk'
keymap("i", "jk", "<Esc>", opts)
keymap("v", "jk", "<Esc>", opts)
keymap("s", "jk", "<Esc>", opts)

-- ⚡ Enable == for formatting (built-in indent formatting)
keymap("n", "==", "==", { desc = "Format Current Line" })
keymap("v", "=", "=", { desc = "Format Selection" })

-- � Save without formatting
keymap("n", "<C-s>", ":w<CR>", { desc = "Save File" })
keymap("i", "<C-s>", "<Esc>:w<CR>a", { desc = "Save File" })

-- 🎨 LazyVim built-in colorscheme switcher (with search!)
-- keymap("n", "<leader>tt", "<leader>uC", { desc = "LazyVim Colorscheme Switcher" })
-- Note: Use <leader>uC for LazyVim's built-in colorscheme switcher

-- ⏲️ Set escape timeout
vim.o.timeout = true
vim.o.timeoutlen = 250

-- Always enter visual block mode with Ctrl+V in all modes
vim.keymap.set({"n", "v", "x", "s", "o"}, "<C-v>", "<C-v>", { noremap = true, silent = true, desc = "Visual Block Mode" })
-- Some terminals intercept Ctrl+V (paste). Provide reliable fallbacks:
vim.keymap.set({"n", "v", "x", "s", "o"}, "<C-q>", "<C-v>", { noremap = true, silent = true, desc = "Visual Block Mode (Fallback)" })
vim.keymap.set({"n", "v", "x", "s", "o"}, "<M-v>", "<C-v>", { noremap = true, silent = true, desc = "Visual Block Mode (Alt+V)" })
