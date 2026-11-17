return {
	cmd = { "typescript-language-server", "--stdio" },
	filetypes = { "javascript", "javascriptreact", "javascript.jsx" },
	root_markers = { "package.json", "jsconfig.json", ".git" },
	init_options = {
		preferences = {
			disableSuggestions = false,
			quotePreference = "auto",
			includeCompletionsForModuleExports = true,
			includeCompletionsForImportStatements = true,
			includeCompletionsWithSnippetText = true,
			allowIncompleteCompletions = true,
			allowRenameOfImportPath = true,
		},
		hostInfo = "neovim",
		maxTsServerMemory = 8192,
	},
	settings = {
		javascript = {
			format = {
				enable = true,
			},
			validate = {
				enable = true,
			},
			suggest = {
				autoImports = true,
				completeFunctionCalls = true,
				completeJSDocs = true,
			},
			-- Disable inlay hints to prevent errors
			inlayHints = {
				includeInlayParameterNameHints = "none",
				includeInlayParameterNameHintsWhenArgumentMatchesName = false,
				includeInlayFunctionParameterTypeHints = false,
				includeInlayVariableTypeHints = false,
				includeInlayPropertyDeclarationTypeHints = false,
				includeInlayFunctionLikeReturnTypeHints = false,
				includeInlayEnumMemberValueHints = false,
			},
		},
		typescript = {
			-- Disable TypeScript features for JavaScript files
			validate = {
				enable = false,
			},
		},
	},
}
