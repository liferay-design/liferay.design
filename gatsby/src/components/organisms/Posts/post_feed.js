// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1

const imageDir = '/images/posts'
const headshotDir = '/images/headshots'

import { withPrefix } from 'gatsby-link'

const postFeed = [
	// {
	// 	id: 0,
	// 	title: 'Internshipment: A Memoir',
	// 	preview: 'Post by Cassandra Balbas',
	// 	thumbnailUrl: withPrefix(`${imageDir}/post_0.jpg`),
	// 	heroUrl: withPrefix(`${imageDir}/post-hero.jpg`),
	// 	detailImageUrl: withPrefix(`${headshotDir}/connolly_ryan.jpg`),
	// 	category: 'Blog Post',
	// 	link: '',
	// },
	{
		id: 1,
		title: 'Liferay Design Week 2018 is Over',
		preview: 'Published on Medium by Juan Hidalgo',
		thumbnailUrl: withPrefix(`${imageDir}/design-week-team.jpeg`),
		heroUrl: withPrefix(`${imageDir}/design-week-team.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/hidalgo_juan.jpg`),
		category: 'Event Recap',
		link: 'https://medium.com/@jhidalgoreina/liferay-design-week-2018-is-over-feb08e290a5f',
	},
	{
		id: 2,
		title: 'Senior UX Writer',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: withPrefix(`${imageDir}/writer.jpg`),
		heroUrl: withPrefix(`${imageDir}/writer.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/_heart_eyes_cat.png`),
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/obY16fw0',
	},
	{
		id: 3,
		title: 'Los Peligros de la Uniformidad aplicando...',
		preview: 'Published on Linkedin by David Aragones',
		thumbnailUrl: withPrefix(`${imageDir}/los-peligros.jpeg`),
		heroUrl: withPrefix(`${imageDir}/los-peligros.jpeg`),
		detailImageUrl: withPrefix(`${headshotDir}/aragones_david.jpg`),
		category: 'Blog Post',
		link:
			'https://www.linkedin.com/pulse/los-peligros-de-la-uniformidad-aplicando-sistemas-aragon%C3%A9s-otero/',
	},
	{
		id: 4,
		title: 'Senior UX Researcher',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: withPrefix(`${imageDir}/design-week-v.jpg`),
		heroUrl: withPrefix(`${imageDir}/design-week-v.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/_thinking_face.png`),
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/okY16fw9',
	},
	{
		id: 5,
		title: 'Maximizing the Value of Design',
		preview: 'Published on Liferay.com by Paul Hanaoka',
		thumbnailUrl: withPrefix(`${imageDir}/maximize-value.jpg`),
		heroUrl: withPrefix(`${imageDir}/maximize-value.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/hanaoka_paul.jpg`),
		category: 'Blog Post',
		link: 'https://www.liferay.com/blog/en-us/digital-strategy/maximizing-the-value-of-design',
	},
	{
		id: 6,
		title: 'Graphic Designer',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: withPrefix(`${imageDir}/graphic-designer.jpg`),
		heroUrl: withPrefix(`${imageDir}/graphic-designer.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/_upside_down_face.png`),
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/o6vq5fwQ',
	},
	{
		id: 7,
		title: 'UX Designer',
		preview: 'Opening in Madrid, ES',
		thumbnailUrl: withPrefix(`${imageDir}/design-week-n.jpg`),
		heroUrl: withPrefix(`${imageDir}/design-week-n.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/_nerd_face.png`),
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/owT16fwg',
	},
	{
		id: 8,
		title: '(81) Days of Liferay',
		preview: 'Published on Medium by Cassandra Balbas',
		thumbnailUrl: withPrefix(`${headshotDir}/balbas_cassandra_h.jpg`),
		heroUrl: withPrefix(`${headshotDir}/balbas_cassandra_h.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/balbas_cassandra.jpg`),
		category: 'Blog Post',
		link: 'https://medium.com/@cmabalbas/81-days-of-liferay-c3df19e361b',
	},
	{
		id: 8,
		title: 'UX Designer',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: withPrefix(`${imageDir}/ux_designer.jpg`),
		heroUrl: withPrefix(`${imageDir}/ux_designer.jpg`),
		detailImageUrl: withPrefix(`${headshotDir}/_sunglasses.png`),
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/obHY4fwE',
	},
]

export default postFeed
