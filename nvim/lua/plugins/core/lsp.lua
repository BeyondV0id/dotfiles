return {
  -- Mason for LSP server management
  {
    "mason-org/mason.nvim",
    opts = function(_, opts)
      opts.ensure_installed = opts.ensure_installed or {}
      vim.list_extend(opts.ensure_installed, {
        -- Only install LSPs/tools you actually use
        "lua-language-server", -- config editing
        "clangd", -- C/C++
        "vtsls", -- TS/JS
        "html-lsp", -- HTML
        "css-lsp", -- CSS
        "tailwindcss-language-server", -- Tailwind
        "eslint-lsp", -- TS/JS lint
        "prisma-language-server", -- Prisma
        "dockerfile-language-server", -- Dockerfile
        "docker-compose-language-service", -- Docker Compose
        "gopls", -- Go (add this if using Go)
      })
    end,
  },

  -- LSP Configuration
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        lua_ls = {},
        clangd = {
          -- Let Mason manage clangd; use default cmd
          cmd = {
            "clangd",
            "--background-index",
            "--clang-tidy",
            "--header-insertion=iwyu",
            "--completion-style=detailed",
            "--function-arg-placeholders",
            "--fallback-style=llvm",
          },
          init_options = {
            clangdFileStatus = true,
          },
        },
        html = {
          filetypes = { "html" },
          settings = {
            html = {
              format = {
                enable = true,
              },
              hover = {
                documentation = true,
                references = true,
              },
            },
          },
        },
        vtsls = {},
        cssls = {},
        tailwindcss = {},
        eslint = {},
        prismals = {},
        dockerls = {},
        docker_compose_language_service = {},
        gopls = {},
      },
    },
  },
}
