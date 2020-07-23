export default {
	colors: {
		text: 'inherit',
		background: 'inherit',
		primary: '#0B5FFF',
	},
	buttons: {
		primary: {
			color: 'white',
			bg: 'primary',
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
				'"tlg tlc trc rg" auto "lg m m rg" auto "lg blc brc brg" auto / 1rem 5fr 5fr 1rem'
			],
			gap: '2rem',
		},
	},
}
