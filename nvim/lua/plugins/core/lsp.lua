return {
    -- Mason for LSP server management
    {
        "williamboman/mason.nvim",
        opts = function(_, opts)
            vim.list_extend(opts.ensure_installed, {
                "lua-language-server",
                "clangd",
                "typescript-language-server",
                "css-lsp",
                "html-lsp",
                "tailwindcss-language-server",
                "eslint_d",
                "luacheck",
                "shellcheck",
                "shfmt",
                -- DAP for C++ debugging
                "codelldb",
            })
        end,
    },

    -- LSP Configuration
    {
        "neovim/nvim-lspconfig",
        opts = {
            servers = {
                clangd = {
                    cmd = {
                        "C:/mingw64/bin/clangd.exe",
                        "--background-index",
                        "--clang-tidy",
                        "--header-insertion=iwyu",
                        "--completion-style=detailed",
                        "--function-arg-placeholders",
                        "--fallback-style=llvm",
                        "--query-driver=C:/mingw64/bin/gcc.exe,C:/mingw64/bin/g++.exe",
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
            },
        },
    },
}
