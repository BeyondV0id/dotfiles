return {
  {
    "kawre/leetcode.nvim",
    -- No build command needed since HTML parser is already ensured by treesitter config
    dependencies = {
      "nvim-lua/plenary.nvim", -- required
      "MunifTanjim/nui.nvim", -- required
      -- optional but recommended
      "nvim-telescope/telescope.nvim", -- picker
      "nvim-tree/nvim-web-devicons", -- icons
      "nvim-treesitter/nvim-treesitter", -- for HTML formatting
    },
    cmd = "Leet", -- lazy load on command
    opts = {
      -- your preferred programming language
      lang = "cpp",
      -- storage locations
      storage = {
        home = "D:/problemSolving/leetvim",
        cache = "D:/problemSolving/leetvim/cache",
      },
      -- enable logging
      logging = true,

      -- picker configuration (uses telescope)
      picker = {
        provider = "telescope",
      },

      -- code injection for your preferred languages
      injector = {
        ["cpp"] = {
          imports = function()
            return { "#include <bits/stdc++.h>", "using namespace std;" }
          end,
          after = "int main() { return 0; }",
        },
        ["python3"] = {
          imports = function(default_imports)
            return default_imports
          end,
          after = {},
        },
      },

      -- editor settings
      editor = {
        reset_previous_code = false,
        fold_imports = true,
      },

      -- console settings
      console = {
        open_on_runcode = true,
        dir = "row", -- or "col" for column layout
        size = {
          width = "90%",
          height = "75%",
        },
        result = {
          size = "60%",
        },
        testcase = {
          virt_text = true,
          size = "40%",
        },
      },

      -- description panel settings
      description = {
        position = "left",
        width = "40%",
        show_stats = true,
      },

      -- cache settings (update weekly)
      cache = {
        update_interval = 60 * 60 * 24 * 7, -- 7 days
      },

      -- key mappings
      keys = {
        toggle = { "q" },
        confirm = { "<CR>" },
        reset_testcases = "r",
        use_testcase = "U",
        focus_testcases = "H",
        focus_result = "L",
      },

      -- hooks for custom functionality
      hooks = {
        ["enter"] = {},
        ["question_enter"] = {},
        ["leave"] = {},
      },

      -- plugin settings
      plugins = {
        non_standalone = false, -- set to true if you want to use with dashboard plugins
      },

      -- theme customization (optional)
      theme = {},

      -- image support (disabled by default)
      image_support = false,
    },

    -- key mappings for easy access
    keys = {
      { "<leader>lq", "<cmd>Leet<cr>", desc = "Open Leetcode" },
      { "<leader>ll", "<cmd>Leet list<cr>", desc = "List Problems" },
      { "<leader>lr", "<cmd>Leet random<cr>", desc = "Random Problem" },
      { "<leader>ld", "<cmd>Leet daily<cr>", desc = "Daily Problem" },
      { "<leader>ls", "<cmd>Leet submit<cr>", desc = "Submit Solution" },
      { "<leader>lt", "<cmd>Leet test<cr>", desc = "Test Solution" },
      { "<leader>li", "<cmd>Leet info<cr>", desc = "Problem Info" },
      { "<leader>lc", "<cmd>Leet console<cr>", desc = "Open Console" },
      { "<leader>ly", "<cmd>Leet yank<cr>", desc = "Yank Code" },
      { "<leader>lg", "<cmd>Leet lang<cr>", desc = "Change Language" },
      { "<leader>lo", "<cmd>Leet open<cr>", desc = "Open in Browser" },
      { "<leader>lR", "<cmd>Leet reset<cr>", desc = "Reset Code" },
      { "<leader>lL", "<cmd>Leet last_submit<cr>", desc = "Last Submit" },
    },
  },
}
