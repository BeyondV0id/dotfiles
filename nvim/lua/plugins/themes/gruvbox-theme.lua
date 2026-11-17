return {
  { "LazyVim/LazyVim", opts = { colorscheme = "gruvbox-material" } },
  {
    "sainnhe/gruvbox-material",
    lazy = false,
    priority = 1000,
    init = function()
      vim.g.gruvbox_material_transparent_background = 0
      vim.g.gruvbox_material_foreground = "mix"
      vim.g.gruvbox_material_background = "hard"
      vim.g.gruvbox_material_ui_contrast = "high"
      vim.g.gruvbox_material_float_style = "hard"
      vim.g.gruvbox_material_statusline_style = "hard"
      vim.g.gruvbox_material_cursor = "auto"
    end,
  },
}
