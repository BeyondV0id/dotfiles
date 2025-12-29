return {
  {
    "RRethy/base16-nvim",
    lazy = false,
    priority = 1000,
    config = function()
      -- Enable base16 colorscheme
      require('base16-colorscheme').with_config({
        telescope = true,
        indentblankline = true,
        notify = true,
        ts_rainbow = true,
        cmp = true,
        illuminate = true,
        dapui = true,
      })
      
      -- Set a default base16 theme
      -- You can change this to any base16 theme you like
      -- vim.cmd('colorscheme base16-gruvbox-material-dark-medium')
    end,
  },
}
