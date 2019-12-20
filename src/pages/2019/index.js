import {
	Flex,
	Image,
	Heading,
	Text,
	Icon,
	ScrollProgress,
	ScrollArrow,
} from 'components/atoms'
import { Footer } from 'components/organisms'
import { SimpleCard, Nav, Designer, KeyArt, Content, Carousel, CarouselSlide } from 'pages/2019/components/_index'
import React from 'react'
import { Helmet } from 'react-helmet'
import Plx from 'react-plx'
import styles from './styles.module.scss'
import { SEO, FancyFooter, FormNewsletter } from 'components/molecules'
import data from 'markdown/annual-reports/TwentyNineteen.yaml'
import { Grid } from 'reakit'
import moment from 'moment'

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
			<ScrollArrow />

			{/* ----------- ANCHOR LINKS ---------- */}
			<Nav />
			{/* --------- HERO ---------- */}
			<section id="top" className={styles.hero}>
				<Grid alignItems="center" className={styles.heroGrid}>
					<div className={styles.keyArt}>
						<KeyArt />
					</div>
					<Heading level="1" className={styles.f2}>
						{data.title}
					</Heading>
					<p className={styles.pLarge}>{data.subtitle}</p>
				</Grid>
			</section>

			{/* ---------- TEAM ----------- */}
			{/* HEADER - TEAM */}
			<div id="team" />

			{/* DEPARTMENT */}
			<section id="department">
				<Flex
					direction="column"
					align="center"
					justify="center"
					className={styles.department}
				>
					<Grid
						templateRows="auto 1fr"
						rowGap="48px"
						className={styles.organizationContent}
					>
						<Content
							pretitle={data.departmentSection.pretitle}
							title={data.departmentSection.title}
							copy={data.departmentSection.content}
							align="left"
						/>
						<Grid.Item className={styles.desicon}>
							<Icon
								name="liferayDesicon"
								fill="white"
								height="7.25vw"
								width="7.25vw"
							/>
							<p className={styles.pLarge}>
								{data.departmentSection.desicon.title}
							</p>
							<p className={styles.p}>
								{data.departmentSection.desicon.subtitle}
							</p>
						</Grid.Item>
					</Grid>
					<div className={styles.departmentNames}>
						{data.departmentSection.subDepartments.map(
							({ subDepartment }) => (
								<Flex direction="column" align="center" justify="center">
									<Heading level="3" className={styles.f4}>
										{subDepartment.title}
									</Heading>
									<span className={styles.pSmall}>
										{subDepartment.subtitle}
									</span>
								</Flex>
							),
						)}
					</div>
				</Flex>
				{/* <img src="/images/2019/dots-large.svg"/> */}
			</section>

			{/* FRESH FISH */}
			<section id="new-faces">
				<div className={styles.newFaces}>
					<Content
						pretitle={data.timelineSection.pretitle}
						title={data.timelineSection.title}
						copy={data.timelineSection.subtitle}
						align="center"
					/>
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
						{data.timelineSection.designers.map(({ designer }) => (
							<Designer
								profileUrl={'/team/' + `${designer.url}`}
								month={moment(designer.startDate).format('MMM')}
								day={moment(designer.startDate).format('DD')}
								headshot={
									'/images/headshots/' + `${designer.url}` + '.jpg'
								}
								name={designer.name}
								detail={designer.detail}
								country={designer.country}
								birthRay={
									designer.detail == 'birthRay' ? 'birthRay' : null
								}
							/>
						))}
					</Flex>
				</div>
			</section>

			{/* GROW */}
			<section id="growth" className={styles.growth}>
				<Content
					pretitle={data.careerSection.pretitle}
					title={data.careerSection.title}
					copy={data.careerSection.subtitle}
					align="center"
				/>
				<Flex
					direction="column"
					align="center"
					className={styles.recentPromotions}
				>
					<img className={styles.growTool} src="/images/2019/path-tool.png" />
					{/* <Heading level="2" className={styles.f3}>
						Recent Promotions
					</Heading>
					<div>
						<div className={styles.promotionCard}>
							<img src="/images/headshots/connolly-ryan.jpg" />
							<div>
								<Heading level="3" className={styles.f3Large}>
									Ryan <span>Connolly</span>
								</Heading>
								<span>3 years with Liferay</span>
							</div>
							<div>
								<Heading level="4" className={styles.f4}>
									Warrior Princess
								</Heading>
								<span>Previous: Product Design Manager</span>
							</div>
						</div>
						<div className={styles.promotionCard}>
							<img src="/images/headshots/jeong-chris.jpg" />
							<div>
								<Heading level="3" className={styles.f3Large}>
									Chris <span>Jeong</span>
								</Heading>
								<span>2 years with Liferay</span>
							</div>
							<div>
								<Heading level="4" className={styles.f4}>
									Senior Product Designer
								</Heading>
								<span>Previous: Product Designer</span>
							</div>
						</div>
					</div> */}
				</Flex>
			</section>

			{/* ---------- INITIATIVES ----------- */}
			{/* HEADER - INITIATIVES */}
			<div id="initiatives" />

			{/* CHARITY DESIGN */}
			<section id="charityDesign" className={styles.mediaSection}>
				<div className={styles.fiftyFifty}>
					<Content
						pretitle={data.givingSection.pretitle}
						title={data.givingSection.title}
						copy={data.givingSection.subtitle}
						align="left"
						justify="center"
					/>
					<img src="/images/2019/underground-writing.png" />
				</div>
				<div className={styles.services}>
					<Flex flexWrap="wrap" align="center" className={styles.p}>
						<span>{data.givingSection.what.title}</span>
						<ul>
							{data.givingSection.what.services.map(i => (
								<li>{i}</li>
							))}
						</ul>
					</Flex>
					<Flex flexWrap="wrap" className={styles.p}>
						<span>{data.givingSection.how.title}</span>
						<ul>
							{data.givingSection.how.technologies.map(i => (
								<li>{i}</li>
							))}
						</ul>
					</Flex>
				</div>
				<a href={data.givingSection.link.url} className={styles.link}>
					{data.givingSection.link.title}
				</a>
			</section>

			{/* THOUGHT LEADERSHIP */}
			<section id="thoughtLeadership">
				<div className={styles.dbp}>
					<div>
						<Content
							pretitle={data.designPractice.pretitle}
							title={data.designPractice.title}
							copy={data.designPractice.subtitle}
							align="center"
						/>
						<a href={data.designPractice.link.url} className={styles.link}>
							{data.designPractice.link.title}
						</a>
					</div>
					<div className={styles.dbpGrid}>
						{data.designPractice.images.map(({ image }) => (
							<img src={image} />
						))}
					</div>
				</div>
			</section>

			{/* COMMUNITY */}
			<section id="community" className={styles.ourEvents}>
				<Content
					pretitle={data.designCommunity.pretitle}
					title={data.designCommunity.title}
					copy={data.designCommunity.subtitle}
					align="center"
				/>
				<div className={styles.cardGrid}>
					{data.designCommunity.events.map(({ event }) => (
						<SimpleCard
							image={event.image}
							title={event.title}
							subtitle={event.city}
							description={event.description}
						/>
					))}
					<Flex justify="center" align="center" className={styles.seeMoreCard}>
						<a
							href={data.designCommunity.seeMore.url}
							className={styles.link}
						>
							{data.designCommunity.seeMore.title}
						</a>
					</Flex>
				</div>
			</section>

			{/* DRIBBBLE */}
			<section id="dribbble">
				<div  className={styles.dribbble}>
					<Content
						pretitle={data.dribbbleSection.pretitle}
						title={data.dribbbleSection.title}
						align="center"
					/>
					<Carousel ratio="fourToThree">
						<CarouselSlide
							image="/images/2019/dribbble-shots/dribbble1.png"
							description="This is a set of custom graphic t-shirt designs I put together for Liferay's event in Austin, TX.

							Check out the shirt being printed live at the event!
							https://twitter.com/Liferay/status/1134203613771907072" />
						<CarouselSlide
							image="/images/2019/dribbble-shots/dribbble2.png"
							description="- Redesign Project -
							Take a look a the attachments to see the transformation. In collaboration with @Ryan Connolly" />
						<CarouselSlide
							image="/images/2019/dribbble-shots/dribbble3.png"
							description="Hey Dribbblers. Just exploring some more transitions for our upcoming Commerce accelerators. This concept is for a furniture distributor. Let us know your feedback or if you have any ideas we can add! Thanks" />
						<CarouselSlide
							image="/images/2019/dribbble-shots/dribbble4.png"
							description="Hey Dribbble!

							This is a new feature that's coming soon to Liferay to provide comments, create threads, resolve tasks and review the work done.
							
							This was all done by using patterns from our design language Lexicon and components from its Figma Library: https://liferay.design/lexicon/
							
							I'll be also posting the construction soon." />
						<CarouselSlide
							image="/images/2019/dribbble-shots/dribbble5.png"
							description="Hey Dribbble!

							Here's another Lexicon component I've been working on, it's a color picker with an optional panel of the RGB color selection.
							
							It also has a simpler variation with a HEX input, maybe I'll be posting that soon too. 🖖" />
						<CarouselSlide
							image="/images/2019/dribbble-shots/dribbble6.png"
							description="Hey Team! I wanted to share a simple 404 illustration I made for our public-facing site. I'm attaching the current (old) page and an idea of the newer-looking page. Since 404 pages are a pain-point for Users we thought it would be nice to add some delight to this page. Adding mouse-activated movement, as well! What do you all think?" />
					</Carousel>
				</div>
			</section>


			{/* ---------- PROJECTS ----------- */}
			{/* HEADER - PROJECTS */}
			<div id="projects" />

			{/* PROJECTS */}
			<section id="teamProjects" className={styles.ourEvents}>
				<Content
					pretitle={data.designProjects.pretitle}
					title={data.designProjects.title}
					copy={data.designProjects.subtitle}
					align="center"
				/>
				<div className={styles.cardGrid}>
					{data.designProjects.projects.map(({ project }) => (
						<SimpleCard
							image={project.image}
							title={project.title}
							subtitle={project.designer}
							description={project.description}
						/>
					))}
				</div>
			</section>

			{/* GLOBAL SERVICES */}
			<section id="globalServices">
				<Flex
					direction="column"
					align="center"
					justify="center"
					className={styles.department}
				>
					<Grid
						templateRows="auto 1fr"
						rowGap="48px"
						className={styles.organizationContent}
					>
						<Content
							pretitle={data.globalServices.pretitle}
							title={data.globalServices.title}
							copy={data.globalServices.content}
							align="left"
							justify="center"
						/>
						<Grid.Item className={styles.desicon}>
							<img src="images/2019/global-services/gs0.png" />
						</Grid.Item>
					</Grid>
					<div className={styles.departmentNames}>
						{data.globalServices.images.map(
							({ image }) => (
								<Flex direction="column" align="center" justify="center">
									<img src={image} />
								</Flex>
							),
						)}
					</div>
				</Flex>
				{/* <img src="/images/2019/dots-large.svg"/> */}
			</section>
			

			{/* ---------- OPS ----------- */}
			{/* HEADER - OPS */}
			<div id="ops" />

			{/* OPERATIONS */}
			<section id="operations">
				<div  className={styles.ops}>
					<Content
						pretitle={data.opsSection.pretitle}
						title={data.opsSection.title}
						align="center"
					/>
					<Carousel ratio="fourToThree">
						<CarouselSlide
							image="/images/2019/slack.png"
							description="slack description" />
						<CarouselSlide
							image="/images/2019/damn.jpeg"
							description="dam description" />
						<CarouselSlide
							image="/images/2019/handbook.png"
							description="handbook description" />
					</Carousel>
				</div>
			</section>

			<Content
						pretitle="subscribe"
						title="#LikeAndSubscribe<3"
						align="center"
					/>
			<FormNewsletter submitText='Subscribe' />
			<Footer />
			<FancyFooter />
		</div>
	)
}

export default TwentyNineteen
