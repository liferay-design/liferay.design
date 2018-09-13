module.exports = {
	siteMetadata: {
		title:
			'Liferay.Design | Blogs, careers, guidelines, and other resources from the Design Teams at Liferay!',
		author: 'Ryan Garant',
	},
	plugins: [
		'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-resolve-src',
		'gatsby-plugin-sass',
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/images`,
				name: 'images',
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			// options: {
			// 	plugins: [
			// 		{
			// 			resolve: 'gatsby-remark-images',
			// 			options: {
			// 				// It's important to specify the maxWidth (in pixels) of
			// 				// the content container as this plugin uses this as the
			// 				// base for generating different widths of each image.
			// 				maxWidth: 590,
			// 			},
			// 		},
			// 	],
			// },
		},
		`gatsby-transformer-sharp`,
	],
}
