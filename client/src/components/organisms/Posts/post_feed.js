// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1

const imageDir = 'public/images/posts'

const postFeed = [
	{
		id: 0,
		title: 'Internshipment: A Memoir',
		preview: 'Post by Cassandra Balbas',
		thumbnailUrl: `${imageDir}/post_0.jpg`,
		detailImageUrl: `/${imageDir}/detail/headshot_pj.jpg`,
		link: '',
	},
	{
		id: 1,
		title: 'Design Week 2018',
		preview: 'A recap of our first global retreat!',
		thumbnailUrl: `${imageDir}/post_1.jpg`,
		detailImageUrl: `/${imageDir}/detail/icon_event.png`,
		link: '',
	},
	{
		id: 2,
		title: 'Senior UX Writer',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: `${imageDir}/post_2.jpg`,
		detailImageUrl: `/${imageDir}/detail/headshot_cb.jpg`,
		link: '',
	},
	{
		id: 3,
		title: 'Maximizing the Value of Design',
		preview: 'Published on Liferay.com by Paul Hanaoka',
		thumbnailUrl: `${imageDir}/maximum-value.jpg`,
		detailImageUrl: `/${imageDir}/detail/headshot_ph.jpg`,
		link: 'https://www.liferay.com/blog/en-us/digital-strategy/maximizing-the-value-of-design',
	},
	{
		id: 4,
		title: 'Senior UX Researcher',
		preview: 'Opening in Los Angeles, CA',
		thumbnailUrl: `${imageDir}/post_0.jpg`,
		detailImageUrl: `/${imageDir}/detail/cheng_rachel_h.jpg`,
		link: '',
	},
	{
		id: 5,
		title: 'Los Peligros de la Uniformidad aplicando...',
		preview: 'Published on Linkedin by David Aragones',
		thumbnailUrl: `${imageDir}/los-peligros.jpg`,
		detailImageUrl: `/${imageDir}/detail/headshot_da.jpg`,
		link:
			'https://www.linkedin.com/pulse/los-peligros-de-la-uniformidad-aplicando-sistemas-aragon%C3%A9s-otero/',
	},
	{
		id: 6,
		title: 'Ryan Connolly',
		preview: 'A platform for emotion',
		thumbnailUrl: `${imageDir}/post_0.jpg`,
		detailImageUrl: `/${imageDir}/detail/connolly_ryan_h.jpg`,
		link: '',
	},
]

export default postFeed
