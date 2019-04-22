import { Banner, Footer } from 'components/organisms'
import React from 'react'
import styles from './styles.module.scss'

const HandbookGuild = () => (
	<div className={styles.body}>
		<Banner
			headline="Handbook"
			subtitle="For the UX Design Guild"
			cta="Get Started"
			ctaLink="/handbook/principles"
			section="Handbook"
			background="url(/images/handbook/guild/ux-guild.svg) center / cover fixed"
		/>
		{/* <Container>
			<Grid className={styles.teasers} gap="2rem">
				<Grid.Item>
					<CardLexicon
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
					<CardLexicon
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
					<CardLexicon
						dark
						icon="crestNa"
						fill="primary"
						title="NA"
						text="North America"
						to="/handbook/na"
						cta="Howdy"
					/>
				</Grid.Item>
			</Grid>
		</Container> */}
		<Footer />
	</div>
)

export default HandbookGuild
