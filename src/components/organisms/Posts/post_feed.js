// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1

const imageDir = '/images/posts'
const headshotDir = '/images/headshots'

import { withPrefix } from 'gatsby'

const postFeed = [
	// {
	// 	id: 0,
	// 	title: 'Maximizing the Value of\xa0Design',
	// 	preview: 'Published on Liferay.com by Paul\xa0Hanaoka',
	// 	thumbnailUrl: withPrefix(`${imageDir}/maximize-value.jpg`),
	// 	heroUrl: withPrefix(`${imageDir}/maximize-value.jpg`),
	// 	detailImageUrl: withPrefix(`${headshotDir}/hanaoka-paul.jpg`),
	// 	category: 'Blog Post',
	// 	link:
	// 		'https://www.liferay.com/blog/en-us/digital-strategy/maximizing-the-value-of-design',
	// },
	{
		id: 1,
		title: 'Liferay Design Week 2018 is Over',
		preview: 'Published on Medium by Juan\xa0Hidalgo',
		thumbnailUrl: withPrefix(`${imageDir}/design-week-team.jpeg`),
		heroUrl: withPrefix(`${imageDir}/design-week-team.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/hidalgo-juan.jpg`),
		category: 'Event Recap',
		link:
			'https://medium.com/@jhidalgoreina/liferay-design-week-2018-is-over-feb08e290a5f',
	},
	{
		id: 2,
		title: '(81) Days of Liferay',
		preview: 'Published on Medium by Cassandra\xa0Balbas',
		thumbnailUrl: withPrefix(`${headshotDir}/balbas-cassandra-h.jpg`),
		heroUrl: withPrefix(`${headshotDir}/balbas-cassandra-h.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/balbas-cassandra.jpg`),
		category: 'Blog Post',
		link: 'https://medium.com/@cmabalbas/81-days-of-liferay-c3df19e361b',
	},
	{
		id: 3,
		title: 'Dangers and Pitfalls of Uniformity in Design\xa0Systems',
		preview: 'Published on Medium by David\xa0Aragones',
		thumbnailUrl: withPrefix(`${imageDir}/los-peligros.jpeg`),
		heroUrl: withPrefix(`${imageDir}/los-peligros.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/aragones-david.jpg`),
		category: 'Blog Post',
		link:
			'https://medium.com/@77896317/the-danger-and-pitfalls-of-uniformity-in-design-systems-68fb31aa28e5',
	},
	// {
	// 	id: 4,
	// 	title: 'UX Designer',
	// 	preview: 'Opening in Los Angeles, CA',
	// 	thumbnailUrl: withPrefix(`${imageDir}/ux-designer.jpg`),
	// 	heroUrl: withPrefix(`${imageDir}/ux-designer.jpg`),
	// 	detailImageUrl: withPrefix(`${headshotDir}/-sunglasses.png`),
	// 	category: 'Join Us!',
	// 	link: 'https://jobs.jobvite.com/liferay/job/oy3O7fwg',
	// },
	{
		id: 5,
		title: 'Designing Animations for a Multicultural\xa0Product',
		preview: 'Published on Medium by Susana\xa0Vázquez',
		thumbnailUrl: withPrefix(`${imageDir}/multicultural-animations.jpeg`),
		heroUrl: withPrefix(`${imageDir}/multicultural-animations.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/vazquez-susana.jpg`),
		category: 'Blog Post',
		link:
			'https://medium.com/liferaydesign/designing-for-a-multicultural-product-9564bc657cb5',
	},
	{
		id: 6,
		title: 'About Bridges, Software, and Failures',
		preview: 'Published on Medium by Juan\xa0Hidalgo',
		thumbnailUrl: withPrefix(`${imageDir}/about-bridges.jpeg`),
		heroUrl: withPrefix(`${imageDir}/about-bridges.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/hidalgo-juan.jpg`),
		category: 'Blog Post',
		link:
			'https://medium.com/liferaydesign/about-bridges-software-and-failures-f4075f774fe4',
	},
	{
		id: 7,
		title: 'Building charts for multiple products',
		preview: 'Published on Medium by Emiliano\xa0Cicero',
		thumbnailUrl: withPrefix(`${imageDir}/building-charts.jpeg`),
		heroUrl: withPrefix(`${imageDir}/building-charts.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/cicero-emiliano.jpg`),
		category: 'Blog Post',
		link:
			'https://medium.com/liferaydesign/building-charts-for-multiple-products-bb399ef1a71e',
	},
]

export default postFeed
