import React from 'react'
import { Link } from 'gatsby'
import { Heading, Text, Icon, Flex } from 'components/atoms'
import { Billboard } from 'components/molecules'
import { Footer, Navbar } from 'components/organisms'
import styles from './styles.module.scss'
import { Grid, Cell, Card, CardTitle, CardText, } from 'react-md'
import { Button, styled } from 'reakit'

const WideCard = styled(Card) `
	display: flex;
	text-align: left !important;
`

const Blueprints = () => (
		<div className={styles.sans}>
			<Flex className={styles.banner} background="primary" width="100vw" height="108vh" direction="column" align="center">
				<Navbar white section="Blueprints" />
				<div className={styles.bannerContent}>
					<Heading color="white" level={1}>Blueprints</Heading>
					<Heading color="white" level={2}>Brand Guidelines For Liferay</Heading>
					<Link to="/blueprints/principles"><Button className={styles.button}>Get Started</Button></Link>
				</div>
			</Flex>
			<div className={styles.background}>
				<div className={styles.container}>
					<Grid className={styles.teasers}>
						<Cell size={1}>
							<Text color="#c4cacb" weight="700" size="12px" type="p" className={styles.vertical}>Explore Blueprints</Text>
						</Cell>
						<Cell size={5}>
							<Link className={styles.cardLink} to="/blueprints/about">
								<Card className={styles.card}>
									<Icon padding="2.5rem 0 .5rem" name="why-blueprints" />
									<CardTitle className={styles.cardTitle} title="Why Blueprints"/>
									<CardText component="p" className={styles.cardText}>A single source of truth for Liferay so that we can go far, together.</CardText>
									<CardText className={styles.arrow}><Icon padding=".5em .75em .25em" name="chevron-right"/>Read More</CardText>
								</Card>
							</Link>
						</Cell>
						<Cell size={5}>
						<Link className={styles.cardLink} to="/blueprints/resources/logo-files">
								<Card className={styles.card}>
									<Icon padding="2.5rem 0 .5rem" name="logos" />
									<CardTitle className={styles.cardTitle} title="Just the Logos, Please"/>
									<CardText component="p" className={styles.cardText}>We know what you’re looking for, and we respect that. That's why this is at the top of the page.</CardText>
									<CardText className={styles.arrow}><Icon padding=".5em .75em .25em" name="chevron-right"/>Waffle Time</CardText>
								</Card>
							</Link>
						</Cell>
					</Grid>
					<Grid>
						<Cell offset={1} size={10}>
							<Link className={styles.cardLink} to="/blueprints/resources">
								<WideCard className={styles.card}>
									<Icon padding="3.5rem 6.25rem .5rem" name="resources" />
									<Flex align="flex-start" direction="column">
										<CardTitle className={styles.cardTitle} title="Resources"/>
										<CardText component="p" className={styles.cardText}>The reason you've come to this site&mdash;logos, colors, fonts, images&mdash;get it all right here!</CardText>
										<CardText className={styles.arrow}><Icon padding=".5em .75em .25em 0" name="chevron-right"/>Get 'Em</CardText>
									</Flex>
								</WideCard>
							</Link>
						</Cell>
					</Grid>
					<Grid>
						<Cell offset={1} size={5}>
							<Link className={styles.cardLink} to="/blueprints/faqs">
								<Card className={styles.card}>
									<Icon padding="2.5rem 0 .5rem" name="faqs" />
									<CardTitle className={styles.cardTitle} title="FAQ"/>
									<CardText component="p" className={styles.cardText}>Have a question? We have frequently given answers.</CardText>
									<CardText className={styles.arrow}><Icon padding=".5em .75em .25em" name="chevron-right"/>Why is the Liferay Blue</CardText>
								</Card>
							</Link>
						</Cell>
						<Cell size={5}>
							<Link className={styles.cardLink} to="/team">
								<Card className={styles.card}>
									<Icon padding="2.5rem 0 .5rem" name="liferay-design" />
									<CardTitle className={styles.cardTitle} title="Liferay.Design"/>
									<CardText component="p" className={styles.cardText}>Shameless plug for the people behind all of this stuff&mdash;see what else we're doing.</CardText>
									<CardText className={styles.arrow}><Icon padding=".5em .75em .25em" name="chevron-right"/>Experience Liferay.Design</CardText>
								</Card>
							</Link>
						</Cell>
						<Cell size={1}>
							<Link className={styles.social} to="https://github.com/liferay-design"><Icon fill="white" name="github" /></Link>
							<Link className={styles.social} to="https://dribbble.com/liferay"><Icon fill="white" name="dribbble" /></Link>
							<Link className={styles.social} to="https://twitter.com/liferaydesign"><Icon fill="white" name="twitter" /></Link>
						</Cell>
					</Grid>
				</div>
			</div>
			<Billboard 
				image='jira'
				heading='Need something?'
				Subtitle={() => <Text size="large">Head over to Jira and <a href="https://issues.liferay.com/secure/CreateIssueDetails!init.jspa?pid=10780&issuetype=17" target="_blank">create an issue</a>!</Text>}
				background='/images/home/blueprints-bg.svg'
				/>
			<Footer />
		</div>
	)

	export default Blueprints