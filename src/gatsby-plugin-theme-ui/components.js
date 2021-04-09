import Prism from '@theme-ui/prism'

export default {
	buttons: {
		primary: {
			color: 'white',
			bg: 'primary',
			cursor: 'pointer',
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
	labels: {
		fill: {
			py: 1,
			px: 2,
			borderRadius: '.2rem',
		},
		outline: {
			flexGrow: 0,
			py: 1,
			px: 2,
			position: 'relative',
			'&:before': {
				content: '""',
				borderRadius: '.2rem',
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				border: '1px solid',
				opacity: 0.64,
			},
			'&:after': {
				content: '""',
				borderRadius: '.2rem',
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: 'currentColor',
				opacity: 0.16,
			},
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
	pre: props => props.children,
	code: Prism,
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
		backgroundColor: 'white',
		border: '.0625rem solid #e7e7ed',
		borderRadius: '.25rem',
		boxShadow: '0 0 transparent',
		color: 'main',
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
			backgroundColor: 'primaryl3',
			borderColor: 'primaryl1',
			boxShadow: '0 0 transparent,0 0 0 .125rem #fff,0 0 0 .25rem #80acff',
			color: 'main',
			outline: '0',
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
		interviewee: {
			position: 'absolute',
			ml: '-4rem',
			mt: 0,
			height: '3rem',
			width: '3rem !important',
			borderRadius: '50%',
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
	links: {
		nav: {
			cursor: 'pointer',
			minWidth: 'max-content',
			color: 'mainL4',
			fontWeight: 'body',
			fontSize: 2,
			margin: 0,
			padding: [2, 1, 2],
			transition: 'color 0.2s ease-out',
			position: 'relative',
			'&::after': {
				background: 'white',
				bottom: 0,
				content: '""',
				right: [2, 1, 2],
				position: 'absolute',
				height: '3px',
				transition: 'transform 0.4s ease',
				transformOrigin: 'right',
				transform: 'scaleX(0)',
				width: 4,
			},
			'&:hover': {
				color: 'white',
				transition: 'color 0.4s ease-out',
				'&::after': {
					transition: 'transform 0.2s ease',
					transform: 'scaleX(1)',
				},
			},
		},
		nice: {
			color: 'mainL4',
			position: 'fixed',
			padding: '2em',
			left: '2em',
			bottom: '0',
		},
		tag: {
			bg: 'main',
			borderRadius: '0.4rem',
			px: 2,
			py: 1,
			variant: 'text.caps',
			color: 'mainL6',
			fontWeight: 'heading',
			fontSize: 1,
			'&:hover': {
				bg: 'primary',
				color: 'white',
			},
		},
		light: {
			color: 'primaryl2',
			textDecoration: 'underline',
		},
		arrow: {
			color: `primary`,
			fontWeight: `heavy`,
			svg: {
				ml: '2',
				transform: 'translateX(0)',
				transition:
					'transition: transform 0.4s cubic-bezier(0.075, 1.2, 0.165, 1);',
				height: '1.4rem',
				stroke: 'primary',
			},
			'&:hover': {
				svg: {
					transition: 'transform 0.2s cubic-bezier(0.075, 1.2, 0.165, 1)',
					transform: 'translateX(1rem)',
				},
			},
		}
	},
	quotes: {
		blockQuote: {
			color: 'mainL5',
			fontSize: [5, null, 7],
			fontWeight: 'body',
			lineHeight: 1,
			my: theme => theme.space[5] + ' !important',
			width: ['100%', null, '130%'],
		},
		pullQuote1: {
			variant: 'quotes.blockQuote',
			'&:before': {
				content: '"“"',
				color: 'primary',
				display: 'block',
				fontWeight: 'heading',
			},
		},
		pullQuote2: {
			variant: 'quotes.pullQuote1',
			fontFamily: 'monospace',
			fontWeight: 'heading',
			lineHeight: 'heading',
		},
		pullQuote3: {
			variant: 'quotes.blockQuote',
			fontFamily: 'monospace',
			fontWeight: 'body',
			lineHeight: 'heading',
		},
	},
}
