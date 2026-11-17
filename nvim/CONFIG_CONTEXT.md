# Neovim Config Context

**Location**: `C:\Users\harsh\AppData\Local\nvim`  
**Base**: LazyVim starter template  
**Last Updated**: 2026-11-02

---

## Structure

```
nvim/
├── init.lua                    # Entry point → loads config.lazy
├── lua/config/
│   ├── lazy.lua                # lazy.nvim bootstrap + plugin spec imports
│   ├── options.lua             # vim.opt overrides
│   ├── keymaps.lua             # Custom keymaps
│   └── autocmds.lua            # LspAttach autocmds
├── lua/plugins/
│   ├── core/
│   │   ├── lsp.lua             # Mason + nvim-lspconfig servers
│   │   ├── treesitter.lua      # nvim-treesitter parsers
│   │   └── auto-save.lua       # Pocco81/auto-save.nvim
│   ├── ui/
│   │   ├── dashboard.lua       # Snacks dashboard + ASCII art
│   │   ├── neo-tree.lua        # File explorer (shows hidden/gitignored)
│   │   ├── bufferline.lua      # Tab/buffer line
│   │   ├── telescope.lua       # Telescope with ui-select
│   │   ├── colorizer.lua
│   │   ├── tailwind-colorizer.lua
│   │   └── themery.lua
│   ├── tools/
│   │   ├── opencode.lua        # OpenCode.nvim + Snacks terminal
│   │   ├── leetcode.lua
│   │   ├── yanky.lua
│   │   ├── visual-multi.lua
│   │   ├── todo-comments.lua
│   │   ├── project.lua
│   │   ├── inc-rename.lua
│   │   └── goto-preview.lua
│   ├── themes/
│   │   ├── gruvbox-theme.lua   # Active (priority 1000)
│   │   ├── everblush.lua
│   │   ├── coolnight.lua
│   │   └── base16-themes.lua
│   └── lazydev.lua
├── images/                     # Dashboard art (2099.jpeg used)
└── stylua.toml                 # Lua formatter config
```

---

## Key Configurations

### LazyVim Imports (lazy.lua)
```lua
spec = {
  { "LazyVim/LazyVim", import = "lazyvim.plugins" },
  { import = "plugins" },
  { import = "plugins.core" },
  { import = "plugins.themes" },
  { import = "plugins.tools" },
  { import = "plugins.ui" },
}
```

### Options (options.lua)
- `vim.opt.list = false` — hide whitespace markers
- `vim.opt.showtabline = 2` — always show bufferline
- `vim.opt.softtabstop = 4`

### Keymaps (keymaps.lua)
| Key | Mode | Action |
|-----|------|--------|
| `jk` | i/v/s | Escape |
| `<C-s>` | n/i | Format + Save |
| `<C-a>` | n/i | Select All |
| `<Tab>` / `<S-Tab>` | n | Next/Prev buffer |
| `<A-l>` / `<A-h>` | n | Next/Prev buffer |
| `<S-j>` / `<S-k>` | v | Move selection down/up |
| `<leader>fh` | n | Find Help Tags |
| `<leader>fs` | n | Document Symbols |
| `<leader>cs` | n | LSP Document Symbols |

### LSP Servers (lsp.lua)
- `lua_ls` — Lua
- `clangd` — C/C++ (custom cmd path: `C:/mingw64/bin/clangd.exe`)
- `html` — HTML
- `vtsls` — TypeScript/JavaScript
- `cssls` — CSS
- `tailwindcss` — Tailwind CSS
- `eslint` — ESLint

Mason ensure_installed: `luacheck`, `shellcheck`, `shfmt`, `codelldb`

### Treesitter (treesitter.lua)
Ensured installed: `c`, `cpp`, `lua`, `javascript`, `typescript`, `tsx`, `html`, `css`, `prisma`, `sql`, `json`, `jsonc`, `yaml`, `markdown`, `markdown_inline`, `vim`, `vimdoc`, `query`, `regex`, `git_config`, `gitcommit`, `gitignore`, `diff`

Highlight: enabled | Indent: disabled

### Dashboard (dashboard.lua)
- Custom ASCII header (NVIM banner)
- Keys: Find File (f), Recent Files (r), Projects (p), Config (c), Restore Session (s), Lazy (l), Lazy Extras (x), Quit (q)
- Right pane: Terminal running `ascii-image-converter` on `images/2099.jpeg`
- Zen mode toggles: ufo, dim, git_signs, diagnostics, line_number, relative_number, signcolumn, indent

### Neo-tree (neo-tree.lua)
- `filtered_items.visible = true`
- `hide_dotfiles = false`
- `hide_gitignored = false`
- `hide_by_name = { ".git" }`

### Bufferline (bufferline.lua)
- Separator: thin
- Tab size: 21
- Sort by: insert_after_current
- Neo-tree offset with "File Explorer" label
- Hover shows close button

### Telescope (telescope.lua)
- `<C-j>`/`<C-k>`: navigate
- `<C-q>`: send to qflist
- `<Esc>`: close (insert mode)
- ui-select extension: dropdown, no preview, normal mode, ascending, horizontal 50% width

### Themes (gruvbox-theme.lua) — **ACTIVE**
```lua
vim.g.gruvbox_material_transparent_background = 0
vim.g.gruvbox_material_foreground = "mix"
vim.g.gruvbox_material_background = "hard"
vim.g.gruvbox_material_ui_contrast = "high"
vim.g.gruvbox_material_float_style = "hard"
vim.g.gruvbox_material_statusline_style = "hard"
vim.g.gruvbox_material_cursor = "auto"
```

Other themes available but disabled: everblush, coolnight, base16-themes

### OpenCode (opencode.lua)
- Command: `opencode`
- Terminal: right side, no auto-enter
- `<C-.>`: toggle terminal (normal + terminal mode)
- `<leader>ot`: toggle terminal
- `<leader>oa`: ask about selection/cursor
- `<leader>o+`: send buffer/selection to prompt
- `<leader>oe`: explain code
- `<leader>on`: new session
- `<S-C-u>`/`<S-C-d>`: half-page up/down in messages
- `<leader>os`: select prompt

### Auto-save (auto-save.lua)
- Trigger: `InsertLeave`, `TextChanged`
- Debounce: 135ms
- Formats before save via conform.nvim (if LazyVim formatting enabled)
- Skips: special buftypes, unmodifiable, readonly, gitcommit, gitrebase, diff, TelescopePrompt, neo-tree, lazy, mason, help, lspinfo, toggleterm

---

## Unused/Reference Files (Root)
- `tabe_test.lua` — test file
- `repro_leet.lua` / `repro_leet2.lua` / `repro_leet3.lua` / `repro_leet4.lua` — LeetCode reproductions
- `inspect_windows.lua` — debug script
- `KEYBINDINGS.md` — keybind reference
- `lazyvim.json` / `lazy-lock.json` — LazyVim state
- `LICENSE` — license file
- `stylua.toml` — stylua config

---

## Images (images/)
Only `2099.jpeg` is referenced in dashboard. Others: `20992.jpeg`, `802d480b40f3965b5fdf54b97b3d0dbc.jpg`, `batman.jpeg`, `batman2.jpeg`, `ben10.jpeg`, `darthvader.jpeg`, `darthvader2.jpeg`, `milesmorales.jpeg`, `mm.jpeg`, `mm3.jpeg`, `spidey.jpeg`, `spidey2.jpeg`, `spiderman.jpeg`, `Spider-Man 2099.jpg`, `ss.jpg`, `sss.jpg`