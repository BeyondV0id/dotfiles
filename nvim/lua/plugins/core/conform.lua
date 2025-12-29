return {
  "stevearc/conform.nvim",
  dependencies = { "mason.nvim" },
  lazy = true,
  cmd = "ConformInfo",
  keys = {
    {
      "<C-s>",
      function()
        -- Only format if LazyVim formatting is enabled
        if LazyVim.format.enabled() then
          require("conform").format({ async = false, timeout_ms = 3000 })
        end
        vim.cmd("write")
      end,
      mode = { "n", "v" },
      desc = "Format and Save",
    },
    {
      "<leader>cf",
      function()
        require("conform").format({ async = false, timeout_ms = 3000 })
      end,
      mode = { "n", "v" },
      desc = "Format Buffer",
    },
    {
      "<leader>cF",
      function()
        require("conform").format({ formatters = { "injected" }, timeout_ms = 3000 })
      end,
      mode = { "n", "v" },
      desc = "Format Injected Languages",
    },
  },
  opts = {
    default_format_opts = {
      timeout_ms = 3000,
      async = false,
      quiet = false,
      lsp_format = "fallback",
    },
    formatters_by_ft = {
      lua = { "stylua" },
      javascript = { "prettier" },
      typescript = { "prettier" },
      javascriptreact = { "prettier" },
      typescriptreact = { "prettier" },
      html = { "prettier" },
      css = { "prettier" },
      scss = { "prettier" },
      json = { "prettier" },
      yaml = { "prettier" },
      markdown = { "prettier" },
      python = { "black", "isort" },
      rust = { "rustfmt" },
      go = { "goimports", "gofmt" },
      cpp = { "clang_format" },
      c = { "clang_format" },
      sh = { "shfmt" },
      fish = { "fish_indent" },
    },
    formatters = {
      prettier = {
        prepend_args = { "--single-quote", "--jsx-single-quote", "--trailing-comma", "es5" },
      },
      stylua = {
        prepend_args = { "--indent-type", "Spaces", "--indent-width", "2" },
      },
      injected = { 
        options = { ignore_errors = true } 
      },
      shfmt = {
        prepend_args = { "-i", "2", "-ci" },
      },
    },
  },
}
