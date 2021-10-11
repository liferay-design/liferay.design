import components from 'gatsby-plugin-theme-ui/components'
import layouts from 'gatsby-plugin-theme-ui/layouts'
import prism from '@theme-ui/prism/presets/theme-ui'

export default {
	...components,
	...layouts,
	colors: {
		// Basic Theme Colors
		text: '#fff',
		background: '#13141F',
		primary: '#0B5FFF',
		secondary: '#0084ff',
		accent: '#FC3BBA',
		muted: '#80acff',
		// Colors used by Prism for syntax highlighting
		gray: '#6D7580',
		// Additional Liferay Colors
		black: '#13141F',
		white: '#FFF',
		grayBg: '#F1f2f5',
		grayBgL1: '#F7f8f9',
		lightestBlue: '#f2f6ff',
		// Lexicon Colors
		main: '#272833',
		mainD1: '#1C1C24',
		mainD2: '#111116',
		mainL1: '#30313f',
		mainL2: '#393a4a',
		mainL3: '#6b6c7e',
		mainL4: '#A7a9bc',
		mainL5: '#Cdced9',
		mainL6: '#E7e7ed',
		mainL8: '#F5f5f8',
		primaryd2: '#004ad7',
		primaryd1: '#0053f0',
		primaryl1: '#80acff',
		primaryl2: '#b3cdff',
		primaryl3: '#f0f5ff',
		info: '#2e5aac',
		charts: {
			blue: '#4B9BFF',
			orange: '#FFB46E',
			red: '#FF5F5F',
			teal: '#50D2A0',
			pink: '#FF73C3',
			green: '#9BE169',
			purple: '#AF78FF',
			yellow: '#FFD76E',
			cyan: '#5FC8FF',
			indigo: '#7785FF',
		},
		// Blueprints Colors
		neutral1: '#2C3A4B',
		neutral2: '#394452',
		neutral3: '#545D69',
		neutral4: '#6D7580',
		neutral5: '#858C94',
		neutral6: '#A5ABB3',
		neutral7: '#DADEE3',
		neutral8: '#EBEEF2',
		neutral9: '#F4F6F9',
	},
	fonts: {
		body: '"Source Code Pro", Menlo, monospace',
		heading: '"Source Code Pro", Menlo, monospace',
		monospace: '"Source Code Pro", Menlo, monospace',
		modes: {
			lexicon: {
				body:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
				heading:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
			},
			brand: {
				body: '"Source Sans Pro", Tahoma, "Trebuchet MS", sans-serif',
			},
		},
	},
	fontSizes: ['.8rem', '.9rem', '1rem', '1.2rem', '1.8rem', '2.2rem', '3rem', '5rem'],
	sizes: ['.8rem', '.9rem', '1rem', '1.2rem', '1.8rem', '2.2rem', '3rem', '5rem'],
	lineHeights: {
		body: 1.4,
		heading: 1.1,
	},
	fontWeights: {
		body: 400,
		heading: 900,
		bold: 700,
	},
	letterSpacings: {
		heading: '-0.05em',
		caps: '0.1em',
	},
	elevations: [
		'0 0.05rem 1rem -0.5rem rgba(0,0,0, 0.5)',
		'0 0.1rem 3rem rgba(0,0,0, 0.08)',
		'0 0.5rem 5rem -1rem rgba(0,0,0, 0.16)',
		'0 0.5rem 8rem -0.5rem rgba(0,0,0, 0.16)',
	],
	text: {
		heading: {
			color: 'text',
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
			letterSpacing: 'heading',
		},
		display: {
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontSize: [5, 6, 7],
		},
		caps: {
			textTransform: 'uppercase',
			letterSpacing: 'caps',
		},
		hotkey: {
			variant: 'styles.codeBase',
			lineHeight: '1.5',
			textTransform: 'capitalize',
			fontWeight: 'bold',
			color: 'mainL4',
			py: 0,
			mx: '.2ch',
			bg: 'white',
		},
		code: {},
	},
	space: [0, '.4rem', '1rem', '2rem', '3rem', '8rem', '16rem', '32rem'],
	alignments: {
		center: {
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
	styles: {
		root: {
			fontFamily: 'body',
			fontWeight: 'body',
			color: 'main',
		},
		codeBase: {
			backgroundColor: 'mainL8',
			border: theme => 'solid 1px ' + theme.colors.mainL6,
			borderRadius: '.2rem',
			mb: 3,
			px: 1,
			py: '.2rem',
		},
		code: {
			variant: 'styles.codeBase',
			fontSize: 2,
			color: 'muted',
			...prism,
		},
		pre: {
			display: 'inline-block',
			...prism,
		},
		inlineCode: {
			//https://github.com/mdx-js/specification/issues/7
			variant: 'styles.codeBase',
			fontSize: '.9em',
			lineHeight: 1,
			color: 'accent',
			py: '.1em',
			...prism,
		},
	},
}
