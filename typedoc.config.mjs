/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
const config = {
	name: 'handy-utility-types',
	entryPoints: ['index.ts'],
	out: './docs',
	excludeInternal: true,
	plugin: ['typedoc-plugin-markdown'],
	readme: 'TEMPLATE.md',
	outputFileStrategy: 'members',
	indexFormat: 'htmlTable',
	parametersFormat: 'htmlTable',
	mergeReadme: true,
	hidePageHeader: true,
	hidePageTitle: true,
	hideGroupHeadings: true,
	hideBreadcrumbs: false,
	useCodeBlocks: false,
	gitRemote: 'origin',
	sort: ['kind', 'source-order'],
	validation: {
		invalidLink: true,
		notExported: false,
		notDocumented: false
	},
	publicPath: 'https://github.com/itsmeid/handy-utility-types/tree/main/docs'
};

export default config;
