import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { Footer, Navbar, Banner } from 'components/organisms'
import { LexiconCard } from 'components/molecules'
import { Container } from 'components/atoms'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const HandbookGuild = () => (
	<div className={styles.body}>
		<Banner
			headline="Handbook"
			subtitle="For the UX Design Guild"
			cta="Get Started"
			ctaLink="/handbook/overview"
			section="Handbook"
			background="url(/images/handbook/guild/ux-guild.svg) center / cover fixed"
		/>
		<Container>
			<Grid className={styles.teasers} gap="2rem">
				<Grid.Item>
					<LexiconCard
						dark
						icon="crestEmea"
						fill="primary"
						title="EMEA"
						text="Europe, Middle East, and Africa"
						to="/handbook/emea"
						cta="Bonjour!"
					/>
				</Grid.Item>
				<Grid.Item>
					<LexiconCard
						dark
						icon="crestLatam"
						fill="primary"
						title="LATAM"
						text="Latin America"
						to="/handbook/latam"
						cta="Olá"
					/>
				</Grid.Item>
				<Grid.Item>
					<LexiconCard
						dark
						icon="crestNa"
						fill="primary"
						title="NA"
						text="North America"
						to="/handbook/na"
						cta="Yo"
					/>
				</Grid.Item>
			</Grid>
		</Container>
		<Footer />
	</div>
)

export default HandbookGuild
