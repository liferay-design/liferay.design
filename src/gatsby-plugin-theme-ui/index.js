import { fontWeights } from 'theme/'

export default {
	colors: {
		text: '#fff',
		background: 'inherit',
		black: '#13141F',
		white: '#FFF',
		primary: '#0B5FFF',
		grayBg: '#F1f2f5',
		grayBgL1: '#F7f8f9',
		lightestBlue: '#f2f6ff',
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
		neutral1: '#2C3A4B',
		neutral2: '#394452',
		neutral3: '#545D69',
		neutral4: '#6D7580',
		neutral5: '#858C94',
		neutral6: '#A5ABB3',
		neutral7: '#DADEE3',
		neutral8: '#EBEEF2',
		neutral9: '#F4F6F9',
		primaryd2: '#004ad7',
		primaryd1: '#0053f0',
		primaryl1: '#80acff',
		primaryl2: '#b3cdff',
		primaryl3: '#f0f5ff',
	},
	buttons: {
		primary: {
			color: 'white',
			bg: 'primary',
		},
		icon: {
			transform: 'translateY(0) scale(0.95)',
			transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			'&:hover': {
				transform: 'translateY(-0.4rem) scale(1)',
				transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				svg: {
					fill: 'primary',
				},
			},
		},
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
		tag: {
			bg: 'black',
			borderRadius: '0.4rem',
			p: 1,
			variant: 'text.caps',
			color: 'lightGrey',
			fontWeight: 'heading',
			fontSize: 1,
			m: 2,
		},
		hotkey: {
			lineHeight: '1.5',
			textTransform: 'capitalize',
			fontWeight: 'bold',
			color: 'mainL4',
			px: 1,
			py: 0,
			mx: '.2ch',
			bg: 'mainL8',
			borderRadius: '2px',
			border: theme => 'solid 1px ' + theme.colors.mainL5,
		},
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
	},
	cards: {
		'4:3': {
			'&:after': { pb: '75%', display: 'block', content: '""' },
		},
		'16:9': {
			'&:after': { pb: '56.25%', display: 'block', content: '""' },
		},
	},
	images: {
		avatar: {
			height: 64,
			width: 64,
			borderRadius: '50%',
			bg: 'main',
			variant: 'alignments.center',
			small: {
				height: 40,
				width: 40,
				// border: 'solid 1px #E7e7ed',
			},
		},
		grey: {
			filter: 'grayscale(1)',
			transition: 'filter 200ms ease-in-out',
			objectFit: 'cover',
		},
		sexyShadow: {
			filter: 'blur(32px)',
			transition: 'opacity 0.15s ease-in-out',
			opacity: 0,
		},
	},
	grids: {
		twoCards: {
			gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))',
			gap: '5rem 4rem',
		},
		threeCards: {
			gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
			gap: '5rem 4rem',
		},
		sideNav: {
			gridTemplate: [
				'"nav" 8rem "main" 1fr / 1fr',
				null,
				'"sidebar main" auto / 20rem 1fr',
			],
			gap: 0,
		},
		post: {
			gridTemplate: [
				'"c v" auto "i i" auto / 1fr 1rem',
				null,
				'"c c v" auto "l i r" auto "l i r" auto / 1fr 768px 1fr',
			],
			gap: 0,
		},
		landingPage: {
			gridTemplate: [
				'"lg tlg rg" auto "lg tlc rg" auto "lg trc rg" auto "lg m rg" auto "lg blc rg" auto "lg brc rg" auto "lg brg rg" auto / 0 1fr 0',
				null,
				'"tlg tlc trc rg" auto "lg m m rg" auto "lg blc brc brg" auto / 1rem 5fr 5fr 1rem',
			],
			gap: '2rem',
		},
		swatches: {
			gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr) )',
			autoRows: 'auto',
			gap: '3.3rem 3rem',
		},
		smallCards: {
			gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr) )',
			autoRows: 'auto',
			gap: '2rem',
		},
	},
	embed: {
		video: {
			mt: 3,
			mb: 4,
		},
		slides: {
			mt: 3,
			mb: 4,
		},
	},
	input: {
		backgroundColor: '#f1f2f5',
		border: '.0625rem solid #e7e7ed',
		borderRadius: '.25rem',
		boxShadow: '0 0 transparent',
		color: '#272833',
		display: 'block',
		fontSize: '1rem',
		fontWeight: '400',
		height: '2.5rem',
		lineHeight: '1.5',
		minWidth: '0',
		padding: '.4375rem 1rem',
		width: '100%',
		transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
		'&:focus': {
			backgroundColor: '#f0f5ff',
			borderColor: '#80acff',
			boxShadow: '0 0 transparent,0 0 0 .125rem #fff,0 0 0 .25rem #80acff',
			color: '#272833',
			outline: '0',
		},
	},
}
