import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { Footer, Navbar, Banner } from 'components/organisms'
import { LexiconCard } from 'components/molecules'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const HandbookNA = () => (
		<div className={styles.body}>
			<Banner
				headline="Handbook"
				subtitle="For UX Design in North America"
				cta="Get Started"
				ctaLink="/handbook/na/onboarding"
				section="Handbook"
				background="url(/images/handbook/na/ux-na.svg) center / cover fixed"
			/>
			<div className={styles.container}>
				<Grid className={styles.teasers} gap="2rem">
					<Grid.Item marginTop="-4rem">
						<LexiconCard
							dark
							icon="whyBlueprints"
							title="Onboarding"
							text="Your first few days won't be boring, we guarantee that!"
							to="/handbook/na/onboarding/first-week"
							cta="Welcome Aboard!"
						/>
					</Grid.Item>
					<Grid.Item marginTop="-4rem">
						<LexiconCard
							dark
							icon="liferayDesign"
							title="Tools"
							text="If we have 8 hours to design an interface, the first 6 will be spent creating the grid."
							to="/handbook/na/tools/design"
							cta="Sharpen the Axe"
						/>
					</Grid.Item>
					<Grid.Item marginTop="-4rem">
						<LexiconCard
							dark
							icon="faqs"
							title="Processes"
							text="We don't have any 7' Cameroonians on the team yet, but we're always hiring."
							to="/handbook/na/processes/rotisserie/kitchen-prep"
							cta="#TrustTheProcess"
						/>
					</Grid.Item>
				</Grid>
			</div>
			<Footer />
		</div>
	)

export default HandbookNA