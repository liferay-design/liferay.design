/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { Container, Text, Heading, Link, Icon } from 'components/atoms'
import { CardLexicon, CardHidden, SEO, FormNewsletter } from 'components/molecules'
import { Navbar } from 'components/organisms'
import blueprints from 'theme/blueprints.module.scss'
import documentation from 'theme/documentation.module.scss'
import styles from './styles.module.scss'
import { colors } from 'theme'

export const Handbook = () => {
	return (
		<div className={`${blueprints.theme} ${documentation.theme} ${styles.handbook}`}>
			<SEO
				description="The open source handbook for Liferay's Design Department"
				pageTitle="Liferay.Design | Handbook"
			/>
			<div className={styles.wrapper}>
				<Navbar simpleNav white />
				<Container padding="2rem 0">
					<div className={styles.gagb}>
						<Text color="grey" weight="inherit" className={styles.date}>
							Since 2004
						</Text>
						<Heading sx={{ color: 'white' }}>
							Growing &amp; Getting&nbsp;Better. <br />
							<span>Together.</span>
						</Heading>
					</div>
					<Grid sx={{ variant: 'grids.threeCards', gap: '3rem' }}>
						<CardLexicon
							handbook
							preTitle="First Things First"
							title="Principles"
							text="These principles guide our work, and provide standards for what good design means at Liferay."
							to="/handbook/principles"
						/>
						<CardLexicon
							delay="0.1s"
							handbook
							preTitle="Get Things Done"
							title="Work"
							text="Policies, guidelines, and best-practices for creating value in Liferay’s Design Department."
							to="/handbook/work"
						/>
						<CardLexicon
							delay="0.2s"
							handbook
							preTitle="Better Every Day"
							title="Grow"
							text="A core trait of a Liferay Designer is a desire for growth — see what that looks like and how we do it."
							to="/handbook/grow"
						/>
					</Grid>
				</Container>
				<Container padding="4rem 0">
					<Grid sx={{ variant: 'grids.threeCards', gap: '3.2rem 3rem' }}>
						<CardHidden
							handbook
							icon="lexicon"
							title="Lexicon"
							text="Our Experience Language"
							to="/lexicon"
							cta="Get Started"
						/>
						<CardHidden
							handbook
							delay="0.2s"
							icon="whyBlueprints"
							title="Blueprints"
							text="Liferay's Brand Style Guidelines"
							to="/blueprints"
							cta="The Blue Abides"
						/>
						<CardHidden
							handbook
							delay=".3s"
							icon="fa_figma"
							title="Figma Resources"
							text="Open Source Design Projects"
							to="/resources/figma"
							cta="Help Us, Help You"
						/>
						<CardHidden
							handbook
							delay=".5s"
							icon="waffle"
							title="Style"
							text="Digital Marketing Styleguide"
							to="https://style.liferay.design"
							cta="Get in Style"
						/>
						<CardHidden
							handbook
							delay=".6s"
							icon="fa_terminal"
							title="Dashboard"
							text="A Liferay.Design slideshow"
							to="https://dashboard.liferay.design"
							cta="Sneak a Peek"
						/>
					</Grid>
				</Container>
			</div>
			<Container background={colors.main} padding={{ py: '5' }}>
				<Heading sx={{ textAlign: 'center', color: 'white' }} level={2}>
					Sign up for our monthly newsletter!
				</Heading>
				<Link to="/newsletter">
					<Text align="center" color="lightGrey" margin="base">
						Read past issues
						<Icon
							sx={{ fill: 'lightGrey', margin: '.2em 0 0 1em' }}
							name="rightArrow"
						/>
					</Text>
				</Link>
				<FormNewsletter
					placeholderText="Your Email Address"
					submitText="Subscribe"
				/>
			</Container>
		</div>
	)
}

export default Handbook
