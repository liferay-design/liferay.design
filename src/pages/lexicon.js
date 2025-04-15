/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import { Container, Icon, Link, Text } from 'components/atoms'
import { Billboard, CardLexicon, SEO } from 'components/molecules'
import { Banner, Footer } from 'components/organisms'
import lexicon from 'theme/lexicon.module.scss'
import documentation from 'theme/documentation.module.scss'

const Lexicon = () => (
	<div className={`${lexicon.theme} ${documentation.theme}`}>
		<SEO
			description="Lexicon is a design language that provides a common framework for building interfaces within the Liferay product ecosystem."
			pageTitle="Liferay Lexicon | An Experience Language for Crafting Beautiful UI"
		/>
		<Banner
			headline="Lexicon"
			subtitle="An Experience Language for Crafting Beautiful UI"
			cta="Get Started"
			ctaLink="/lexicon/get-started"
			section="Lexicon"
			background="url(/images/lexicon/home/patternbg.svg) center fixed, #0B5FFF"
			underlineColor="#5fe5c1"
		/>
		<div className={documentation.background}>
			<div className={documentation.container}>
				<Grid
					className={documentation.teasers}
					sx={{
						variant: 'grids.landingPage',
					}}
				>
					<Text
						color="#c4cacb"
						weight="700"
						size="12px"
						type="p"
						className={lexicon.vertical}
					>
						Explore Lexicon
					</Text>
					<Box sx={{ marginTop: [0, null, '-8rem'] }}>
						<CardLexicon
							icon="what"
							title="Get Started"
							text="An onboarding section as an introduction to the project, its objectives and proposals"
							to="/lexicon/get-started"
							cta="Learn More"
						/>
					</Box>
					<Box sx={{ marginTop: [0, null, '-8rem'] }}>
						<CardLexicon
							delay="0.1s"
							icon="principles"
							title="Foundations"
							text="The basic principles and guidelines that lay on the core of the pattern libray."
							to="/lexicon/foundations/grid"
							cta="Learn More"
						/>
					</Box>
					<Box>
						<CardLexicon
							delay="0.2s"
							icon="library"
							title="Components"
							text="Explores the list of components and pattern that configure the building blocks of Lexicon system"
							to="/lexicon/core-components/alerts"
							cta="Learn More"
						/>
					</Box>
					{/* <Box>
						<CardLexicon
							icon="news"
							title="News & Updates"
							text="Always up to date with the latest library updates and Lexicon project news"
							to="/lexicon/news"
							cta="Learn More"
						/>
					</Box> */}
					<Box>
						<CardLexicon
							icon="folder"
							title="Resources"
							text="A set of tools links and downloads to learn Lexicon and use it in your projects"
							to="/lexicon/resources"
							cta="Learn More"
						/>
					</Box>
					<Box className={documentation.socialContainer}>
						<Link
							className={documentation.social}
							to="https://github.com/liferay-design"
						>
							<Icon sx={{ fill: 'white' }} name="github" />
						</Link>
						<Link
							className={documentation.social}
							to="https://dribbble.com/liferay"
						>
							<Icon sx={{ fill: 'white' }} name="dribbble" />
						</Link>
						<Link
							className={documentation.social}
							to="https://twitter.com/Liferay_Lexicon"
						>
							<Icon sx={{ fill: 'white' }} name="twitter" />
						</Link>
					</Box>
				</Grid>
			</div>
		</div>
		<Billboard
			image="participate"
			heading="Want to contribute?"
			Subtitle={() => (
				<Text size="large">
					Check out some issues in{' '}
					<Link to="https://github.com/liferay-design/liferay.design/labels/lexicon">
						GitHub
					</Link>
					!
				</Text>
			)}
			background="url(/images/lexicon/home/patternbg-white.svg) center / 100% fixed, #f7f7f9"
		/>
		<section className={lexicon.claySection}>
			<Container>
				<CardLexicon
					className={lexicon.clayCard}
					dark
					icon="clay"
					title="Clay"
					text="A web implementation of the Lexicon Design System."
					to="https://clayui.com"
					cta="Visit Clay"
				/>
			</Container>
		</section>
		<Footer background="#30313f" />
	</div>
)

export default Lexicon
