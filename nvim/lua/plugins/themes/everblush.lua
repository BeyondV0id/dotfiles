return {
  {
    "Everblush/nvim",
    name = "everblush",
    enabled = true,
    priority = 1000,
    config = function()
      require("everblush").setup({
        transparent_background = false,
        nvim_tree = {
          contrast = true,
        },
      })
      -- Uncomment to set as default colorscheme
      -- vim.cmd.colorscheme("everblush")
    end,
  }
}