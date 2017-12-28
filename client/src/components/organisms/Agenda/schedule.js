// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1 for each day
// Dates should be in this format ('month/day/year')

const scheduleArray = [
	{
		id: 0,
		day: '1/22/17',
		talks: [
			{
				time: '08:45 am',
				title: 'Brand Continuity',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'marco',
						name: 'Marco Leo',
						title: 'Software Architect',
					},
					{
						photo: 'christina',
						name: 'Christina Gonzales',
						title: 'Software Engineer',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Customer Experience',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'javier',
						name: 'Javier Gamarra',
						title: 'Senior Consultant',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Breaktivity',
				subtitle: 'Lets get creative together',
			},
		],
	},
	{
		id: 1,
		day: '1/23/17',
		talks: [
			{
				time: '08:45 am',
				title: '7.1 How to Achieve Our Goals',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'victor',
						name: 'Victor Valle',
						title: 'UX Design Manager',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Customer Experience',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'zeno',
						name: 'Zeno Rocha',
						title: 'Dev Advocate',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Breaktivity',
				subtitle: 'Lets get creative together',
			},
		],
	},
	{
		id: 2,
		day: '1/24/17',
		talks: [
			{
				time: '08:45 am',
				title: 'Brand Continuity',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'zeno',
						name: 'Zeno Rocha',
						title: 'Developer Advocate',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Customer Experience',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'chema',
						name: 'Chema Balsas',
						title: 'Software Engineer Liferay',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Breaktivity',
				subtitle: 'Lets get creative together',
			},
		],
	},
	{
		id: 3,
		day: '1/25/17',
		talks: [
			{
				time: '08:45 am',
				title: 'Brand Continuity',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'zeno',
						name: 'Zeno Rocha',
						title: 'Developer Advocate',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Customer Experience',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'chema',
						name: 'Chema Balsas',
						title: 'Software Engineer Liferay',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Breaktivity',
				subtitle: 'Lets get creative together',
			},
		],
	},
	{
		id: 4,
		day: '1/26/17',
		talks: [
			{
				time: '08:45 am',
				title: 'Brand Continuity',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'zeno',
						name: 'Zeno Rocha',
						title: 'Developer Advocate',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Customer Experience',
				subtitle: '1 hr Training Room 120',
				speaker: [
					{
						photo: 'chema',
						name: 'Chema Balsas',
						title: 'Software Engineer Liferay',
					},
				],
			},
			{
				time: '10:00 am',
				title: 'Breaktivity',
				subtitle: 'Lets get creative together',
			},
		],
	},
]

export default scheduleArray
