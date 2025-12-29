return {
  "zaldih/themery.nvim",
  lazy = false,
  config = function()
    require("themery").setup({
      themes = {
                "default",
        "base16-vesper",
        "base16-ayu-dark",
        "everblush",
        "sequoia",
        "tokyonight",
        "tokyonight-day",
        "tokyonight-moon",
        "tokyonight-night",
        "tokyonight-storm",
        "base16-tokyo-night-dark",
        "base16-tokyo-night-moon",
        "base16-tokyo-night-light",
        "base16-tokyo-night-storm",
        "base16-tokyo-night-terminal-dark",
        "base16-tokyo-night-terminal-light",
        "base16-tokyo-night-terminal-storm",
        "base16-tokyodark-terminal",
        "base16-tokyo-city-terminal-dark",
        "base16-tokyo-city-terminal-light",
        "gruvbox-material",
        "base16-gruvbox-material-dark-hard",
        "base16-gruvbox-material-dark-medium",
        "base16-gruvbox-material-dark-soft",
        "base16-gruvbox-material-light-hard",
        "base16-gruvbox-material-light-medium",
        "base16-gruvbox-material-light-soft",
        "base16-black-metal",
        "base16-black-metal-khold",
      },
      livePreview = true,
    })

    vim.keymap.set("n", "<leader>tu", ":Themery<CR>", { desc = "Open Themery theme picker" })
  end
}
