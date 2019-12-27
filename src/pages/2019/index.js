import React from 'react'
import { Helmet } from 'react-helmet'

import { Flex, Link, Heading, Icon, ScrollProgress,	ScrollArrow } from 'components/atoms'
import { SEO, FancyFooter, FormNewsletter } from 'components/molecules'
import { Footer } from 'components/organisms'

import Plx from 'react-plx'
import { Grid } from 'reakit'
import moment from 'moment'
import MediaQuery from 'react-responsive'

import { SimpleCard, Nav, Designer, KeyArt, Content, Carousel, CarouselSlide } from 'pages/2019/components/_index'
import styles from './styles.module.scss'
import { sizes } from 'theme'
import data from 'markdown/annual-reports/TwentyNineteen.yaml'

const PlxUp1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 100,
				endValue: -80,
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
				endValue: -100,
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
			<MediaQuery minWidth={sizes.medium}>
				<ScrollArrow />
			</MediaQuery>

			{/* ----------- ANCHOR LINKS ---------- */}
			<Nav />
			{/* --------- HERO ---------- */}
			<section id="top" className={styles.hero}>
				<Grid alignItems="center" className={styles.heroGrid}>
					<div className={styles.keyArt}>
						<KeyArt />
					</div>
					<Heading level="1" className={styles.f2}>
						{data.title.split(' ').map((title, i) => (<span key={i}
							className={styles.firstWhite}>{title}
						</span>))}
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
										{subDepartment.title
											.split(' ')
											.map((title, i) => (
												<span className={styles.firstWhite} key={i}>{title}</span>
											))}
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
									y2="99%"
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
					<Link to={data.careerSection.link.url} className={styles.link}>
						{data.careerSection.link.title}
					</Link>
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
					<Flex flexWrap="wrap" className={styles.p}>
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
				<Link to={data.givingSection.link.url} className={styles.link}>
					{data.givingSection.link.title}
				</Link>
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
						<Link to={data.designPractice.link.url} className={styles.link}>
							{data.designPractice.link.title}
						</Link>
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
						<Link
							to={data.designCommunity.seeMore.url}
							className={styles.link}
						>
							{data.designCommunity.seeMore.title}
						</Link>
					</Flex>
				</div>
			</section>

			{/* DRIBBBLE */}
			<section id="dribbble">
				<Flex
					direction="column"
					align="center"
					justify="center"
					className={styles.dribbble}
				>
					<Content
						pretitle={data.dribbbleSection.pretitle}
						title={data.dribbbleSection.title}
						align="center"
					/>
					<Carousel ratio="fourToThree">
						{data.dribbbleSection.slides.map(({ slide }) => (
							<CarouselSlide
								image={slide.image}
								description={slide.description}
							/>
						))}
					</Carousel>
					<Link to={data.dribbbleSection.link.url} className={styles.link}>
						{data.dribbbleSection.link.title}
					</Link>
				</Flex>
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
							avatarImage
							image={project.image}
							title={project.title}
							subtitle={project.designer}
							description={project.description}
							link={project.link.title}
							url={project.link.url}
						/>
					))}
					<Flex justify="center" align="center" className={styles.seeMoreCard}>
						<Link
							to={data.designProjects.seeMore.url}
							className={styles.link}
						>
							{data.designProjects.seeMore.title}
						</Link>
					</Flex>
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
						{data.globalServices.images.map(({ image }) => (
							<Flex direction="column" align="center" justify="center">
								<img src={image} />
							</Flex>
						))}
					</div>
				</Flex>
				{/* <img src="/images/2019/dots-large.svg"/> */}
			</section>

			{/* ---------- OPS ----------- */}
			{/* HEADER - OPS */}
			<div id="ops" />

			{/* OPERATIONS */}
			<section id="operations">
				<div className={styles.ops}>
					<Content
						pretitle={data.opsSection.pretitle}
						title={data.opsSection.title}
						align="center"
					/>
					<Carousel ratio="fourToThree">
						{data.opsSection.slides.map(({ slide }) => (
							<CarouselSlide
								image={slide.image}
								description={slide.description}
							/>
						))}
					</Carousel>
				</div>
			</section>
			<section id="thankyou" className={styles.thankyou}>
				<Content
					pretitle={data.thankYou.subtitle}
					title={data.thankYou.title}
					copy={data.thankYou.message}
					align="left"
				/>
				<Plx parallaxData={PlxUp2} className={styles.p}>
					Juan Hidalgo
					<Plx
						parallaxData={PlxUp3}
						tagName="img"
						src="/images/2018/jh-signature.svg"
						className={styles.signature}
					/>
					<Plx
						parallaxData={PlxUp1}
						tagName="img"
						src="/images/headshots/small/hidalgo-juan.jpg"
						className={styles.headshot}
					/>
				</Plx>
			</section>

			{/* ---------- SUBSCRIBE ----------- */}
			{/* HEADER - SUBSCRIBE */}
			<div id="subscribe" />

			<section>
				<Content
					pretitle={data.subscribe.pretitle}
					title={data.subscribe.title}
					copy={data.subscribe.subtitle}
					align="center"
				/>
				<FormNewsletter submitText="Subscribe" />
			</section>

			<Footer />
			<FancyFooter />
		</div>
	)
}

export default TwentyNineteen
