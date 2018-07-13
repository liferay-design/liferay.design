module.exports = {
	siteMetadata: {
		title:
			'Liferay.Design | Blogs, careers, guidelines, and other resources from the Design Teams at Liferay!',
	},
	plugins: [
		// `gatsby-plugin-catch-links`,
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-resolve-src',
		'gatsby-plugin-react-next',
		'gatsby-plugin-sass',
		// 'gatsby-transformer-remark',
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		path: `${__dirname}/src/posts`,
		// 		name: 'posts',
		// 	},
		// },
	],
	pathPrefix: '/public',
}
