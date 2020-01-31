import { Container, Text, Heading, CardGrid } from 'components/atoms'
import { CardLexicon, CardHidden, SEO } from 'components/molecules'
import { Navbar } from 'components/organisms'
import React from 'react'
import blueprints from 'theme/blueprints.module.scss'
import documentation from 'theme/documentation.module.scss'
import styles from './styles.module.scss'

export const Handbook = () => {
	return (
		<div className={`${blueprints.theme} ${documentation.theme} ${styles.handbook}`}>
			<SEO
				description="The open source handbook for Liferay's Design Department"
				pageTitle="Liferay.Design | Handbook"
			/>
			<div className={styles.wrapper}>
				<Navbar simpleNav white />
				<Container>
					<div className={styles.gagb}>
						<Text color="grey" weight="inherit" className={styles.date}>
							Since 2004
						</Text>
						<Heading color='white'>
							Growing &amp; Getting&nbsp;Better. <br />
							<span>Together.</span>
						</Heading>
					</div>
					<CardGrid gap="3rem">
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
							to="/handbook/work/introduction"
						/>
						<CardLexicon
							delay="0.2s"
							handbook
							preTitle="Better Every Day"
							title="Grow"
							text="A core trait of a Liferay Designer is a desire for growth — see what that looks like and how we do it."
							to="/handbook/grow/introduction"
						/>
					</CardGrid>
				</Container>
				<Container padding="4rem 0">
					<CardGrid gap="3.2rem 3rem">
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
							delay=".4s"
							icon="faqs"
							title="Help Center"
							text="Design docs for Liferay-ers"
							to="https://help.liferay.design"
							cta="Read the manual"
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
					</CardGrid>
				</Container>
			</div>
		</div>
	)
}

export default Handbook
