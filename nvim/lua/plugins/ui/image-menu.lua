return {
  name = "image-menu.nvim",
  dir = vim.fn.stdpath("config") .. "/local/image-menu.nvim",
  lazy = false,
  priority = 1100,
  main = "image_menu",
  opts = {},
  keys = {
    { "<leader>ti", "<cmd>ImageMenu<cr>", desc = "Dashboard Image Picker" },
    { "<leader>tI", "<cmd>ImageStyle<cr>", desc = "Dashboard Image Style" },
  },
}
