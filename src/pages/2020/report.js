/** @jsx jsx */

import { jsx, Box, Flex, Grid, Text, Heading, ThemeProvider } from 'theme-ui'
import { Helmet } from 'react-helmet'

import { Image, ScrollProgress, ScrollArrow, Icon, Link } from 'components/atoms'
import { SEO, FormNewsletter } from 'components/molecules'
import { Footer } from 'components/organisms'
import theme from 'gatsby-plugin-theme-ui/2020'

import FancyFooter from './promotions/components/footer.js'
import PromotedDesigners from './promotions/components/headshots.js'
import MediaQuery from 'react-responsive'
import Plx from 'react-plx'

import {
	Carousel,
	Nav,
	Event,
	KeyArt,
	Content,
	Slide,
	ThankYou,
	Juan,
} from 'pages/2020/components/_index'
import styles from './styles.module.scss'
import data from 'markdown/annual-reports/TwentyTwenty.yaml'
import { Global } from '@emotion/core'

//   constant plx data

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
			<Global
				styles={theme => ({
					body: {
						fontFamily: theme.fonts.body,
						color: theme.colors.lightBlue,
						lineHeight: theme.lineHeights.body,
					},
				})}
			/>
			<div className={styles.pagestyles} sx={{ backgroundColor: 'black' }}>
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
					id="adapt"
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
							inverted
							pageHeader
							zIndex="1"
						/>
						<div sx={{ mt: 5 }} />
					</Flex>
				</div>

				{/* ---------- MILESTONES ----------- */}

				<section id="milestones">
					<div className={styles.newFaces}>
						<Content
							pretitle={data.timelineSection.pretitle}
							title={data.timelineSection.title}
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
				<Flex
					sx={{
						background: 'white',
						height: ['auto', '100vh', null],
						py: 5,
					}}
				>
					<Flex
						sx={{
							justifyContent: 'center',
							maxWidth: '1280px',
							my: 0,
							mx: [1, 'auto', null],
							flexDirection: 'column',
							width: '100%',
						}}
					>
						<Content
							pretitle={data.promotionsPage.title}
							title={data.promotionsPage.pretitle}
							copy={data.promotionsPage.summary}
							inverted
						/>
						<PromotedDesigners />
					</Flex>
				</Flex>

				{/* COVID-19 */}
				<section id="covid-19" className={styles.covid19}>
					<Content
						pretitle={data.covid.pretitle}
						title={data.covid.title}
						align="center"
					/>
					<Carousel>
						{data.covid.slides.map(({ slide }) => (
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
				</section>

				{/* Impact */}
				<section id="impact">
					<Content
						pretitle={data.impact.pretitle}
						title={data.impact.title}
						align="center"
					/>
					<Box>
						{data.impact.bigStats.map(({ stat }, i) => (
							<Box key={i} sx={{ textAlign: 'center', mb: 5 }}>
								<Text
									sx={{
										fontSize: '16vw',
										lineHeight: 0.8,
										fontWeight: 'heading',
										textTransform: 'uppercase',
										mb: 0,
										'-webkit-text-stroke-width': '2px',
										'-webkit-text-fill-color': theme =>
											`${theme.colors.black}`,
										'-webkit-text-stroke-color': theme =>
											`${theme.colors.primary}`,
									}}
								>
									{stat.value}
								</Text>
								<Text
									sx={{
										mt: '-1em',
										fontSize: 4,
										fontWeight: 'heading',
										textShadow: theme =>
											'0 -4px 6px ' + `${theme.colors.black}`,
									}}
								>
									{stat.label}
								</Text>
							</Box>
						))}
					</Box>
					<Grid sx={{ variant: 'grids.threeCards' }}>
						{data.impact.cards.map(({ card }, i) => (
							<Link
								to={card.link}
								key={i}
								sx={{
									borderRadius: '1.4rem',
									width: '100%',
									flexDirection: 'column',
									display: 'flex',
									justifyContent: 'flexStart',
									alignItems: 'center',
									px: 1,
									py: 4,
									background: theme =>
										`${theme.gradients.lightBackgroundGradient}`,
									textAlign: 'center',
								}}
							>
								<Box
									sx={{
										padding: 3,
										borderRadius: '1rem',
										background: theme =>
											`${theme.gradients.backgroundGradient}`,
									}}
								>
									<Icon
										name={card.icon}
										sx={{
											height: '3rem',
											width: '3rem',
											color: 'primary',
										}}
									/>
								</Box>
								<Text
									sx={{
										fontSize: 5,
										mt: 3,
										mb: 2,
									}}
								>
									{card.title}
								</Text>
								<Text sx={{ fontSize: 4, fontWeight: '200' }}>
									{card.subtitle}
								</Text>
							</Link>
						))}
					</Grid>
				</section>

				{/* GS Summary */}
				<section id="consult" className={styles.covid19}>
					<Content
						pretitle={data.globalServices.pretitle}
						title={data.globalServices.title}
						align="center"
					/>
					<Carousel>
						{data.globalServices.slides.map(({ slide }) => (
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
				</section>

				{/* OPES */}
				<section id="campaign">
					<Content
						pretitle={data.opes.pretitle}
						title={data.opes.title}
						align="center"
					/>
					<Flex sx={{ justifyContent: 'space-between', mb: 5 }}>
						{data.opes.content.split('\n\n').map((paragraph, i) => (
							<Text
								as="p"
								key={i}
								sx={{
									fontSize: 3,
									maxWidth: '56ch',
									':nth-of-type(2)': { mt: 4 },
								}}
							>
								{paragraph}
							</Text>
						))}
					</Flex>
					<Image src={data.opes.image} />
				</section>

				{/* Future */}
				<section sx={{ backgroundColor: 'white' }}>
					<Content
						pretitle={data.future.pretitle}
						title={data.future.title}
						align="center"
					/>
					<Box sx={{}}>
						{data.future.list.map(({ li }, i) => (
							<Box>
								<Text as="p" key={i} sx={{}}>
									{li.title}
								</Text>
								{li.content.split('\n\n').map((paragraph, i) => (
									<Text key={i}>{paragraph}</Text>
								))}
							</Box>
						))}
					</Box>
				</section>

				{/* Thank You */}
				<section
					sx={{ position: 'relative', zIndex: 0 }}
					id="thankyou"
					className={styles.thankyou}
				>
					<Content
						pretitle={data.thankYou.pretitle}
						title={data.thankYou.title}
						align="center"
					/>
					<ThankYou
						message={data.thankYou.message.part1}
						nextTitle={data.thankYou.message.part2.title}
						nextBody={data.thankYou.message.part2.body}
						authorName={data.thankYou.author.name}
						authorTitle={data.thankYou.author.title}
					/>
					<Juan />
				</section>
				{/* ---------- SUBSCRIBE ----------- */}
				<section id="subscribe" sx={{ backgroundColor: 'black', mt: '10vh' }}>
					<Content
						pretitle={data.subscribe.pretitle}
						title={data.subscribe.title}
						copy={data.subscribe.subtitle}
						align="center"
					/>
					<FormNewsletter submitText="Subscribe" />
				</section>
				<div id="footer" />
				<Footer />
				<FancyFooter />
			</div>
		</ThemeProvider>
	)
}

export default TwentyTwenty
