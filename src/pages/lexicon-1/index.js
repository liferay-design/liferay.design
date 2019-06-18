import { Container, Icon, Link, Text } from 'components/atoms'
import { Billboard, CardLexicon } from 'components/molecules'
import { Banner, Footer } from 'components/organisms'
import React from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const Lexicon = () => (
	<div className={styles.lexicon}>
		<Banner
			headline="Lexicon 1"
			subtitle="A consistent design system to help you build beautiful web apps easily"
			cta="Get Started"
			ctaLink="/lexicon-1/get-started"
			section="Lexicon 1"
			background="url(/images/lexicon/home/pattern-bg-black.svg) center fixed, #000"
			underlineColor="#c96678"
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
										weight="600"
										size="12px"
										type="p"
										className={styles.vertical}
									>
										Explore Lexicon
									</Text>
								</Grid.Item>
								<Grid.Item area="tlc" marginTop="-8rem">
									<CardLexicon
										icon="whatBlack"
										title="Get Started"
										text="A consistent design system to help you build beautiful web apps easily"
										to="/lexicon-1/get-started"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="trc" marginTop="-8rem">
									<CardLexicon
										icon="principlesBlack"
										title="Patterns"
										text="The basic principles and guidelines that lay on the core of the pattern libray."
										to="/lexicon-1/patterns/alerts"
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
				image="participateBlack"
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
				background="url(/images/lexicon/home/patternbg-white.svg) center / 100% fixed, #f7f7f9"
			/>
		</div>
		<Container>
			<Grid className={styles.clayCard}>
				<Grid.Item columnStart="3" columnEnd="7">
					<CardLexicon
						dark
						icon="clay"
						title="Lexicon CSS"
						text="A web implementation of the Lexicon Design System."
						to="https://liferay.github.io/lexiconcss/"
						cta="Visit Lexicon CSS"
					/>
				</Grid.Item>
			</Grid>
		</Container>
		<Footer />
	</div>
)

export default Lexicon
