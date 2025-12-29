# 🎹 Neovim Keybindings Reference

## 🧠 Terminal Mode Navigation

| Key      | Action     | Description                             |
| -------- | ---------- | --------------------------------------- |
| `Ctrl+H` | Move left  | Navigate to left window from terminal   |
| `Ctrl+L` | Move right | Navigate to right window from terminal  |
| `Ctrl+J` | Move down  | Navigate to bottom window from terminal |
| `Ctrl+K` | Move up    | Navigate to top window from terminal    |

## 🖱️ Text Selection

| Key      | Mode   | Action     | Description                          |
| -------- | ------ | ---------- | ------------------------------------ |
| `Ctrl+A` | Normal | Select all | Select entire buffer                 |
| `Ctrl+A` | Insert | Select all | Exit insert and select entire buffer |
| `Ctrl+A` | Visual | Select all | Select entire buffer                 |

## 🪟 Window Management

| Key  | Action           | Description               |
| ---- | ---------------- | ------------------------- |
| `sh` | Horizontal split | Split window horizontally |
| `sv` | Vertical split   | Split window vertically   |

## 🪜 Line Movement (Visual Mode)

| Key       | Action    | Description              |
| --------- | --------- | ------------------------ |
| `Shift+J` | Move down | Move selected lines down |
| `Shift+K` | Move up   | Move selected lines up   |

## 📜 Page Navigation

| Key       | Action    | Description           |
| --------- | --------- | --------------------- |
| `Shift+H` | Page up   | Scroll half page up   |
| `Shift+L` | Page down | Scroll half page down |

## 🧭 Buffer Navigation

| Key         | Action          | Description               |
| ----------- | --------------- | ------------------------- |
| `Tab`       | Next buffer     | Switch to next buffer     |
| `Shift+Tab` | Previous buffer | Switch to previous buffer |

## ⎋ Mode Escape

| Key  | Mode   | Action | Description         |
| ---- | ------ | ------ | ------------------- |
| `jk` | Insert | Escape | Exit to normal mode |
| `jk` | Visual | Escape | Exit to normal mode |
| `jk` | Select | Escape | Exit to normal mode |

## 🔍 LSP Features (When LSP is Active)

### Hover & Documentation

| Key       | Action              | Description                                  |
| --------- | ------------------- | -------------------------------------------- |
| `K`       | Hover documentation | Show detailed info about symbol under cursor |
| `Shift+K` | Hover docs (legacy) | Alternative hover documentation              |
| `Ctrl+K`  | Signature help      | Show function signature help                 |

### Navigation

| Key          | Action                        | Description                      |
| ------------ | ----------------------------- | -------------------------------- |
| `gd`         | Go to definition              | Jump to symbol definition        |
| `gD`         | Go to declaration             | Jump to symbol declaration       |
| `gi`         | Go to implementation          | Jump to symbol implementation    |
| `gt`         | Go to type definition         | Jump to type definition          |
| `gr`         | Show references               | List all references to symbol    |
| `<leader>gd` | Go to definition (legacy)     | Alternative go to definition     |
| `<leader>gr` | Show references (legacy)      | Alternative show references      |
| `<leader>gi` | Go to implementation (legacy) | Alternative go to implementation |

### Code Actions & Refactoring

| Key          | Action           | Description                 |
| ------------ | ---------------- | --------------------------- |
| `<leader>ca` | Code actions     | Show available code actions |
| `<leader>cr` | Rename symbol    | Rename symbol under cursor  |
| `<leader>cs` | Document symbols | Show document symbols       |

### Diagnostics & Errors

| Key         | Action                | Description                       |
| ----------- | --------------------- | --------------------------------- |
| `Ctrl+J`    | Next diagnostic       | Jump to next error/warning        |
| `Ctrl+K`    | Previous diagnostic   | Jump to previous error/warning    |
| `<leader>e` | Show line diagnostics | Show diagnostics for current line |

## 🎯 Code Completion (nvim-cmp)

### Navigation in Completion Menu

| Key         | Action              | Description                          |
| ----------- | ------------------- | ------------------------------------ |
| `Ctrl+N`    | Next item           | Select next completion item          |
| `Ctrl+P`    | Previous item       | Select previous completion item      |
| `Ctrl+J`    | Next item (alt)     | Alternative next completion item     |
| `Ctrl+K`    | Previous item (alt) | Alternative previous completion item |
| `Tab`       | Smart next          | Cycle forward (completion/snippet)   |
| `Shift+Tab` | Smart previous      | Cycle backward (completion/snippet)  |

### Documentation Scrolling

| Key      | Action      | Description                        |
| -------- | ----------- | ---------------------------------- |
| `Ctrl+U` | Scroll up   | Scroll up in documentation popup   |
| `Ctrl+D` | Scroll down | Scroll down in documentation popup |

### Completion Actions

| Key          | Action            | Description                              |
| ------------ | ----------------- | ---------------------------------------- |
| `Enter`      | Accept completion | Accept selected completion               |
| `Ctrl+Y`     | Force accept      | Accept completion (even if not selected) |
| `Ctrl+E`     | Abort             | Close completion menu                    |
| `Escape`     | Close             | Close completion menu                    |
| `Ctrl+Space` | Trigger           | Manually trigger completion              |

## 🚀 Quick Reference - Most Used Keybindings

### Essential Navigation

- `Tab` / `Shift+Tab` - Switch buffers
- `K` - Show documentation
- `gd` - Go to definition
- `gr` - Show references

### Completion Flow

1. `Ctrl+Space` - Trigger completion
2. `Ctrl+N`/`Ctrl+P` or `Tab`/`Shift+Tab` - Navigate options
3. `Enter` - Accept selection
4. `Escape` - Cancel

### Error Navigation

- `Ctrl+J` - Next error
- `Ctrl+K` - Previous error
- `<leader>e` - Show error details

### Code Actions

- `<leader>ca` - Show code actions
- `<leader>cr` - Rename symbol

---

## 💡 Tips & Notes

1. **Leader Key**: In LazyVim, the leader key is typically `Space`
2. **Completion Smart Behavior**: Tab will cycle through completions when menu is open, otherwise it works normally
3. **Buffer vs Window**: Buffers are files, windows are views of buffers
4. **LSP Features**: Only work when LSP server is attached to the buffer
5. **Mode Indicators**:
   - `n` = Normal mode
   - `i` = Insert mode
   - `v` = Visual mode
   - `t` = Terminal mode

## 🔧 Timeout Settings

- Escape timeout: 250ms
- Key sequence timeout: Enabled

---

_Generated from your Neovim configuration_
