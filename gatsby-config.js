module.exports = {
	siteMetadata: {
		title:
			'Liferay.Design | Blogs, careers, guidelines, and other resources from the Design Teams at Liferay!',
		author: 'Ryan Garant',
	},
	plugins: [
		'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-resolve-src',
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src',
			},
		},
	],
}
