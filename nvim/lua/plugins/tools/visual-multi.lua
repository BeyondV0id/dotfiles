return {
  "mg979/vim-visual-multi",
  lazy = false,
  init = function()
    -- Disable default mappings so <C-n> doesn't get claimed by Visual Multi
    vim.g.VM_default_mappings = 0
  end,
}
