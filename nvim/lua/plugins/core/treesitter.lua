return {
  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      ensure_installed = {
        -- Languages enabled in lua/plugins/core/lsp.lua
        "c",
        "cpp",
        "lua",
        "javascript",
        "typescript",
        "tsx",
        "html",
        "css",
        "prisma",
        "sql",

        -- Common config, docs, and editor files
        "json",
        "jsonc",
        "yaml",
        "markdown",
        "markdown_inline",
        "vim",
        "vimdoc",
        "query",
        "regex",
        "git_config",
        "gitcommit",
        "gitignore",
        "diff",
      },

      highlight = {
        enable = true,
      },

      indent = {
        enable = false,
      },
    },
  },
}
