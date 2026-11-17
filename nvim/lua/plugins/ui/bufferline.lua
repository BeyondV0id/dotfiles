return {
  {
    "akinsho/bufferline.nvim",
    keys = {
      { "<S-h>", "<C-u>", desc = "Scroll Half Page Up" },
      { "<S-l>", "<C-d>", desc = "Scroll Half Page Down" },
    },
    opts = {
      options = {
        close_command = function(buf)
          Snacks.bufdelete(buf)
        end,
        right_mouse_command = function(buf)
          Snacks.bufdelete(buf)
        end,
        indicator = {
          icon = "▎",
          style = "icon",
        },
        close_icon = "",
        left_trunc_marker = "",
        right_trunc_marker = "",
        max_name_length = 30,
        max_prefix_length = 30,
        truncate_names = true,
        tab_size = 21,
        persist_buffer_sort = true,
        separator_style = "thin",
        enforce_regular_tabs = true,
        always_show_bufferline = true,
        hover = {
          enabled = true,
          delay = 200,
          reveal = { "close" },
        },
        sort_by = "insert_after_current",
        offsets = {
          {
            filetype = "neo-tree",
            text = "File Explorer",
            text_align = "left",
            separator = true,
          },
        },
      },
    },
  },
}
