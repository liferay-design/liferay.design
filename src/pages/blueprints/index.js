import { Icon, Link, Text } from 'components/atoms'
import { Billboard, CardLexicon } from 'components/molecules'
import { Banner, Footer } from 'components/organisms'
import React from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const Blueprints = () => (
	<div className={styles.sans}>
		<Banner
			headline="Blueprints"
			subtitle="Brand Guidelines for Liferay"
			cta="Get Started"
			ctaLink="/blueprints/principles"
			section="Blueprints"
			background="linear-gradient(20deg, rgba(11, 99, 206, 0.4), rgba(11, 99, 206, 0.6)), url(/images/home/blueprints-bg.svg) center -6rem / cover fixed, #0b63ff"
		/>
		<div className={styles.background}>
			<div className={styles.container}>
				<MediaQuery maxWidth={767}>
					{matches => {
						let gridTemplate = matches
							? `	"tlg" auto // first is mobile
								"tlc" auto
								"m" auto
								"blc" auto
								"brc" auto / auto-fit, minmax(200px, 1fr)`
							: `	"tlg tlc trc rg" auto
								"lg m m rg" auto
								"lg blc brc brg" auto / 1rem 5fr 5fr 1rem`
						return (
							<Grid
								className={styles.teasers}
								gap="2rem"
								template={gridTemplate}
							>
								<Grid.Item area="tlg" marginTop="-8rem">
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
								<Grid.Item area="tlc" marginTop="-8rem">
									<CardLexicon
										icon="whyBlueprints"
										title="Why Blueprints"
										text="A single source of truth for Liferay so that we can go
										far, together."
										to="/blueprints/about"
										cta="Read More"
									/>
								</Grid.Item>
								<Grid.Item area="trc" marginTop="-8rem">
									<CardLexicon
										icon="logos"
										title="Just the Logos, Please"
										text="We know what you’re looking for, and we respect that.
									Here it is at the top of the page."
										to="/blueprints/resources/logo-files"
										cta="Waffle Time"
									/>
								</Grid.Item>
								<Grid.Item area="m">
									<CardLexicon
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
								</Grid.Item>
								<Grid.Item area="blc">
									<CardLexicon
										icon="faqs"
										title="FAQ"
										text="Have a question? We have frequently given answers."
										to="/blueprints/faqs"
										cta="Why is the Liferay Blue?"
									/>
								</Grid.Item>
								<Grid.Item area="brc">
									<CardLexicon
										icon="liferayDesign"
										title="Liferay.Design"
										text="Shameless plug for the people behind all of this
										stuff&mdash;see what else we're doing."
										to="/team"
										cta="Experience Liferay.Design"
									/>
								</Grid.Item>
								<Grid.Item area="brg" marginTop="2rem">
									<Link
										className={styles.social}
										to="https://github.com/liferay-design"
									>
										<Icon fill="white" name="github" />
									</Link>
									<Link
										className={styles.social}
										to="https://dribbble.com/liferay"
									>
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
						)
					}}
				</MediaQuery>
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
							rel="noopener"
						>
							create an issue
						</a>
						!
					</Text>
				)}
				background="linear-gradient(20deg, rgba(232, 232, 233, 0.9), rgba(247, 248, 249, 0.9)), url(/images/home/blueprints-bg.svg) center/cover fixed"
			/>
		</div>
		<Footer />
	</div>
)

export default Blueprints
