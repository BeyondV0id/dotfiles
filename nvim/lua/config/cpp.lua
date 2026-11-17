-- Language-specific configurations to disable annoying auto-formatting

-- Disable format-on-type for C++ and C
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "cpp", "c", "h", "hpp" },
  callback = function()
    -- Disable format on type for C/C++
    vim.bo.formatexpr = ""
    -- Disable automatic indenting that can be annoying
    vim.bo.indentkeys = ""
    -- Set up C++-specific keybindings
    local opts = { noremap = true, silent = true, buffer = true }


    -- Manual format only for C++
    vim.keymap.set("n", "<leader>fc", function()
      require("conform").format({ async = true, lsp_fallback = true })
    end, vim.tbl_extend("force", opts, { desc = "Format C++ File" }))
    vim.keymap.set("v", "<leader>fc", function()
      require("conform").format({ async = true, lsp_fallback = true })
    end, vim.tbl_extend("force", opts, { desc = "Format C++ Selection" }))
  end,
})

-- Disable LSP formatting on type for specific servers
vim.api.nvim_create_autocmd("LspAttach", {
  callback = function(args)
    local client = vim.lsp.get_client_by_id(args.data.client_id)
    -- Enable LSP formatting for clangd (remove the disabling)
    if client.name == "clangd" then
      -- Keep formatting capabilities enabled
      client.server_capabilities.documentFormattingProvider = true
      client.server_capabilities.documentRangeFormattingProvider = true
      -- Still disable format-on-type as it's annoying
      client.server_capabilities.documentOnTypeFormattingProvider = nil
    end
  end,
})

-- Additional settings for better C++ experience
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "cpp", "c" },
  callback = function()
    -- Better indentation settings for C++
    vim.bo.shiftwidth = 4
    vim.bo.tabstop = 4
    vim.bo.softtabstop = 4
    vim.bo.expandtab = true
    -- Disable auto-pairs for angle brackets in C++ (can be annoying with templates)
    vim.b.autopairs_disable_ft = { "<>" }
  end,
})
