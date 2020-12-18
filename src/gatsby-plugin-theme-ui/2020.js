import baseTheme from 'gatsby-plugin-theme-ui'

export default {
	...baseTheme,
	colors: {
		...baseTheme.colors,
		black: '#1f2123',
		darkBlack: '#1b1c1e',
		lightBlack: '#1f2123',
		grayHeader: '#555e68',
		grayParagraph: '#888b9b',
		twentyTwentyBlue: '#395DED',
		lightBlue: '#93A7DB',
		twentyTwentyYellow: '#FFC90A',
	},
	gradients: {
		splitBackgroundGradient: 'linear-gradient(0deg, rgba(0,0,0,0) 49.99%, #fff 50%)',
		backgroundGradient: 'linear-gradient(247.41deg, #212B32 6.16%, #1C1F23 63.57%)',
		lightBackgroundGradient:
			'linear-gradient(219.58deg, rgba(61, 73, 86, 0.8) -2.98%, rgba(66, 81, 98, 0) 79.84%), linear-gradient(0deg, #232A31, #232A31)',
	},
}
