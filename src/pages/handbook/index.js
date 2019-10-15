import { Container, Icon, Link, Text } from 'components/atoms'
import { Billboard, CardLexicon } from 'components/molecules'
import { Banner, Footer } from 'components/organisms'
import React from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import blueprints from 'theme/blueprints.module.scss'
import documentation from 'theme/documentation.module.scss'
import { colors } from 'theme'

const Lexicon = () => (
	<div className={`${blueprints.theme} ${documentation.theme}`}>
		<Banner
			textLeft
			headline="Welcome!"
			subtitle="How to be a good designer and do other things good too."
			section="Handbook"
			background="#13141F url(/images/theme/handbook-header.svg) top right/cover no-repeat"
			underlineColor={colors.primary}
		/>
		<div className={documentation.background}>
			<div className={documentation.container}>
				<MediaQuery maxWidth={767}>
					{matches => {
						let gridTemplate = matches
							? `	"tlg" auto // first is mobile
								"tlc" auto
								"m" auto
								"blc" auto
								"brc" auto / auto-fit, minmax(200px, 1fr)`
                            : `	"a a . . . ." 
                                "a a b b . ." 
                                "a a b b c c" 
                                ". . b b c c" 
                                ". . . . c c" 
                                "d d d e e e"`
						return (
							<Grid
								className={documentation.teasers}
								gap="2rem"
								template={gridTemplate}
							>
								<Grid.Item area="a" marginTop="-8rem">
									<CardLexicon
										icon="what"
										title="Get Started"
										text="An onboarding section as an introduction to the project, its objectives and proposals"
										to="/lexicon/get-started"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="b" marginTop="-8rem">
									<CardLexicon
										icon="what"
										title="Get Started"
										text="An onboarding section as an introduction to the project, its objectives and proposals"
										to="/lexicon/get-started"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="c" marginTop="-8rem">
									<CardLexicon
										icon="principles"
										title="Foundations"
										text="The basic principles and guidelines that lay on the core of the pattern libray."
										to="/lexicon/foundations/grid"
										cta="Learn More"
									/>
								</Grid.Item>
								<Grid.Item area="d">
									<div>new? start here</div>>
								</Grid.Item>
								<Grid.Item area="e">
									<div>update feed</div>
								</Grid.Item>
							</Grid>
						)
					}}
				</MediaQuery>
			</div>
		</div>
		<Billboard
			image="participate"
			heading="Want to contribute?"
			Subtitle={() => (
				<Text size="large">
					Check out some issues in{' '}
					<Link
						href="https://github.com/liferay-design/liferay.design/labels/lexicon"
						target="_blank"
						rel="noopener"
					>
						GitHub
					</Link>
					!
				</Text>
			)}
			background="url(/images/lexicon/home/patternbg-white.svg) center / 100% fixed, #f7f7f9"
		/>
		<section className={blueprints.claySection}>
			<Container>
				<Grid className={blueprints.clayCard}>
					<Grid.Item columnStart="3" columnEnd="7">
						<CardLexicon
							dark
							icon="clay"
							title="Clay"
							text="A web implementation of the Lexicon Design System."
							to="https://clayui.com"
							cta="Visit Clay"
						/>
					</Grid.Item>
				</Grid>
			</Container>
		</section>
		<Footer background="#30313f" />
	</div>
)

export default Lexicon
