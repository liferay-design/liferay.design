import { Container, Text, Heading } from 'components/atoms'
import { CardLexicon, CardHidden, FancyFooter, FormNewsletter } from 'components/molecules'
import { Banner, Footer, ChangelogFeed } from 'components/organisms'
import React from 'react'
import MediaQuery, {useMediaQuery} from 'react-responsive'
import { Grid } from 'reakit'
import blueprints from 'theme/blueprints.module.scss'
import documentation from 'theme/documentation.module.scss'
import styles from './styles.module.scss'
import { colors, spacing } from 'theme'

const Handbook = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' })
	const gridTemplate = `	"a a . . . ." 
                                "a a b b . ." 
                                "a a b b c c" 
                                ". . b b c c" 
                                ". . . . c c" auto / 1fr 1fr 1fr 1fr 1fr 1fr`
	const mobileGridTemplate = `"a" 
                                "b" 
                                "c" auto / 1fr `
	const resourcesGridTemplate = `auto / 1fr 1fr 1fr`
	const mobileResourcesGridTemplate = `"a" 
                                "b" 
                                "c" auto / 1fr `


	return (
		<div
			className={`${blueprints.theme} ${documentation.theme} ${
				styles.handbook
			}`}
		>
			<Banner
				simpleNav
				preTitle="Liferay.Design"
				headline="Handbook"
				subtitle="We, Not Me"
				section="Handbook"
				background="#13141F"
				underlineColor={colors.primary}
				cta="Get Started"
				ctaLink='/handbook/welcome'
			/>
			<div className={styles.wrapper}>
				<Container>
					<Grid
						className={styles.teasers}
						gap="2rem"
						template={
							isTabletOrMobile ? mobileGridTemplate : gridTemplate
						}
					>
						<Grid.Item area="a">
							<CardLexicon
								handbook
								preTitle="First Things First"
								title="Principles"
								text="These principles guide our work, and provide standards for what good design means at Liferay."
								to="/handbook/principles"
							/>
						</Grid.Item>
						<Grid.Item area="b">
							<CardLexicon
								delay="0.1s"
								handbook
								preTitle="Get Things Done"
								title="Work"
								text="Policies, guidelines, and best-practices for creating value in Liferay’s Design Department."
								to="/handbook/work/introduction"
							/>
						</Grid.Item>
						<Grid.Item area="c">
							<CardLexicon
								delay="0.2s"
								handbook
								preTitle="Better Every Day"
								title="Grow"
								text="A core trait of a Liferay Designer is a desire for growth — see what that looks like and how we do it."
								to="/handbook/grow/introduction"
							/>
						</Grid.Item>
					</Grid>
				</Container>
				<Container padding="4rem 0">
					<Grid
						className={styles.resources}
						template={
							isTabletOrMobile
								? mobileResourcesGridTemplate
								: resourcesGridTemplate
						}
						gap="2rem"
					>
						<Grid.Item>
							<CardHidden
								handbook
								icon="lexicon"
								title="Lexicon"
								text="Our Experience Language"
								to="/lexicon"
								cta="Get Started"
							/>
						</Grid.Item>
						<Grid.Item>
							<CardHidden
								handbook
								delay="0.2s"
								icon="whyBlueprints"
								title="Blueprints"
								text="Liferay's Brand Style Guidelines"
								to="/blueprints"
								cta="The Blue Abides"
							/>
						</Grid.Item>
						<Grid.Item>
							<CardHidden
								handbook
								delay=".3s"
								icon="fa_figma"
								title="Figma Resources"
								text="Open Source Design Projects"
								to="/resources/figma"
								cta="Help Us, Help You"
							/>
						</Grid.Item>
						<Grid.Item>
							<CardHidden
								handbook
								delay=".4s"
								icon="faqs"
								title="Help Center"
								text="Design docs for Liferay-ers"
								to="https://help.liferay.design"
								cta="Read the manual"
							/>
						</Grid.Item>
						<Grid.Item>
							<CardHidden
								handbook
								delay=".5s"
								icon="waffle"
								title="Style"
								text="Digital Marketing Styleguide"
								to="https://style.liferay.design"
								cta="Get in Style"
							/>
						</Grid.Item>
						<Grid.Item>
							<CardHidden
								handbook
								delay=".6s"
								icon="fa_terminal"
								title="Dashboard"
								text="A Liferay.Design slideshow"
								to="https://dashboard.liferay.design"
								cta="Sneak a Peek"
							/>
						</Grid.Item>
					</Grid>
				</Container>
				<Container>
					<div className={styles.gagb}>
						<Text
							color="lightGrey"
							weight="inherit"
							className={styles.date}
						>
							Since 2004
						</Text>
						<Heading>
							Growing &amp; <br />
							Getting Better. <br />
							<span>Together.</span>
						</Heading>
					</div>
				</Container>
			</div>
			<Footer light />
			<FancyFooter />
		</div>
	)}

export default Handbook