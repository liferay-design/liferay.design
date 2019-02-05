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
			resolve: 'gatsby-source-sheets',
			options: {
				sheetId: '1zqucTFkeoNch9pDq2ADGWHCK0fn-OH17lnMg3HRLVfY',
				tabName: 'Sheet1',
			},
		},
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
			resolve: 'gatsby-plugin-intercom-spa',
			options: {
			  app_id: 'zxdedz6f',
			  include_in_development: true,
			}
		  },
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-resolve-src',
		{
			resolve: `gatsby-plugin-manifest`,
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
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
}
