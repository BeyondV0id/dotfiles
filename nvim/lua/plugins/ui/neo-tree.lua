return {
  "nvim-neo-tree/neo-tree.nvim",
  opts = {
    filesystem = {
      filtered_items = {
        visible = true, -- show hidden / filtered items instead of completely hiding
        hide_dotfiles = false, -- don’t hide dotfiles
        hide_gitignored = false, -- also show files ignored by git, if desired
        -- optionally you can hide specific names if you don’t want *everything*
        hide_by_name = { ".git" },
        never_show = {},
      },
    },
  },
}
