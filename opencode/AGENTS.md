# Global guidance

- For delegated subagent work, spawn Zeron chats (the `zeron` MCP tools, `create_chat` / `create_chats` with `kind: "subagent"`) so they open as sub-chats / lanes under the current chat's Subagents — instead of the OpenCode-internal `subagent` tool, which is invisible to Zeron.
- Use `kind: "side"` only for side conversations the person should treat as their own; use `kind: "subagent"` for delegated tasks.
