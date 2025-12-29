
-- Ensure proper filetype detection for C/C++ files
vim.api.nvim_create_autocmd({"BufRead", "BufNewFile"}, {
  pattern = {"*.cpp", "*.hpp", "*.cc", "*.cxx", "*.c++", "*.h", "*.hh"},
  callback = function()
    vim.bo.filetype = "cpp"
  end,
  desc = "Set filetype for C++ files",
})

-- Ensure C files are detected properly
vim.api.nvim_create_autocmd({"BufRead", "BufNewFile"}, {
  pattern = {"*.c"},
  callback = function()
    vim.bo.filetype = "c"
  end,
  desc = "Set filetype for C files",
})

-- Save colorscheme changes persistently
vim.api.nvim_create_autocmd("ColorScheme", {
  callback = function()
    local colorscheme = vim.g.colors_name
    if colorscheme then
      -- Save to a simple file
      local config_dir = vim.fn.stdpath("config")
      local colorscheme_file = config_dir .. "/lua/config/last_colorscheme.lua"
      local file = io.open(colorscheme_file, "w")
      if file then
        file:write('vim.cmd("colorscheme ' .. colorscheme .. '")\n')
        file:close()
      end
    end
  end,
  desc = "Save colorscheme changes",
})

-- LSP Keybindings - Set up when LSP attaches to buffer
vim.api.nvim_create_autocmd("LspAttach", {
  group = vim.api.nvim_create_augroup('lsp-attach', { clear = true }),
  callback = function(event)
    local map = function(keys, func, desc)
      vim.keymap.set("n", keys, func, { buffer = event.buf, desc = "LSP: " .. desc })
    end

    -- Diagnostics and Documentation
    map("gl", vim.diagnostic.open_float, "Open Diagnostic Float")
    map("K", vim.lsp.buf.hover, "Hover Documentation")
    map("gs", vim.lsp.buf.signature_help, "Signature Documentation")
    
    -- Go-to standard LSP keybindings
    map("gd", vim.lsp.buf.definition, "Goto Definition")
    map("gr", vim.lsp.buf.references, "Goto References")
    map("gi", vim.lsp.buf.implementation, "Goto Implementation")
    map("gt", vim.lsp.buf.type_definition, "Goto Type Definition")
    map("gD", vim.lsp.buf.declaration, "Goto Declaration")
    
    -- Code Actions and Refactoring
    map("<leader>ca", vim.lsp.buf.code_action, "Code Actions")
    map("<leader>cr", vim.lsp.buf.rename, "Rename Symbol")
    map("<leader>cf", function()
      vim.lsp.buf.code_action({
        filter = function(a) return a.isPreferred end,
        apply = true
      })
    end, "Auto Fix")
    
    -- Diagnostics Navigation
    map("[d", vim.diagnostic.goto_prev, "Previous Diagnostic")
    map("]d", vim.diagnostic.goto_next, "Next Diagnostic")
    
    -- Toggle inlay hints
    map("<leader>th", function()
      vim.lsp.inlay_hint.enable(not vim.lsp.inlay_hint.is_enabled())
    end, "Toggle Inlay Hints")
    
    -- Enable completion triggered by <c-x><c-o>
    vim.bo[event.buf].omnifunc = 'v:lua.vim.lsp.omnifunc'
    
    -- Enable completion if supported
    local client = vim.lsp.get_client_by_id(event.data.client_id)
    if client and client.supports_method('textDocument/completion') then
      vim.lsp.completion.enable(true, client.id, event.buf, { autotrigger = true })
    end
  end,
})
