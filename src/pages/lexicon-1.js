/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import { Container, Icon, Link, Text } from 'components/atoms'
import { Billboard, CardLexicon } from 'components/molecules'
import { Banner, Footer } from 'components/organisms'
import lexicon from 'theme/lexicon.module.scss'
import documentation from 'theme/documentation.module.scss'

const Lexicon = () => (
	<div className={`${lexicon.theme} ${documentation.theme}`}>
		<Banner
			headline="Lexicon 1"
			subtitle="A consistent design system to help you build beautiful web apps easily"
			cta="Get Started"
			ctaLink="/lexicon-1/get-started"
			section="Lexicon 1"
			background="url(/images/lexicon/home/pattern-bg-black.svg) center fixed, #000"
			underlineColor="#c96678"
		/>
		<div className={documentation.background}>
			<div className={documentation.container}>
				<Grid
					className={documentation.teasers}
					sx={{
						variant: 'grids.landingPage',
					}}
				>
					<Box sx={{ gridArea: 'tlg', mt: [0, null, '-8rem'] }}>
						<Text
							color="#c4cacb"
							weight="600"
							size="12px"
							type="p"
							className={lexicon.vertical}
						>
							Explore Lexicon
						</Text>
					</Box>
					<Box sx={{ gridArea: 'tlc', mt: [0, null, '-8rem'] }}>
						<CardLexicon
							icon="whatBlack"
							title="Get Started"
							text="A consistent design system to help you build beautiful web apps easily"
							to="/lexicon-1/get-started"
							cta="Learn More"
						/>
					</Box>
					<Box sx={{ gridArea: 'trc', mt: [0, null, '-8rem'] }}>
						<CardLexicon
							delay="0.4s"
							icon="principlesBlack"
							title="Patterns"
							text="The basic principles and guidelines that lay on the core of the pattern libray."
							to="/lexicon-1/patterns/alerts"
							cta="Learn More"
						/>
					</Box>
					<Box
						sx={{ gridArea: 'brg', mt: '2rem' }}
						className={documentation.socialContainer}
					>
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
			image="participateBlack"
			heading="Want to contribute?"
			Subtitle={() => (
				<Text size="large">
					Head on over to the{' '}
					<Link to="https://github.com/liferay-design/lexicon/issues">
						GitHub repo
					</Link>
					!
				</Text>
			)}
			background="url(/images/lexicon/home/patternbg-white.svg) center / 100% fixed, #f7f7f9"
		/>
		<Container>
			<Grid className={documentation.clayCard}>
				<Box columnStart="3" columnEnd="7">
					<CardLexicon
						dark
						icon="clay"
						title="Lexicon CSS"
						text="A web implementation of the Lexicon Design System."
						to="https://liferay.github.io/lexiconcss/"
						cta="Visit Lexicon CSS"
					/>
				</Box>
			</Grid>
		</Container>
		<Footer />
	</div>
)

export default Lexicon
