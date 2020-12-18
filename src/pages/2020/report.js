/** @jsx jsx */

import { jsx, Flex, Heading, ThemeProvider } from 'theme-ui'
import { Helmet } from 'react-helmet'

import { Image, ScrollProgress, ScrollArrow } from 'components/atoms'
import { SEO, FancyFooter, FormNewsletter } from 'components/molecules'
import { Footer } from 'components/organisms'
import theme from 'gatsby-plugin-theme-ui/2020'

import MediaQuery from 'react-responsive'
import Plx from 'react-plx'

import {
	Carousel,
	Nav,
	Event,
	KeyArt,
	Content,
	Slide,
} from 'pages/2020/components/_index'
import styles from './styles.module.scss'
import data from 'markdown/annual-reports/TwentyTwenty.yaml'

//   constant plx data
const InView = [
	{
		start: 'self',
		duration: 1,
		properties: [],
	},
]
const InView10 = [
	{
		start: 'self',
		duration: 1,
		startOffset: '10vh',
		properties: [],
	},
]
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
const PlxDown1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 0,
				endValue: 20,
				unit: 'vh',
				property: 'translateY',
			},
		],
	},
]
const PlxDown2 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 0,
				endValue: 80,
				unit: 'vh',
				property: 'translateY',
			},
			{
				startValue: 1,
				endValue: 0,
				property: 'opacity',
			},
		],
	},
]
const PlxDown3 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 0,
				endValue: 100,
				unit: 'vh',
				property: 'translateY',
			},
			{
				startValue: 1,
				endValue: 0,
				property: 'opacity',
			},
		],
	},
]

const TwentyTwenty = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className={styles.pagestyles}>
				<SEO
					pageTitle="Liferay Design | 2020 Annual Report"
					description="Highlights, case studies, and more from Communication Design, Product Design, and Design Research at Liferay."
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
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Bebas+Neue"
						rel="stylesheet"
					/>
				</Helmet>

				{/* ----------- SCROLL PROGRESS BAR ---------- */}
				<ScrollProgress />
				<MediaQuery minWidth={'768px'}>
					<ScrollArrow />
				</MediaQuery>

				{/* ----------- ANCHOR LINKS ---------- */}
				<Nav />
				{/* --------- HERO ---------- */}
				<Flex
					as="section"
					id="top"
					sx={{
						height: '100vh',
						width: '100vw',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '0 auto !important',
						overflow: 'hidden',
					}}
				>
					<Plx parallaxData={PlxDown2}>
						<Heading
							level={1}
							sx={{
								textAlign: 'center',
								variant: 'text.caps',
								color: '#93A7DB',
								fontWeight: 'body',
								letterSpacing: '0.5em',
								fontFamily: 'Bebas Neue',
							}}
						>
							{data.title}
						</Heading>
					</Plx>
					<Plx parallaxData={PlxDown3} sx={{ width: '100%' }}>
						<KeyArt />
					</Plx>
				</Flex>

				{/* ---------- INSPIRATIONAL QUOTE ----------- */}
				<div
					sx={{
						background: theme => `${theme.gradients.splitBackgroundGradient}`,
					}}
				>
					<Flex
						as="section"
						sx={{
							flexFlow: 'column-reverse',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						<Plx parallaxData={PlxUp3}>
							<Carousel>
								{data.unsplash.images.map(({ image }) => (
									<Slide
										title={''}
										image={image}
										icon={''}
										url={''}
										linkText={''}
										description={''}
										type={'image'}
									/>
								))}
							</Carousel>
						</Plx>
						<Content
							pretitle={data.quote.pretitle}
							title={data.quote.title}
							align="center"
							justify="center"
							inverted
							textAlign="center"
							zIndex="1"
						/>
					</Flex>
				</div>

				{/* ---------- MILESTONES ----------- */}

				<section id="milestones">
					<div className={styles.newFaces}>
						<Content
							pretitle={data.timelineSection.pretitle}
							title={data.timelineSection.title}
							copy={data.timelineSection.subtitle}
							align="center"
						/>
						<Flex
							sx={{
								flexDirection: 'column',
								justifyContent: 'space-Between',
							}}
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
							{data.timelineSection.events.map(({ event }) => (
								<Event
									name={event.name}
									description={event.description}
									startDate={event.startDate}
									endDate={event.endDate}
									location={event.location}
									url={event.url}
									image={event.image}
								/>
							))}
						</Flex>
					</div>
				</section>

				{/* COVID-19 */}
				<section id="convid-19" className={styles.covid19}>
					<Carousel>
						{data.covid19.slides.map(({ slide }) => (
							<Slide
								title={slide.title}
								image={slide.image}
								icon={slide.icon}
								url={slide.url}
								linkText={slide.linkText}
								description={slide.description}
								type={'card'}
							/>
						))}
					</Carousel>
					<Carousel>
						{data.designPractice.images.map(({ image }) => (
							<Slide
								title={''}
								image={image}
								icon={''}
								url={''}
								linkText={''}
								description={''}
								type={'image'}
							/>
						))}
					</Carousel>
				</section>

				{/* ---------- INITIATIVES ----------- */}
				{/* HEADER - INITIATIVES */}
				<div id="initiatives" />

				{/* CHARITY DESIGN */}
				<section id="charityDesign" className={styles.mediaSection}></section>

				{/* THOUGHT LEADERSHIP */}
				<section id="thoughtLeadership"></section>

				{/* COMMUNITY */}
				<section id="community" className={styles.ourEvents}></section>

				{/* DRIBBBLE */}
				<section id="dribbble"></section>

				{/* ---------- PROJECTS ----------- */}
				{/* HEADER - PROJECTS */}
				<div id="projects" />

				{/* PROJECTS */}
				<section id="teamProjects" className={styles.ourEvents}></section>

				{/* GLOBAL SERVICES */}
				<section id="globalServices"></section>

				{/* ---------- OPS ----------- */}
				{/* HEADER - OPS */}
				<div id="ops" />

				{/* OPERATIONS */}
				<section id="operations"></section>
				<section id="thankyou" className={styles.thankyou}>
					<div>
						<Content
							pretitle={data.thankYou.subtitle}
							title={data.thankYou.title}
							copy={data.thankYou.message}
							align="left"
						/>
						<div className={styles.p}>
							Juan Hidalgo
							<Image
								src="/images/2018/jh-signature.svg"
								className={styles.signature}
							/>
							<Image
								src="/images/headshots/small/hidalgo-juan.jpg"
								className={styles.headshot}
							/>
						</div>
					</div>
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
		</ThemeProvider>
	)
}

export default TwentyTwenty
