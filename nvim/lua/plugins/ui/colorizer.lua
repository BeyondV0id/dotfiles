return {
  "NvChad/nvim-colorizer.lua",
  event = { "BufReadPre", "BufNewFile" },
  opts = {
    filetypes = { "*", html = { names = false } },
    user_default_options = {
      css = true,
      RRGGBBAA = true,
      mode = "background",
    },
  },
}
