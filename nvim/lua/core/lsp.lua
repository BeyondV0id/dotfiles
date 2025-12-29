
-- Native LSP Configuration for Neovim v0.11+
-- This file serves as the handshake between core config and /lsp folder configurations

-- Load individual LSP server configurations from /lsp folder
local lsp_servers = {
    "clangd",
    "cssls", 
    "html",
    "js",
    "lua_ls",
    "tailwindcss",
    "tsserver"
}

-- Function to enable LSP servers natively using vim.lsp.enable()
local function setup_native_lsp()
    for _, server in ipairs(lsp_servers) do
        local config_path = vim.fn.stdpath("config") .. "/lsp/" .. server .. ".lua"
        
        -- Check if config file exists and load it
        if vim.fn.filereadable(config_path) == 1 then
            local ok, server_config = pcall(dofile, config_path)
            
            if ok and server_config then
                -- Set up the server config using new native API
                vim.lsp.config[server] = server_config
            else
                vim.notify("Failed to load LSP config for " .. server, vim.log.levels.WARN)
            end
        else
            vim.notify("LSP config file not found: " .. config_path, vim.log.levels.WARN)
        end
    end
    
    -- Enable all configured LSP servers
    vim.lsp.enable(lsp_servers)
end

-- Enable LSP servers using the new native approach
setup_native_lsp()

-- Disable inlay hints to prevent errors
vim.lsp.inlay_hint.enable(false)

-- Enhanced diagnostic configuration
vim.diagnostic.config({
    virtual_lines = false, -- Set to true if you want virtual lines
    virtual_text = {
        prefix = "●",
        severity = {
            min = vim.diagnostic.severity.WARN,
        },
    },
    underline = true,
    update_in_insert = false,
    severity_sort = true,
    float = {
        border = "rounded",
        source = true,
        header = "",
        prefix = "",
        focusable = false,
    },
    signs = {
        text = {
            [vim.diagnostic.severity.ERROR] = "󰅚 ",
            [vim.diagnostic.severity.WARN] = "󰀪 ",
            [vim.diagnostic.severity.INFO] = "󰋽 ",
            [vim.diagnostic.severity.HINT] = "󰌶 ",
        },
        numhl = {
            [vim.diagnostic.severity.ERROR] = "ErrorMsg",
            [vim.diagnostic.severity.WARN] = "WarningMsg",
        },
    },
})

-- Helper function to check LSP status
vim.api.nvim_create_user_command('LspStatus', function()
    local clients = vim.lsp.get_clients()
    if #clients == 0 then
        vim.notify("No LSP clients attached", vim.log.levels.INFO)
        return
    end
    
    for _, client in ipairs(clients) do
        local msg = string.format("LSP: %s (id: %d, buffers: %s)", 
            client.name, 
            client.id, 
            table.concat(client.attached_buffers, ", ")
        )
        vim.notify(msg, vim.log.levels.INFO)
    end
end, {desc = "Show LSP client status"})

-- Helper function to restart LSP
vim.api.nvim_create_user_command('LspRestart', function()
    local clients = vim.lsp.get_clients()
    for _, client in ipairs(clients) do
        vim.lsp.stop_client(client.id)
    end
    vim.notify("LSP clients restarted", vim.log.levels.INFO)
    -- Trigger FileType autocmd to restart servers
    vim.cmd('doautocmd FileType')
end, {desc = "Restart all LSP clients"})
