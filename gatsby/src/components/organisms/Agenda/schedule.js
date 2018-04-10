// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1 for each day
// Dates should be in this format ('month/day/year')

const scheduleArray = [
	{
		id: 0,
		day: '1/22/18',
		talks: [
			{
				time: '09:30',
				title: 'Welcome!',
				subtitle: '30 min | Training Room 120',
				speaker: [
					{
						photo: 'hidalgo_juan',
						name: 'Juan Hidalgo',
						title: 'UX Design Director',
					},
				],
			},
			{
				time: '10:00',
				title: 'Design 2018',
				subtitle: '1 hr | Training Room 120',
				speaker: [
					{
						photo: 'liferay_icon',
						name: 'Regional Teams',
						title: 'Show projects and progress of each team.',
					},
				],
			},
			{
				time: '11:00',
				title: 'Breaktivity',
				subtitle: '30 min | Lets get creative together!',
			},
			{
				time: '11:30',
				title: 'liferay.design',
				subtitle: '55 min talk, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'connolly_ryan',
						name: 'Ryan Connolly',
						title: 'UX Designer',
					},
					{
						photo: 'hanaoka_paul',
						name: 'Paul Hanaoka',
						title: 'UX Design Manager',
					},
				],
			},
			{
				time: '12:30',
				title: 'Lunch!',
				subtitle: '1.5 hr | Meet downstairs in cafeteria 🌮',
			},
			{
				time: '14:00',
				title: 'Workshop: Using Lexicon to craft your interfaces',
				subtitle: '1.25 hr, 15 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'anton_juan',
						name: 'Juan Anton',
						title: 'UX Designer',
					},
					{
						photo: 'valle_victor',
						name: 'Victor Valle',
						title: 'UX Design Manager',
					},
				],
			},
		],
	},
	{
		id: 1,
		day: '1/23/18',
		talks: [
			{
				time: '08:45',
				title: 'File & Folder Conventions',
				subtitle: '1 hr, 15 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'fernandes_vitor',
						name: 'Vitor Fernandes',
						title: 'Design Coordinator',
					},
				],
			},
			{
				time: '10:00',
				title: 'Customer Experience',
				subtitle: '55 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'nakamura_henry',
						name: 'Henry Nakamura',
						title: 'Senior Customer Experience Manager',
					},
				],
			},
			{
				time: '11:00',
				title: 'Breaktivity',
				subtitle: 'Lets get creative together',
			},
			{
				time: '11:30',
				title: 'Brand Continuity',
				subtitle: '55 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'chang_jason',
						name: 'Jason Chang',
						title: 'Marketing Operations Director',
					},
					{
						photo: 'young_emily',
						name: 'Emily Young',
						title: 'Design Manager',
					},
				],
			},
			{
				time: '12:30',
				title: 'Lunch!',
				subtitle: '1.5 hr | Meet downstairs in cafeteria 🍱',
			},
			{
				time: '14:00',
				title: 'Group Activity: Design Principles',
				subtitle: '1.5 hrs | Training Room 120',
			},
		],
	},
	{
		id: 2,
		day: '1/24/18',
		talks: [
			{
				time: '08:45',
				title: 'Liferay 7.1: How to Achieve Our Goals',
				subtitle: '40 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'valle_victor',
						name: 'Victor Valle',
						title: 'UX Design Manager',
					},
				],
			},
			{
				time: '09:30',
				title: 'Experience Cloud: How to Achieve Our Goals',
				subtitle: '25 min, 5 min Q&A | Traning Room 120',
				speaker: [
					{
						photo: 'hanaoka_paul',
						name: 'Paul Hanaoka',
						title: 'UX Design Manager',
					},
				],
			},
			{
				time: '10:00',
				title: 'Our Vocabulary: Best Practices',
				subtitle: '25 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'martin_beatriz',
						name: 'Beatriz Martin',
						title: 'UX Designer',
					},
				],
			},
			{
				time: '10:30',
				title: 'Breaktivity',
				subtitle: '30 min | Lets get creative together!',
			},
			{
				time: '11:00',
				title: 'Market Research for Commerce',
				subtitle: '55 min talk, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'murakami_corbin',
						name: 'Corbin Murakami',
						title: 'Product Manager',
					},
				],
			},
			{
				time: '12:00',
				title: 'Lunch!',
				subtitle: '1.5 hr | Meet downstairs in cafeteria 🍔',
			},
			{
				time: '13:30',
				title: 'Brand Process: Vision, Marketing, & Communication',
				subtitle: '55 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'ho_bryan',
						name: 'Bryan Ho',
						title: 'Associate Design Manager',
					},
					{
						photo: 'young_emily',
						name: 'Emily Young',
						title: 'Design Manager',
					},
				],
			},
			{
				time: '14:30',
				title: 'Workshop: Visual Storytelling',
				subtitle: '55 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'connolly_ryan',
						name: 'Ryan Connolly',
						title: 'UX Designer',
					},
				],
			},
		],
	},
	{
		id: 3,
		day: '1/25/18',
		talks: [
			{
				time: '08:45',
				title: 'Legally Designed',
				subtitle: '55 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						name: 'Corporate Counsel',
						title: 'Streaming Live from Eschborn',
					},
				],
			},
			{
				time: '9:45',
				title: 'Lightroom',
				subtitle: '45 min | Training Room 120',
				speaker: [
					{
						photo: 'chan_julia',
						name: 'Julia Chan',
						title: 'Graphic Designer',
					},
				],
			},
			{
				time: '10:30',
				title: 'Coffee Break ☕️',
				subtitle: "Let's Cook",
			},
			{
				time: '11:00',
				title: 'Accessibility for Designers',
				subtitle: '25 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'jeong_chris',
						name: 'Christopher Jeong',
						title: 'UX Designer',
					},
				],
			},
			{
				time: '11:30',
				title: 'Building the Mobile Strategies',
				subtitle: '25 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'pires_felipe',
						name: 'Felipe Pires',
						title: 'UX Designer',
					},
				],
			},
			{
				time: '12:00',
				title: 'Lunch!',
				subtitle: '1.5 hr | Meet downstairs in cafeteria 🍜',
			},
			{
				time: '13:30',
				title: 'Design Review',
				subtitle: '25 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'fernandes_vitor',
						name: 'Vitor Fernandes',
						title: 'Design Coordinator',
					},
					{
						photo: 'pires_felipe',
						name: 'Felipe Pires',
						title: 'UX Designer',
					},
				],
			},
			{
				time: '14:00',
				title: 'Discovering Information Architecture',
				subtitle: '55 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'aragones_david',
						name: 'David Aragones',
						title: 'UX Designer',
					},
				],
			},
			{
				time: '15:00',
				title: 'Designing Cross-platform Applications: Liferay Events App',
				subtitle: '25 min, 5 min Q&A | Training Room 120',
				speaker: [
					{
						photo: 'oliveira_cassia',
						name: 'Cássia Oliveira',
						title: 'Product Designer',
					},
				],
			},
		],
	},
	{
		id: 4,
		day: '1/26/18',
		talks: [
			{
				time: '08:45',
				title: 'Workshop: User Journeys & Personas',
				subtitle: '1.75 hr | Training Room 120',
				speaker: [
					{
						photo: 'moura_nathalia',
						name: 'Nathália Moura',
						title: 'UX Designer',
					},
				],
			},
			{
				time: '10:30',
				title: 'Tea Time 🍵',
			},
			{
				time: '11:30',
				title: 'Creative Activity',
				subtitle: '1 hr | Training Room 120',
			},
			{
				time: '12:00',
				title: 'Lunch!',
				subtitle: '1.5 hr | Meet downstairs in cafeteria 🍣',
			},
			{
				time: '13:30',
				title: 'Closing',
				subtitle: '30 min | Training Room 120',
			},
		],
	},
]

export default scheduleArray
