module.exports = {
	siteMetadata: {
		title: 'Liferay.Design',
		author: 'Ryan Garant',
		description:
			'Blogs, careers, guidelines, and other resources from the Design Teams at Liferay!',
	},
	plugins: [
		'gatsby-plugin-brotli',
		'gatsby-plugin-catch-links',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-790163-24',
				// Puts tracking script in the head instead of the body
				head: true,
				// Setting this parameter is optional
				anonymize: false,
				// Setting this parameter is also optional
				respectDNT: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: 'GTM-WWQK8ZR',

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// Specify optional GTM environment details.
				// gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
				// gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
				// dataLayerName: "YOUR_DATA_LAYER_NAME",
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-resolve-src',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Liferay Design`,
				short_name: `Liferay.Design`,
				background_color: `#FFF`,
				theme_color: `#0b5fff`,
				icon: `src/images/favicon.svg`,
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-transition-link`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/images`,
				name: 'images',
			},
		},
		`gatsby-transformer-yaml`,
		{
			resolve: 'gatsby-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1035,
							sizeByPixelDensity: true,
						},
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
						},
					},
				],
			},
		},
	],
	mapping: {
		'MarkdownRemark.frontmatter.author': `AuthorsYaml`,
		'Mdx.frontmatter.author': `AuthorsYaml`,
		'AuthorsYaml.office': `OfficesYaml.id`,
		'MarkdownRemark.frontmatter.office': `OfficesYaml`,
		'Mdx.frontmatter.office': `OfficesYaml`,
	},
}
