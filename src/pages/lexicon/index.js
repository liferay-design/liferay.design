import React from 'react'
import { Link } from 'components/atoms'
import { Heading, Text, Icon, Flex } from 'components/atoms'
import { Billboard, CardLexicon } from 'components/molecules'
import { Footer, Navbar, Banner } from 'components/organisms'
import styles from './styles.module.scss'
import { Card, CardTitle, CardText } from 'react-md'
import { Grid, Button, styled } from 'reakit'
import MediaQuery from 'react-responsive'

const WideCard = styled(Card)`
	display: flex;
	text-align: left !important;
`

// const cardGrid = `
// 	"tlg tlc trc rg" auto
// 	"lg m m rg" auto
// 	"lg blc brc brg" auto / 3rem 5fr 5fr 3rem
// `

const Lexicon = () => (
	<div className={styles.sans}>
		<Banner
			headline="Lexicon"
			subtitle="An Experience Language for Crafting Beautiful UI"
			cta="Get Started"
			ctaLink="/lexicon/get-started"
			section="Lexicon"
			background="linear-gradient(20deg, rgba(11, 95, 255, 0.4), rgba(11, 95, 255, 0.6)), url(/images/lexicon/home/patternbg.svg) center -6rem / cover fixed, #0B5FFF"
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
										Explore Lexicon
									</Text>
								</Grid.Item>
								<Grid.Item area="tlc" marginTop="-8rem">
									<CardLexicon
										icon="what"
										title="Get Started"
										text="An onboarding section as an introduction to the project, its objectives and proposals"
										to="/lexicon/get-started"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="trc" marginTop="-8rem">
									<CardLexicon
										icon="principles02"
										title="Foundations"
										text="The basic principles and guidelines that lay on the core of the pattern libray."
										to="/lexicon/foundations"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="m">
									<CardLexicon
										wide
										icon="library03"
										iconHeight="10rem"
										iconWidth="11rem"
										direction="horizontal"
										title="Components"
										text="Explores the list of components and pattern that configure the building blocks of Lexicon system"
										to="/lexicon/core-components"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="blc">
									<CardLexicon
										icon="news"
										title="News & Updates"
										text="Always up to date with the latest library updates and Lexicon project news"
										to="/lexicon/news/news"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="brc">
									<CardLexicon
										icon="folder"
										title="Resources"
										text="A set of tools links and downloads to learn Lexicon and use it in your projects"
										to="/lexicon/resources"
										cta="Learn More"
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
										to="https://twitter.com/Liferay_Lexicon"
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
				image="participate02"
				heading="Want to contribute?"
				Subtitle={() => (
					<Text size="large">
						Head on over to the{' '}
						<a
							href="https://github.com/liferay-design/lexicon/issues"
							target="_blank"
							rel="noopener"
						>
							GitHub repo
						</a>
						!
					</Text>
				)}
				background="linear-gradient(20deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)), url(/images/lexicon/home/patternbg.svg) center/cover fixed, #FFFFFF"
			/>
		</div>
		<Footer />
	</div>
)

export default Lexicon
