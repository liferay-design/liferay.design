import React from 'react'
import { Link } from 'gatsby'
import { Heading, Text, Icon, Flex } from 'components/atoms'
import { Billboard, LexiconCard } from 'components/molecules'
import { Footer, Navbar } from 'components/organisms'
import styles from './styles.module.scss'
import { Card, CardTitle, CardText } from 'react-md'
import { Grid, Button, styled } from 'reakit'

const WideCard = styled(Card)`
	display: flex;
	text-align: left !important;
`

const cardGrid = `
	"tlg tlc trc rg" auto
	"lg m m rg" auto
	"lg blc brc brg" auto / 3rem 5fr 5fr 3rem
`

const Blueprints = () => (
	<div className={styles.sans}>
		<Flex
			className={styles.banner}
			width="100vw"
			height="108vh"
			direction="column"
			align="center"
		>
			<Navbar white section="Blueprints" />
			<div className={styles.bannerContent}>
				<Heading color="white" level={1}>
					Blueprints
				</Heading>
				<Heading color="white" level={2}>
					Brand Guidelines For Liferay
				</Heading>
				<Link to="/blueprints/principles">
					<Button className={styles.button}>Get Started</Button>
				</Link>
			</div>
		</Flex>
		<div className={styles.background}>
			<div className={styles.container}>
				<Grid className={styles.teasers} gap="2rem" template={cardGrid}>
					<Grid.Item area="tlg">
						<Text
							color="#c4cacb"
							weight="700"
							size="12px"
							type="p"
							className={styles.vertical}
						>
							Explore Blueprints
						</Text>
					</Grid.Item>
					<Grid.Item area="tlc">
						<LexiconCard
							icon="whyBlueprints"
							title="Why Blueprints"
							text="A single source of truth for Liferay so that we can go
									far, together."
							to="/blueprints/about"
							cta="Read More"
						/>
					</Grid.Item>
					<Grid.Item area="trc">
						<LexiconCard
							icon="logos"
							title="Just the Logos, Please"
							text="We know what you’re looking for, and we respect that.
								That's why this is at the top of the page."
							to="/blueprints/resources/logo-files"
							cta="Waffle Time"
						/>
					</Grid.Item>
					<Grid.Item area="m">
						<LexiconCard
							icon="resources"
							iconHeight="10rem"
							iconWidth="11rem"
							title="Resources"
							text="The reason you've come to this site&mdash;logos,
										colors, fonts, images&mdash;get it all right here!"
							to="/blueprints/resources"
							cta="Get 'Em"
							direction="horizontal"
						/>
					</Grid.Item>
					<Grid.Item area="blc">
						<LexiconCard
							icon="faqs"
							title="FAQ"
							text="Have a question? We have frequently given answers."
							to="/blueprints/faqs"
							cta="Why is the Liferay Blue"
							direction="vertical"
						/>
					</Grid.Item>
					<Grid.Item area="brc">
						<LexiconCard
							icon="liferayDesign"
							title="Liferay.Design"
							text="Shameless plug for the people behind all of this
									stuff&mdash;see what else we're doing."
							to="/team"
							cta="Experience Liferay.Design"
							direction="vertical"
						/>
					</Grid.Item>
					<Grid.Item area="brg">
						<Link
							className={styles.social}
							to="https://github.com/liferay-design"
						>
							<Icon fill="white" name="github" />
						</Link>
						<Link className={styles.social} to="https://dribbble.com/liferay">
							<Icon fill="white" name="dribbble" />
						</Link>
						<Link
							className={styles.social}
							to="https://twitter.com/liferaydesign"
						>
							<Icon fill="white" name="twitter" />
						</Link>
					</Grid.Item>
				</Grid>
			</div>
		</div>
		<div className={styles.billboard}>
			<Billboard
				image="jira"
				heading="Need something?"
				Subtitle={() => (
					<Text size="large">
						Head over to Jira and{' '}
						<a
							href="https://issues.liferay.com/secure/CreateIssueDetails!init.jspa?pid=10780&issuetype=17"
							target="_blank"
						>
							create an issue
						</a>
						!
					</Text>
				)}
				background="linear-gradient(20deg, rgba(232, 232, 233, 0.9), rgba(247, 248, 249, 0.9)), url(/images/home/blueprints-bg.svg)"
			/>
		</div>
		<Footer />
	</div>
)

export default Blueprints
