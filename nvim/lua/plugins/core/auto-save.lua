return {

  "Pocco81/auto-save.nvim",
  event = { "BufReadPost", "BufNewFile" },


  opts = {
    enabled = true,
    execution_message = {
      message = function()
        return ("AutoSave: saved at " .. vim.fn.strftime("%H:%M:%S"))
      end,
      dim = 0.18,
      cleaning_interval = 1250,
    },
    trigger_events = { "InsertLeave", "TextChanged" },
    condition = function(buf)
      if not vim.api.nvim_buf_is_valid(buf) or vim.api.nvim_buf_get_name(buf) == "" then
        return false
      end
      local fn = vim.fn
      -- Skip special buffer types
      if fn.getbufvar(buf, "&buftype") ~= "" then
        return false
      end

      -- Skip unmodifiable buffers
      if fn.getbufvar(buf, "&modifiable") ~= 1 then
        return false
      end

      -- Skip readonly files
      if fn.getbufvar(buf, "&readonly") == 1 then
        return false
      end

      -- Skip certain filetypes
      local filetype = fn.getbufvar(buf, "&filetype")
      local skip_filetypes = {
        "gitcommit",
        "gitrebase",
        "diff",
        "TelescopePrompt",
        "neo-tree",
        "lazy",
        "mason",
        "help",
        "lspinfo",
        "toggleterm",
      }

      for _, ft in ipairs(skip_filetypes) do
        if filetype == ft then
          return false
        end
      end

      return true
    end,
    write_all_buffers = false,
    debounce_delay = 135,
  },
}
