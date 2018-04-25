// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1

const imageDir = 'public/images/posts'
const headshotDir = 'public/images/headshots'

const postFeed = [
	// {
	// 	id: 0,
	// 	title: 'Internshipment: A Memoir',
	// 	preview: 'Post by Cassandra Balbas',
	// 	thumbnailUrl: `${imageDir}/post_0.jpg`,
	// 	heroUrl: `${imageDir}/hero/post-hero.jpg`,
	// 	detailImageUrl: `/${headshotDir}/connolly_ryan.jpg`,
	// 	category: 'Blog Post',
	// 	link: '',
	// },
	// {
	// 	id: 1,
	// 	title: 'Design Week 2018',
	// 	preview: 'A recap of our first global retreat!',
	// 	thumbnailUrl: `${imageDir}/post_1.jpg`,
	// 	heroUrl: `${imageDir}/hero/post-hero.jpg`,
	// 	detailImageUrl: `/${headshotDir}/connolly_ryan.png`,
	// 	category: 'Event Recap',
	// 	link: '',
	// },
	{
		id: 2,
		title: 'Senior UX Writer',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: `${imageDir}/writer.jpg`,
		heroUrl: `${imageDir}/hero/writer.jpg`,
		detailImageUrl: `/${headshotDir}/_heart_eyes_cat.png`,
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/obY16fw0',
	},
	{
		id: 3,
		title: 'Los Peligros de la Uniformidad aplicando...',
		preview: 'Published on Linkedin by David Aragones',
		thumbnailUrl: `${imageDir}/los-peligros.jpeg`,
		heroUrl: `${imageDir}/hero/los-peligros.jpeg`,
		detailImageUrl: `/${headshotDir}/aragones_david.jpg`,
		category: 'Blog Post',
		link:
			'https://www.linkedin.com/pulse/los-peligros-de-la-uniformidad-aplicando-sistemas-aragon%C3%A9s-otero/',
	},
	{
		id: 4,
		title: 'Senior UX Researcher',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: `${imageDir}/design-week-v.jpg`,
		heroUrl: `${imageDir}/hero/design-week-v.jpg`,
		detailImageUrl: `/${headshotDir}/_thinking_face.png`,
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/okY16fw9',
	},
	{
		id: 5,
		title: 'Maximizing the Value of Design',
		preview: 'Published on Liferay.com by Paul Hanaoka',
		thumbnailUrl: `${imageDir}/maximize-value.jpg`,
		heroUrl: `${imageDir}/hero/maximize-value.jpg`,
		detailImageUrl: `/${headshotDir}/hanaoka_paul.jpg`,
		category: 'Blog Post',
		link: 'https://www.liferay.com/blog/en-us/digital-strategy/maximizing-the-value-of-design',
	},
	{
		id: 6,
		title: 'Graphic Designer',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: `${imageDir}/graphic-designer.jpg`,
		heroUrl: `${imageDir}/hero/graphic-designer.jpg`,
		detailImageUrl: `/${headshotDir}/_upside_down_face.png`,
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/o6vq5fwQ',
	},
	{
		id: 7,
		title: 'UX Designer',
		preview: 'Opening in Madrid, ES',
		thumbnailUrl: `${imageDir}/design-week-n.jpg`,
		heroUrl: `${imageDir}/hero/design-week-n.jpg`,
		detailImageUrl: `/${headshotDir}/_nerd_face.png`,
		category: 'Join Us!',
		link: 'https://jobs.jobvite.com/liferay/job/owT16fwg',
	},
]

export default postFeed
