/** @jsx jsx */

import { jsx, Box, Flex, Grid, Text, Heading, ThemeProvider } from 'theme-ui'
import { Helmet } from 'react-helmet'

import { ScrollProgress, ScrollArrow, Icon, Link } from 'components/atoms'
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
					previewImage="/images/2020/liferay-design-og-2020.png"
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
								variant: 'text.preheader',
								color: 'lightBlue',
								opacity: 0,
								animation:
									'pageTitleAnimateIn .5s ease-in-out 1.2s forwards',
								'@keyframes pageTitleAnimateIn': {
									to: {
										opacity: 1,
									},
								},
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
							variant: 'boxes.section',
							flexFlow: 'column-reverse',
							justifyContent: 'center',
							alignItems: 'center',
							pt: [5, 6],
						}}
					>
						<Plx parallaxData={PlxUp3}>
							<Carousel>
								{data.unsplash.images.map(({ image }, i) => (
									<Slide
										key={i}
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
						{/* <div sx={{ mt: 6 }} /> */}
					</Flex>
				</div>

				{/* ---------- MILESTONES ----------- */}

				<section id="milestones" sx={{ py: [3, 5], variant: 'boxes.section' }}>
					<Flex sx={{ alignItems: 'center', flexDirection: 'column' }}>
						<Content
							center
							pretitle={data.timelineSection.pretitle}
							title={data.timelineSection.title}
						/>
						<Flex
							sx={{
								flexDirection: 'column',
								width: ['100%', '800px'],
								position: 'relative',
							}}
						>
							<div
								sx={{
									position: 'absolute',
									left: ['50%', '3rem', null],
									width: '1px',
									height: '100%',
									'&::before': {
										content: '""',
										background: theme =>
											`${'linear-gradient(' +
												theme.colors.black +
												', rgba(31,33,35,0))'}`,
										width: '10px',
										height: '6rem',
										position: 'absolute',
										top: -1,
										left: 0,
										zIndex: 1,
									},
									'&::after': {
										content: '""',
										background: theme =>
											`${'linear-gradient(rgba(31,33,35,0),' +
												theme.colors.black +
												')'}`,
										width: '10px',
										height: '6rem',
										position: 'absolute',
										bottom: 0,
										left: 0,
										zIndex: 1,
									},
								}}
							>
								<svg
									width="100%"
									height="100%"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="0.5"
										y1="0"
										x2="0.5"
										y2="99%"
										stroke="#006DE7"
										strokeLinejoin="round"
										strokeDasharray="1 10"
									/>
								</svg>
							</div>
							{data.timelineSection.events.map(({ event }, i) => (
								<Event
									key={i}
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
					</Flex>
				</section>
				<Flex
					sx={{
						background: 'white',
						height: ['auto', '100vh', null],
						py: [5, 6],
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
				<Flex
					as="section"
					id="covid-19"
					sx={{
						variant: 'boxes.section',
						flexDirection: 'column',
						alignItems: ['flex-start', 'center'],
						mt: 5,
					}}
				>
					<Content
						center
						pretitle={data.covid.pretitle}
						title={data.covid.title}
					/>
					<Carousel>
						{data.covid.slides.map(({ slide }, i) => (
							<Slide
								key={i}
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
				</Flex>

				{/* Impact */}
				<section id="impact" sx={{ variant: 'boxes.section', mt: [4, 5], mb: 6 }}>
					<Content pretitle={data.impact.pretitle} title={data.impact.title} />
					<Box>
						{data.impact.bigStats.map(({ stat }, i) => (
							<Box
								key={i}
								sx={{
									textAlign: ['left', 'center'],
									mb: 4,
									ml: [2, 'initial'],
									'&:nth-of-type(1):after': {
										content: '""',
										width: 6,
										display: 'block',
										mt: ['4rem', '5rem'],
										mx: [2, 'auto'],
										height: '2px',
										backgroundColor: 'primary',
									},
								}}
							>
								<Text
									sx={{
										fontSize: ['16vh', '16vw'],
										lineHeight: 0.8,
										fontWeight: 'bold',
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
										mt: [0, '-1em'],
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
					<Grid
						sx={{
							variant: 'grids.threeCards',
							mt: [6, 5],
							m: [2, 'initial', null],
						}}
					>
						{data.impact.cards.map(({ card }, i) => (
							<Link
								to={card.link}
								key={i}
								sx={{
									borderRadius: '1.4rem',
									border: theme =>
										'solid 2px ' + `${theme.colors.black}`,
									color: 'lightBlue',
									width: '100%',
									flexDirection: ['row', 'column'],
									display: 'flex',
									justifyContent: 'flexStart',
									alignItems: 'center',
									px: 2,
									py: [2, 4],
									background: theme =>
										`${theme.gradients.lightBackgroundGradient}`,
									textAlign: ['left', 'center'],
									'&:hover': {
										borderColor: 'primary',
									},
								}}
							>
								<Box
									sx={{
										variant: 'boxes.icon',
										ml: ['auto', 'initial'],
										order: [1, 'initial'],
										justifySelf: ['flex-end', 'initial'],
									}}
								>
									<Icon name={card.icon} />
								</Box>
								<Box sx={{ py: [2, 'initial'], order: [-1, 'initial'] }}>
									<Text
										sx={{
											fontSize: 5,
											mt: [1, 3],
											mb: [1, 2],
										}}
									>
										{card.title}
									</Text>
									<Text sx={{ fontSize: 4, fontWeight: '200' }}>
										{card.subtitle}
									</Text>
								</Box>
							</Link>
						))}
					</Grid>
				</section>
				{/* GS Summary */}
				<Flex
					as="section"
					id="consult"
					sx={{
						variant: 'boxes.section',
						flexDirection: 'column',
						alignItems: ['flex-start', 'center'],
					}}
				>
					<Content
						center
						pretitle={data.globalServices.pretitle}
						title={data.globalServices.title}
					/>
					<Plx parallaxData={PlxUp3}>
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
					</Plx>
				</Flex>

				{/* OPES */}
				<section id="campaign" sx={{ variant: 'boxes.section' }}>
					<Content pretitle={data.opes.pretitle} title={data.opes.title} />
					<Grid
						sx={{
							mb: [3, 5],
							variant: 'boxes.gridTwoCol',
						}}
					>
						{data.opes.content.split('\n\n').map((paragraph, i) => (
							<Text
								as="p"
								key={i}
								sx={{
									variant: 'text.pLarge',
									':nth-of-type(2)': {
										my: [3, 5],
										gridColumnStart: [1, 3],
									},
								}}
							>
								{paragraph}
							</Text>
						))}
					</Grid>
				</section>
				<Carousel>
					{data.opes.images.map(({ image }) => (
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

				{/* Future */}
				<div
					sx={{
						backgroundColor: 'white',
					}}
				>
					<section
						sx={{
							variant: 'boxes.section',
							pt: [5, 6, null],
							pb: [4, 5, null],
						}}
					>
						<Content
							inverted
							pretitle={data.future.pretitle}
							title={data.future.title}
						/>
						<Box sx={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
							{data.future.list.map(({ li }, i) => (
								<Box
									sx={{
										my: 3,
										position: 'relative',
										ml: [2, 4],
										pr: [1, 0],
										py: 3,
									}}
								>
									<Box
										sx={{
											variant: 'boxes.icon',
											position: ['initial', 'absolute'],
											left: -5,
										}}
									>
										<Icon name={li.icon} />
									</Box>
									<Text
										as="h3"
										key={i}
										sx={{ variant: 'text.l3', my: 2, color: 'black' }}
									>
										{li.title}
									</Text>
									{li.content.split('\n\n').map((paragraph, i) => (
										<Text
											sx={{
												variant: 'text.pLarge',
												color: ['lightBlack', 'grayParagraph'],
											}}
											key={i}
										>
											{paragraph}
										</Text>
									))}
								</Box>
							))}
						</Box>
					</section>
				</div>

				{/* Thank You */}
				<section
					sx={{
						position: 'relative',
						zIndex: 0,
						variant: 'boxes.section',
						mt: [4, 5],
						mb: ['30vh', '40vh'],
						pt: 5,
					}}
					id="thankyou"
				>
					<Content
						pretitle={data.thankYou.pretitle}
						title={data.thankYou.title}
					/>
					<ThankYou
						message={data.thankYou.message.part1.body}
						nextTitle={data.thankYou.message.part2.title}
						nextBody={data.thankYou.message.part2.body}
						authorName={data.thankYou.author.name}
						authorTitle={data.thankYou.author.title}
					/>
					<Juan />
				</section>
				{/* ---------- SUBSCRIBE ----------- */}
				<section
					sx={{
						backgroundColor: 'black',
						pt: [3, 5],
						variant: 'boxes.section',
					}}
					id="subscribe"
				>
					<Content
						pretitle={data.subscribe.pretitle}
						title={data.subscribe.title}
						copy={data.subscribe.subtitle}
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
