export default {
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
	cards: {
		'4:3': {
			'&:after': { pb: '75%', display: 'block', content: '""' },
		},
		'16:9': {
			'&:after': { pb: '56.25%', display: 'block', content: '""' },
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
		backgroundColor: 'white',
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
	quotes: {
		blockQuote: {
			color: 'mainL5',
			fontSize: [5, null, 7],
			fontWeight: 'body',
			lineHeight: '.9',
			my: 4,
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
