export default {
	colors: {
		text: 'inherit',
		background: 'inherit',
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
	},
}
