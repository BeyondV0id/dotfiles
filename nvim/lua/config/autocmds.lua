-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
--
-- Add any additional autocmds here
-- with `vim.api.nvim_create_autocmd`
--
-- or remove existing autocmds by their group name (which is prefixed with `lazyvim_` for the defaults)
-- e.g. vim.api.nvim_del_augroup_by_name("lazyvim_wrap_spell")

-- LSP Keybindings - Set up when LSP attaches to buffer
vim.api.nvim_create_autocmd("LspAttach", {
  group = vim.api.nvim_create_augroup("lsp-attach", { clear = true }),
  callback = function(event)
    local map = function(keys, func, desc)
      vim.keymap.set("n", keys, func, { buffer = event.buf, desc = "LSP: " .. desc })
    end

    -- Custom mappings; LazyVim already supplies standard navigation and actions.
    map("gl", vim.diagnostic.open_float, "Open Diagnostic Float")
    map("gs", vim.lsp.buf.signature_help, "Signature Documentation")

    map("<leader>cA", function()
      vim.lsp.buf.code_action({
        filter = function(a)
          return a.isPreferred
        end,
        apply = true,
      })
    end, "Auto Fix")

    -- LazyVim uses <leader>uh; this config keeps <leader>th as an alias.
    map("<leader>th", function()
      local filter = { bufnr = event.buf }
      vim.lsp.inlay_hint.enable(not vim.lsp.inlay_hint.is_enabled(filter), filter)
    end, "Toggle Inlay Hints")

    -- Keep built-in omnifunc completion available for Ctrl-X Ctrl-O.
    vim.bo[event.buf].omnifunc = "v:lua.vim.lsp.omnifunc"
  end,
})
