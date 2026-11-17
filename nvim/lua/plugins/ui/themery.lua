return {
  "zaldih/themery.nvim",
  lazy = false,
  config = function()
    require("themery").setup({
      themes = {
        { name = "Default", colorscheme = "default" },
        { name = "Gruvbox Material", colorscheme = "gruvbox-material" },
        { name = "Base16 Gruvbox Material Dark Hard", colorscheme = "base16-gruvbox-material-dark-hard" },
        { name = "Base16 Gruvbox Material Dark Medium", colorscheme = "base16-gruvbox-material-dark-medium" },
        { name = "Base16 Gruvbox Material Light Soft", colorscheme = "base16-gruvbox-material-light-soft" },
        { name = "Base16 Black Metal Khold", colorscheme = "base16-black-metal-khold" },
      },
      livePreview = true,
    })

    vim.keymap.set("n", "<leader>tu", ":Themery<CR>", { desc = "Open Themery theme picker" })
  end,
}
