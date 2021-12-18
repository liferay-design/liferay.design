import baseTheme from 'gatsby-plugin-theme-ui'

export default {
	...baseTheme,
	useBodyStyles: false,
	colors: {
		...baseTheme.colors,
		backgroundDark: '#202123',
		darkText: '#202123',
		backgroundLight: '#F6F9FF',
		lightText: '#F6F9FF',
	},
	fonts: {
		...baseTheme.fonts,
		body: '"Source Sans Pro", Tahoma, "Trebuchet MS", sans-serif',
		heading: '"Source Serif Pro", serif', // TODO add better fallbacks, load actual italic font
		smallCaps: '"Source Code Pro", monospace', // TODO add better fallbacks
	},
	fontSizes: [8, 12, 16, 20, 32, 40, 64, 80, 100],
	fontWeights: {
		...baseTheme.fontWeights,
		light: 200,
		heading: 200,
		bold: 600,
	},
	lineHeights: {
		body: 1.5,
	},
	letterSpacings: {
		heading: 'initial',
	},
	boxes: {
		icon: {
			display: 'inline-block',
			padding: '1rem',
			borderRadius: '1rem',
			background: theme => `${theme.gradients.backgroundGradient}`,
			boxShadow: '0 8px 24px -4px rgba(27,28,30,0.6)',
			'> svg': {
				display: 'block',
				height: '3rem',
				width: '3rem',
				color: 'primary',
			},
		},
		section: {
			width: '100vw',
			margin: 'auto',
			maxWidth: '1200px',
			position: 'relative',
		},
		gridTwoCol: {
			mx: [2, 'auto', null],
			mt: [2, 5],
			maxWidth: '1080px',
			gridTemplateColumns: ['1fr', '480px 1fr 480px'],
			gridTemplateRows: 'auto',
			gridColumnGap: 0,
			gridRowGap: 0,
		},
	},
	text: {
		...baseTheme.text,
		preheader: {
			// style this the same as /2021
			...baseTheme.text.caps,
			fontFamily: 'smallCaps',
			fontSize: 3,
			lineHeight: 1.5,
			fontWeight: 'bold',
			color: 'primary',
		},
		body: {
			fontSize: [3, 4],
			fontWeight: 'light',
		},
		display: {
			fontSize: [8, 6],
			fontWeight: 'light',
			// fontWeight: 'heading',
		},
	},
	gradients: {
		splitBackgroundGradient: 'linear-gradient(0deg, rgba(0,0,0,0) 49.99%, #fff 50%)',
		backgroundGradient: 'linear-gradient(247.41deg, #212B32 6.16%, #1C1F23 63.57%)',
		lightBackgroundGradient:
			'linear-gradient(219.58deg, rgba(61, 73, 86, 0.8) -2.98%, rgba(66, 81, 98, 0) 79.84%), linear-gradient(0deg, #232A31, #232A31)',
	},
}
