return {
  "NickvanDyke/opencode.nvim",
  dependencies = {
    -- Recommended for `ask()`, and required for `toggle()` — otherwise optional
    { "folke/snacks.nvim", opts = { input = { enabled = true } } },
  },
  config = function()
    local opencode_cmd = "opencode"
    ---@type snacks.terminal.Opts
    local terminal_opts = {
      win = {
        position = "right",
        enter = false,
      },
    }

    vim.g.opencode_opts = {
      -- opencode.nvim no longer bundles a terminal manager, so start one ourselves
      server = {
        start = function()
          require("snacks.terminal").open(opencode_cmd, terminal_opts)
        end,
      },
    }

    -- Required for `opts.auto_reload`
    vim.opt.autoread = true

    -- Toggle the embedded OpenCode terminal (normal + terminal mode)
    vim.keymap.set({ "n", "t" }, "<C-.>", function()
      require("snacks.terminal").toggle(opencode_cmd, terminal_opts)
    end, { desc = "Toggle embedded" })
    vim.keymap.set("n", "<leader>ot", function()
      require("snacks.terminal").toggle(opencode_cmd, terminal_opts)
    end, { desc = "Toggle embedded" })

    -- `@this` = selection/range if any, else cursor position
    vim.keymap.set("n", "<leader>oa", function()
      require("opencode").ask("@this: ")
    end, { desc = "Ask about this" })
    vim.keymap.set("v", "<leader>oa", function()
      require("opencode").ask("@this: ")
    end, { desc = "Ask about selection" })
    vim.keymap.set("n", "<leader>o+", function()
      require("opencode").prompt("@buffer")
    end, { desc = "Send buffer to prompt" })
    vim.keymap.set("v", "<leader>o+", function()
      require("opencode").prompt("@this")
    end, { desc = "Send selection to prompt" })
    vim.keymap.set("n", "<leader>oe", function()
      require("opencode").prompt("Explain @this and its context")
    end, { desc = "Explain this code" })
    vim.keymap.set("n", "<leader>on", function()
      require("opencode").command("session_new")
    end, { desc = "New session" })
    vim.keymap.set("n", "<S-C-u>", function()
      require("opencode").command("messages_half_page_up")
    end, { desc = "Messages half page up" })
    vim.keymap.set("n", "<S-C-d>", function()
      require("opencode").command("messages_half_page_down")
    end, { desc = "Messages half page down" })
    vim.keymap.set({ "n", "v" }, "<leader>os", function()
      require("opencode").select()
    end, { desc = "Select prompt" })
  end,
}
