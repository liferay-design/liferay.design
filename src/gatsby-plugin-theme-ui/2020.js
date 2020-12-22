import baseTheme from 'gatsby-plugin-theme-ui'

export default {
	...baseTheme,
	useBodyStyles: false,
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
	fonts: {
		...baseTheme.fonts,
		body: '"Source Sans Pro", Tahoma, "Trebuchet MS", sans-serif',
		heading: '"Source Sans Pro", Tahoma, "Trebuchet MS", sans-serif',
		condensed: '"Bebas Neue", "Franklin Gothic Condensed", sans-serif',
	},
	fontSizes: [8, 12, 16, 20, 24, 32, 40, 48, 56],
	fontWeights: {
		...baseTheme.fontWeights,
		light: 200,
		heading: 600,
		bold: 800,
	},
	styles: {
		...baseTheme.styles,
		root: {
			...baseTheme.root,
			fontFamily: 'body',
			fontWeight: 'body',
			color: 'red !important',
		},
	},
	lineHeights: {
		body: 1.5,
	},
	letterSpacings: {
		heading: 'initial',
	},
	text: {
		...baseTheme.text,
		preheader: {
			fontFamily: 'condensed',
			fontSize: 4,
			fontWeight: 'body',
			letterSpacing: '.6ch',
			lineHeight: 1.5,
			fontWeight: 300,
			color: 'primary',
		},
		display: {
			fontSize: 8,
			fontWeight: 'body',
		},
		l1: {
			fontSize: 7,
		},
		l2: {
			fontSize: 7,
		},
	},
	gradients: {
		splitBackgroundGradient: 'linear-gradient(0deg, rgba(0,0,0,0) 49.99%, #fff 50%)',
		backgroundGradient: 'linear-gradient(247.41deg, #212B32 6.16%, #1C1F23 63.57%)',
		lightBackgroundGradient:
			'linear-gradient(219.58deg, rgba(61, 73, 86, 0.8) -2.98%, rgba(66, 81, 98, 0) 79.84%), linear-gradient(0deg, #232A31, #232A31)',
	},
}
