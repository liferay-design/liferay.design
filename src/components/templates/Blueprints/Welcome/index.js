/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import { Icon, Link, Text } from 'components/atoms'
import { Billboard, CardLexicon } from 'components/molecules'
import { Banner, Footer } from 'components/organisms'
import blueprints from 'theme/blueprints.module.scss'
import documentation from 'theme/documentation.module.scss'
import { Helmet } from 'react-helmet'

const Blueprints = () => (
	<Box
		className={`${blueprints.theme} ${documentation.theme}`}
		sx={{ backgroundColor: 'background' }}
	>
		<Helmet>
			<title>Blueprints | Brand Guidelines for Liferay</title>
		</Helmet>
		<Banner
			headline="Blueprints"
			subtitle="Brand Guidelines for Liferay"
			cta="Get Started"
			ctaLink="/blueprints/principles"
			section="Blueprints"
			background="linear-gradient(20deg, rgba(11, 99, 206, 0.4), rgba(11, 99, 206, 0.6)), url(/images/home/blueprints-bg.svg) center -6rem / cover fixed, #0b63ff"
			underlineColor="#134194"
			simpleNav
		/>
		<Box sx={{ backgroundColor: 'white' }}>
			<Box className={documentation.container}>
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
						className={blueprints.vertical}
					>
						Explore Blueprints
					</Text>
					<Box sx={{ mt: [0, null, '-8rem'] }}>
						<CardLexicon
							icon="whyBlueprints"
							title="Why Blueprints"
							text="A single source of truth for Liferay so that we can go
										far, together."
							to="/blueprints/about"
							cta="Read More"
						/>
					</Box>
					<Box sx={{ mt: [0, null, '-8rem'] }}>
						<CardLexicon
							delay="0.1s"
							icon="logos"
							title="Just the Logos, Please"
							text="We know what you’re looking for, and we respect that.
									Here it is at the top of the page."
							to="/blueprints/resources/logo-files"
							cta="Waffle Time"
						/>
					</Box>
					<Box sx={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
						<CardLexicon
							delay="0.2s"
							wide
							icon="resources"
							iconHeight="10rem"
							iconWidth="11rem"
							direction="horizontal"
							title="Resources"
							text="The reason you've come to this site&mdash;logos,
											colors, fonts, images&mdash;get it all right&nbsp;here!"
							to="/blueprints/resources"
							cta="Get 'Em"
						/>
					</Box>
					<Box>
						<CardLexicon
							delay=".4s"
							icon="faqs"
							title="FAQ"
							text="Have a question? We have frequently given answers."
							to="/blueprints/faqs"
							cta="Why is the Liferay Blue?"
						/>
					</Box>
					<Box>
						<CardLexicon
							icon="liferayDesign"
							title="Liferay.Design"
							text="Shameless plug for the people behind all of this
										stuff&mdash;see what else we're doing."
							to="/team"
							cta="Experience Liferay.Design"
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
							to="https://twitter.com/liferaydesign"
						>
							<Icon sx={{ fill: 'white' }} name="twitter" />
						</Link>
					</Box>
				</Grid>
			</Box>
		</Box>
		<Billboard
			image="jira"
			heading="Need something?"
			Subtitle={() => (
				<Text size="large">
					Cache us in Slack &mdash;{' '}
					<Link to="https://liferay.slack.com/archives/CKETJ1DTR">
						#d-comm-des
					</Link>{' '}
					or{' '}
					<Link to="https://issues.liferay.com/secure/CreateIssueDetails!init.jspa?pid=10780&issuetype=17">
						create a Jira ticket
					</Link>
					!
				</Text>
			)}
			background="linear-gradient(20deg, rgba(232, 232, 233, 0.9), rgba(247, 248, 249, 0.9)), url('/images/home/blueprints-bg.svg') center/cover fixed"
		/>
		<Footer />
	</Box>
)

export default Blueprints
