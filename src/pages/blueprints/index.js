import React from 'react'
import { Link } from 'gatsby'
import { Heading, Text, Icon, Flex } from 'components/atoms'
import { Billboard } from 'components/molecules'
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
			background="primary"
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
						<Link className={styles.cardLink} to="/blueprints/about">
							<Card className={styles.card}>
								<Icon padding="2.5rem 0 .5rem" name="whyBlueprints" />
								<CardTitle
									className={styles.cardTitle}
									title="Why Blueprints"
								/>
								<CardText component="p" className={styles.cardText}>
									A single source of truth for Liferay so that we can go
									far, together.
								</CardText>
								<CardText className={styles.arrow}>
									<Icon
										padding=".5em .75em .25em"
										name="chevronRight"
									/>
									Read More
								</CardText>
							</Card>
						</Link>
					</Grid.Item>
					<Grid.Item area="trc">
						<Link
							className={styles.cardLink}
							to="/blueprints/resources/logo-files"
						>
							<Card className={styles.card}>
								<Icon padding="2.5rem 0 .5rem" name="logos" />
								<CardTitle
									className={styles.cardTitle}
									title="Just the Logos, Please"
								/>
								<CardText component="p" className={styles.cardText}>
									We know what you’re looking for, and we respect that.
									That's why this is at the top of the page.
								</CardText>
								<CardText className={styles.arrow}>
									<Icon
										padding=".5em .75em .25em"
										name="chevronRight"
									/>
									Waffle Time
								</CardText>
							</Card>
						</Link>
					</Grid.Item>
					<Grid.Item area="m">
						<Link className={styles.cardLink} to="/blueprints/resources">
							<WideCard className={styles.card}>
								<Icon padding="3.5rem 6.25rem .5rem" name="resources" />
								<Flex align="flex-start" direction="column">
									<CardTitle
										className={styles.cardTitle}
										title="Resources"
									/>
									<CardText component="p" className={styles.cardText}>
										The reason you've come to this site&mdash;logos,
										colors, fonts, images&mdash;get it all right here!
									</CardText>
									<CardText className={styles.arrow}>
										<Icon
											padding=".5em .75em .25em 0"
											name="chevronRight"
										/>
										Get 'Em
									</CardText>
								</Flex>
							</WideCard>
						</Link>
					</Grid.Item>
					<Grid.Item area="blc">
						<Link className={styles.cardLink} to="/blueprints/faqs">
							<Card className={styles.card}>
								<Icon padding="2.5rem 0 .5rem" name="faqs" />
								<CardTitle className={styles.cardTitle} title="FAQ" />
								<CardText component="p" className={styles.cardText}>
									Have a question? We have frequently given answers.
								</CardText>
								<CardText className={styles.arrow}>
									<Icon
										padding=".5em .75em .25em"
										name="chevronRight"
									/>
									Why is the Liferay Blue
								</CardText>
							</Card>
						</Link>
					</Grid.Item>
					<Grid.Item area="brc">
						<Link className={styles.cardLink} to="/team">
							<Card className={styles.card}>
								<Icon padding="2.5rem 0 .5rem" name="liferayDesign" />
								<CardTitle
									className={styles.cardTitle}
									title="Liferay.Design"
								/>
								<CardText component="p" className={styles.cardText}>
									Shameless plug for the people behind all of this
									stuff&mdash;see what else we're doing.
								</CardText>
								<CardText className={styles.arrow}>
									<Icon
										padding=".5em .75em .25em"
										name="chevronRight"
									/>
									Experience Liferay.Design
								</CardText>
							</Card>
						</Link>
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
			background="/images/home/blueprints-bg.svg"
		/>
		<Footer />
	</div>
)

export default Blueprints
