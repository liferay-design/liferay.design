import { Flex, Image, Heading, Text, Icon } from 'components/atoms'
import { Footer } from 'components/organisms'
import { Designer, SimpleCard, ProjectsCarousel, Nav } from 'pages/2019/components/_index'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Helmet } from 'react-helmet'
import Plx from 'react-plx'
import styles from './styles.module.scss'
import { SEO } from 'components/molecules'

//   constant plx data
// const InView = [
// 	{
// 		start: 'self',
// 		duration: 1,
// 		properties: [],
// 	},
// ]
// const InView10 = [
// 	{
// 		start: 'self',
// 		duration: 1,
// 		startOffset: '10vh',
// 		properties: [],
// 	},
// ]
const PlxUp1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 50,
				endValue: -50,
				property: 'translateY',
			},
		],
	},
]
const PlxUp2 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 100,
				endValue: -100,
				property: 'translateY',
			},
		],
	},
]
const PlxUp3 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 150,
				endValue: -150,
				property: 'translateY',
			},
		],
	},
]
// const PlxDown1 = [
// 	{
// 		start: 'self',
// 		duration: '200vh',
// 		properties: [
// 			{
// 				startValue: -50,
// 				endValue: 50,
// 				property: 'translateY',
// 			},
// 		],
// 	},
// ]
// const PlxDown2 = [
// 	{
// 		start: 'self',
// 		duration: '200vh',
// 		properties: [
// 			{
// 				startValue: -100,
// 				endValue: 100,
// 				property: 'translateY',
// 			},
// 		],
// 	},
// ]
// const PlxDown3 = [
// 	{
// 		start: 'self',
// 		duration: '200vh',
// 		properties: [
// 			{
// 				startValue: -150,
// 				endValue: 150,
// 				property: 'translateY',
// 			},
// 		],
// 	},
// ]


const TwentyNineteen = () => {
	return (
		<div className={styles.pagestyles}>
			<SEO
				pageTitle="Liferay.Design 2019 Annual Report | Stories, achievements, and more"
				description="TODO:Description"
				previewImage="/images/2019/2019-open-graph.png"
				twitterHandle="@liferaydesign"
			/>
			<Helmet>
				<link
					rel="preload"
					href="./fonts/SourceSansVariable-Roman.ttf.woff2"
					as="font"
					type="font/woff2"
					crossorigin=""
				/>
				<title>Liferay Design | 2019 Annual Report</title>
			</Helmet>
			
			{/* ----------- ANCHOR LINKS ---------- */}
			<Nav />

			{/* --------- HERO ---------- */}
			<section id="top" className={styles.hero}>
				<img src="/images/2019/hero-image.png" />
				<Heading level="1" className={styles.f2}>
					Design <span>Report</span>
				</Heading>
				<p className={styles.p}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum mi in tempus facilisi. Placerat gravida porttitor urna ut. Sed ullamcorper eget maecenas elit erat vestibulum in tellus. Amet nibh amet, nibh in feugiat nunc aenean mi. Quis commodo nunc lobortis.
				</p>
			</section>

			{/* ---------- TEAM ----------- */}
			{/* HEADER - TEAM */}
			<Plx className={styles.sectionHeader} id="team" parallaxData={PlxUp1}>
				<Image src="/images/2019/header-team.png" />
				<svg width="30" height="2" viewBox="0 0 30 2" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="1" cy="1" r="1" fill="white"/>
					<circle cx="15" cy="1" r="1" fill="white"/>
					<circle cx="29" cy="1" r="1" fill="white"/>
				</svg>
			</Plx>

			{/* DEPARTMENT */}
			<section id="department">
				<Flex direction="column" align="center" justify="center" className={styles.department}>
					<div className={styles.preHeader}>Department</div>
					<Heading level="2" className={styles.f2}>Organization</Heading>
					<div className={styles.organizationContent}>
						<Icon name="liferayDesicon" fill="white" height="7.25vw" width="7.25vw" />
						<p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum mi in tempus facilisi. Placerat gravida porttitor urna ut. Sed ullamcorper eget maecenas elit erat vestibulum in tellus. Amet nibh amet, nibh in feugiat nunc aenean mi. Quis commodo nunc lobortis aliquam pretium sed tellus. Laoreet ut viverra sit cras viverra. Faucibus pretium egestas ac vel sed. </p>
					</div>
					<div className={styles.departmentNames}>
						<Flex direction="column" align="center" justify="center">
							<Heading level="3" className={styles.f4}>Product <span>Design</span></Heading>
							<span className={styles.pSmall}>Interaction Design</span>
						</Flex>
						<Flex direction="column" align="center" justify="center">
							<Heading level="3" className={styles.f4}>Communication <span>Design</span></Heading>
							<span className={styles.pSmall}>Brand Consistency</span>
						</Flex>
						<Flex direction="column" align="center" justify="center">
							<Heading level="3" className={styles.f4}>Research <span>Design</span></Heading>
							<span className={styles.pSmall}>User Testing</span>
						</Flex>
					</div>
				</Flex>
				{/* <img src="/images/2019/dots-large.svg"/> */}
			</section>
			
			{/* CHARITY DESIGN */}
			<section id="charityDesign" className={styles.charityDesign}>
				<div className={styles.fiftyFifty}>
					<div className={styles.left}>
						<div className={styles.preHeader}>Charity Design</div>
						<Heading level="2" className={styles.f2}>Underground Writing</Heading>
						<p className={styles.p}>
						We are a literature-based creative writing program serving migrant, incarcerated, recovery, and other at-risk communities in northern Washington through literacy and personal transformation.
						<br /> <br />
						We facilitate generative readings of literature spanning the tradition—from ancient texts to those written in our workshops. Honoring the transforming power of the word, we believe that attentive reading leads to attentive writing, and that attentive writing has the power to assist in the restoration of communities, the imagination, and individual lives.
						</p>
					</div>
					<img src="/images/2019/underground-writing.png" />
				</div>
				<div className={styles.services}>
					<Flex flexWrap="wrap" className={styles.p}>
						<span>Services Provided:</span>
						<ul>
							<li>Web Design</li>
							<li>Branding</li>
							<li>Service Design</li>
							<li>Development</li>
							<li>Other</li>
						</ul>
					</Flex>
				</div>
				<a href="#" className={styles.link}>View Full Case Study</a>
			</section>

			{/* THOUGHT LEADERSHIP */}
			<section id="thoughtLeadership">
				<div className={styles.dbp}>
					<div>
						<div className={styles.preHeader}>Thought Leadership</div>
						<Heading level="2" className={styles.f2}>Design Best Practices</Heading>
						<p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum mi in tempus facilisi. Placerat gravida porttitor urna ut. Sed ullamcorper eget maecenas elit erat vestibulum in tellus. Amet nibh amet, nibh in feugiat nunc aenean mi. Quis commodo nunc lobortis aliquam pretium sed tellus. Laoreet ut viverra sit cras viverra. Faucibus pretium egestas ac vel sed.</p>
						<a href="/tags/best-practices" className={styles.link}>Browse Best Practices Articles</a>
					</div>
					<div className={styles.dbpGrid}>
						<img src="/images/2019/dbp/law-of-common-region.png" />
						<img src="/images/2019/dbp/the-design-process.png" />
						<img src="/images/2019/dbp/pareto-principle.png" />
						<img src="/images/2019/dbp/zero-users-give-zero-insights.png" />
						<img src="/images/2019/dbp/Service-Design.png" />
						<img src="/images/2019/dbp/aesthetic-usability.png" />
						<img src="/images/2019/dbp/customization-vs-personalization.png" />
						<img src="/images/2019/dbp/value-driven-kpis.png" />
						<img src="/images/2019/dbp/what-is-accessibility-in-design.png" />
						<img src="/images/2019/dbp/ethics-in-design.png" />
						<img src="/images/2019/dbp/data-driven-vs-data-infomred.png" />
						<img src="/images/2019/dbp/giving-feedback.png" />
						<img src="/images/2019/dbp/affordances.png" />
						<img src="/images/2019/dbp/design-for-recognition-not-recall.png" />
						<img src="/images/2019/dbp/banner-blindness.png" />
						<img src="/images/2019/dbp/what-is-a-mental-model.png" />
					</div>
				</div>
			</section>
			
			{/* COMMUNITY */}
			<section id="community" className={styles.ourEvents}>
				<div className={styles.preHeader}>Community</div>
				<Heading level="2" className={styles.f2}>Our Events</Heading>
				<p className={styles.p}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan, ultrices aliquam amet. Vitae commodo rhoncus lectus morbi non. Netus aliquet.
				</p>
				<div className={styles.cardGrid}>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2-4.png"
						title="Digital thinkers Conference"
						subtitle="San Francisco"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
						/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="The Creativity Conference"
						subtitle="Los Angeles"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
						/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="UX Training Conferences"
						subtitle="Madrid"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
						/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="EuroIA 2019 Impact"
						subtitle="Berlin"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
						/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="Figma Meetup Los Angeles"
						subtitle="Diamond Bar"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
						/>
					<Flex justify="center" align="center" className={styles.seeMoreCard}>
						<a href="/events" className={styles.link}>See More Events</a>
					</Flex>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default TwentyNineteen
