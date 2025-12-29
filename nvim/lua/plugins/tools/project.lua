return {
    "ahmedkhalf/project.nvim",
    config = function()
        require("project_nvim").setup {
            -- Recommended basic config
            detection_methods = { "lsp", "pattern" },
            patterns = { ".git", "Makefile", "package.json", "pyproject.toml", "Cargo.toml" },
            show_hidden = true,
            silent_chdir = true,
            scope_chdir = "global",
        }
        -- Keybinds for project management
    end,
}
