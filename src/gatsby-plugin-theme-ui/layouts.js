export default {
	boxes: {
		fullScreen: {
			position: 'fixed',
			height: '100vh',
			width: '100vw',
			pointerEvents: 'none',
			top: 0,
			left: 0,
		},
	},
	grids: {
		lexiconExamples: {
			gridTemplateColumns: '48px 1fr',
			gap: 2,
			alignItems: 'center',
			color: 'info',
			fontSize: 1,
			fontStyle: 'italic',
			mb: 3,
		},
		twoCards: {
			gridTemplateColumns: [
				'repeat(auto-fill, minmax(18rem, 1fr))',
				'repeat(auto-fill, minmax(24rem, 1fr))',
				null,
			],
			gap: '5rem 4rem',
		},
		twoCol: {
			gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
			gap: '2rem',
		},
		threeCards: {
			gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
			gap: ['5rem 4rem'],
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
			gridTemplate: [' auto / 1fr', null, 'auto / 1fr 1fr'],
			gap: '2rem',
			padding: '0 3rem',
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
	wrapper: {
		markdown: {
			px: [3, 3, null],
			py: [2, 3, null],
			bg: 'white',
			fontFamily: 'modes.brand.body',
			width: '100%',
			'> div': {
				margin: '0 auto',
				maxWidth: '68ch',
				p: {
					color: 'mainL2',
					fontSize: 3,
					'-webkit-font-smoothing': 'antialiased !important;',
					'-mozOsx-font-smoothing': 'grayscale !important;',
					mb: 4,
				},
				'h2, h3': {
					mt: 4,
					'&:first-child': {
						mt: 2,
					},
				},
			},
		},
	},
}
