import { Flex, Image, Heading, Text, Icon, ScrollProgress } from 'components/atoms'
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

			{/* ----------- SCROLL PROGRESS BAR ---------- */}
			<ScrollProgress />
			
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
			<Plx tagName="h2" className={styles.sectionHeader} id="team" parallaxData={PlxUp1}>
				Team
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
			
			{/* FRESH FISH */}
			<section id="new-faces">
				<div className={styles.newFaces}>
				<div className={styles.preHeader}>New Faces</div>
				<Heading level="2" className={styles.f2}>Designer Timeline</Heading>
				<p className={styles.p}>
				The team gets stronger each year as we embrace new additions, hit milestones, and gain more experience. We’ve hired 3 new designers and had 11 birthRays.
				</p>
				<Flex
					direction="column"
					justify="space-between"
					className={styles.timeline}
				>
					<div className={styles.line}>
						<svg
							width="100%"
							height="calc(100% + 5vw)"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="0.5"
								y1="0"
								x2="0.5"
								y2="100%"
								stroke="#006DE7"
								stroke-linejoin="round"
								stroke-dasharray="1 10"
							/>
						</svg>
					</div>
					<Designer
						profileUrl="/team/wood-jon"
						month="April"
						day="15"
						headshot="/images/headshots/wood-jon.jpg"
						name="Jon"
						detail="firstDay"
						country="California"
					/>
					<Designer
						profileUrl="/team/censi-andrea"
						month="May"
						day="14"
						headshot="/images/headshots/censi-andrea.jpg"
						name="Andrea"
						detail="birthRay"
						birthRay
					/>
					<Designer
						profileUrl="/team/francisco-marleny"
						month="Aug"
						day="12"
						headshot="/images/headshots/francisco-marleny.jpg"
						name="Marleny"
						detail="firstDay"
						country="Spain"
					/>
					<Designer
						profileUrl="/team/lyons-james"
						month="Sep"
						day="10"
						headshot="/images/headshots/lyons-james.jpg"
						name="James"
						detail="birthRay"
						birthRay
					/>
					<Designer
						profileUrl="/team/kim-david"
						month="Sep"
						day="17"
						headshot="/images/headshots/kim-david.jpg"
						name="David"
						detail="birthRay"
						birthRay
					/>
					<Designer
						profileUrl="/team/garcia-laura"
						month="Oct"
						day="14"
						headshot="/images/headshots/garcia-laura.jpg"
						name="Laura"
						detail="firstDay"
						country="Spain"
					/>
					<Designer
						profileUrl="/team/manso-miriam"
						month="Oct"
						day="15"
						headshot="/images/headshots/manso-miriam.jpg"
						name="Miriam"
						detail="birthRay"
						birthRay
					/>
				</Flex>
				</div>
			</section>

			{/* GROW */}
			<section id="growth" className={styles.growth}>
				<div className={styles.preHeader}>Growth</div>
				<Heading level="2" className={styles.f2}>Design Paths</Heading>
				<p className={styles.p}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan, ultrices aliquam amet. Vitae commodo rhoncus lectus morbi non. Netus aliquet.
				</p>
				<Flex
					direction="column"
					align="center"
					className={styles.recentPromotions}>
					<img className={styles.growTool} src="/images/2019/path-tool.png" />
					<Heading level="2" className={styles.f3}>
						Recent Promotions
					</Heading>
					<div>
						<div className={styles.promotionCard}>
							<img src="/images/headshots/connolly-ryan.jpg"/>
							<div>
								<Heading level="3" className={styles.f3Large}>
									Ryan <span>Connolly</span>
								</Heading>
								<span>3 years with Liferay</span>
							</div>
							<div>
								<Heading level="4" className={styles.f4}>Warrior Princess</Heading>
								<span>Previous: Product Design Manager</span>
							</div>
						</div>
						<div className={styles.promotionCard}>
							<img src="/images/headshots/jeong-chris.jpg"/>
							<div>
								<Heading level="3" className={styles.f3Large}>
									Chris <span>Jeong</span>
								</Heading>
								<span>2 years with Liferay</span>
							</div>
							<div>
								<Heading level="4" className={styles.f4}>Senior Product Designer</Heading>
								<span>Previous: Product Designer</span>
							</div>
						</div>
					</div>
				</Flex>
			</section>

			{/* ---------- INITIATIVES ----------- */}
			{/* HEADER - INITIATIVES */}
			<Plx tagName="h2" className={styles.sectionHeader} id="initiatives" parallaxData={PlxUp1}>
				Inititatives
			</Plx>

			{/* CHARITY DESIGN */}
			<section id="charityDesign" className={styles.charityDesign}>
				<div className={styles.fiftyFifty}>
					<Flex direction="column" justify="center" className={styles.left}>
						<div className={styles.preHeader}>Charity Design</div>
						<Heading level="2" className={styles.f2}>Underground Writing</Heading>
						<p className={styles.p}>
						This year Design for Life(ray) served Underground Writing, an organization that runs creative workshops that empowers personal transformation in migrant, incarcerated, recovery, and other at-risk communities through literacy. 
						<br /> <br />
						Liferay designers spent some time at the end of the year to give Underground Writing a top to down make-over. This included a brand new website, completely revamped tech stack, and service design optimizations.
						</p>
					</Flex>
					<img src="/images/2019/underground-writing.png" />
				</div>
				<div className={styles.services}>
					<Flex flexWrap="wrap" className={styles.p}>
						<span>Services Provided</span>
						<ul>
							<li>Branding</li>
							<li>Development</li>
							<li>Service Design</li>
							<li>Web Design</li>
						</ul>
					</Flex>
					<Flex flexWrap="wrap" className={styles.p}>
						<span>Technologies Used</span>
						<ul>
							<li>Anchor.fm</li>
							<li>Donorbox</li>
							<li>Google Suite for Nonprofits</li>
							<li>Webflow</li>
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
						<p className={styles.p}>Over the last 9 months we have invested in sharing our research, thoughts, and work with you. We have shared over 40 posts covering topics such as accessibility, psychology, research, strategy, visual design,
ethics and much more!</p>
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
				<p className={styles.p}>Ideas meet makers. Makers meet comrades.<br />
These events sparked inspirations, gave ideas momentum, and put makers in action.
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
			
			{/* ---------- PROJECTS ----------- */}
			{/* HEADER - PROJECTS */}
			<Plx tagName="h2" className={styles.sectionHeader} id="projects" parallaxData={PlxUp1}>
				Projects
			</Plx>

			{/* ---------- OPS ----------- */}
			{/* HEADER - OPS */}
			<Plx tagName="h2" className={styles.sectionHeader} id="ops" parallaxData={PlxUp1}>
				Ops
			</Plx>
			<Footer />
		</div>
	)
}

export default TwentyNineteen
