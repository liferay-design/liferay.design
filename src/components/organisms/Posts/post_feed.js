// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1

const imageDir = '/images/posts'
const headshotDir = '/images/headshots'

import { withPrefix } from 'gatsby'

const postFeed = [
	{
		id: 0,
		title: 'Maximizing the Value of Design',
		preview: 'Published on Liferay.com by Paul Hanaoka',
		thumbnailUrl: withPrefix(`${imageDir}/maximize-value.jpg`),
		heroUrl: withPrefix(`${imageDir}/maximize-value.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/hanaoka_paul.jpg`),
		category: 'Blog Post',
		link:
			'https://www.liferay.com/blog/en-us/digital-strategy/maximizing-the-value-of-design',
	},
	{
		id: 1,
		title: 'Liferay Design Week 2018 is Over',
		preview: 'Published on Medium by Juan Hidalgo',
		thumbnailUrl: withPrefix(`${imageDir}/design-week-team.jpeg`),
		heroUrl: withPrefix(`${imageDir}/design-week-team.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/hidalgo_juan.jpg`),
		category: 'Event Recap',
		link:
			'https://medium.com/@jhidalgoreina/liferay-design-week-2018-is-over-feb08e290a5f',
	},
	{
		id: 2,
		title: '(81) Days of Liferay',
		preview: 'Published on Medium by Cassandra Balbas',
		thumbnailUrl: withPrefix(`${headshotDir}/balbas_cassandra_h.jpg`),
		heroUrl: withPrefix(`${headshotDir}/balbas_cassandra_h.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/balbas_cassandra.jpg`),
		category: 'Blog Post',
		link: 'https://medium.com/@cmabalbas/81-days-of-liferay-c3df19e361b',
	},
	{
		id: 3,
		title: 'Dangers and Pitfalls of Uniformity in Design Systems',
		preview: 'Published on Medium by David Aragones',
		thumbnailUrl: withPrefix(`${imageDir}/los-peligros.jpeg`),
		heroUrl: withPrefix(`${imageDir}/los-peligros.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/aragones_david.jpg`),
		category: 'Blog Post',
		link:
			'https://medium.com/@77896317/the-danger-and-pitfalls-of-uniformity-in-design-systems-68fb31aa28e5',
	},
	{
		id: 4,
		title: 'UX Designer',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: withPrefix(`${imageDir}/ux_designer.jpg`),
		heroUrl: withPrefix(`${imageDir}/ux_designer.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/_sunglasses.png`),
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/oy3O7fwg',
	},
	{
		id: 5,
		title: 'Designing Animations for a Multicultural Product',
		preview: 'Published on Medium by Susana Vázquez',
		thumbnailUrl: withPrefix(`${imageDir}/multicultural-animations.jpeg`),
		heroUrl: withPrefix(`${imageDir}/multicultural-animations.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/vazquez_susana.jpg`),
		category: 'Blog Post',
		link:
			'https://medium.com/liferaydesign/designing-for-a-multicultural-product-9564bc657cb5',
	},
]

export default postFeed
