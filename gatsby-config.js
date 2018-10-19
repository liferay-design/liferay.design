module.exports = {
	siteMetadata: {
		title:
			'Liferay.Design | Blogs, careers, guidelines, and other resources from the Design Teams at Liferay!',
		author: 'Ryan Garant',
	},
	plugins: [
		'gatsby-plugin-catch-links',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-790163-24',
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: false,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ['/preview/**', '/do-not-track/me/too/'],
				// Enables Google Optimize using your container Id
				// optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
				// Any additional create only fields (optional)
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: 'liferay.design',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-resolve-src',
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
