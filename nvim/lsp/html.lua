return {
	cmd = { "vscode-html-language-server", "--stdio" },
	filetypes = { "html" },
	root_markers = { "package.json", ".git" },
	settings = {
		html = {
			format = {
				enable = true,
			},
			hover = {
				documentation = true,
				references = true,
			},
		},
	},
}
