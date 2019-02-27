import React from 'react'
import { MainLayout } from 'components/templates'
import { Container } from 'components/atoms'
import { CardLexicon } from 'components/molecules'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const ResourcesPage = () => (
	<MainLayout section="Resources">
		<Container>
			<Grid className={styles.grid} gap="2rem">
				<Grid.Item>
					<CardLexicon
						dark
						icon="whyBlueprints"
						title="Blueprints"
						text="Liferay's Brand Style Guidelines"
						to="/blueprints"
						cta="Learn More"
					/>
				</Grid.Item>
				<Grid.Item>
					<CardLexicon
						dark
						icon="lexicon"
						title="Lexicon"
						text="Coming Soon!"
						to="/resources"
						// cta="Learn More"
					/>
				</Grid.Item>
				<Grid.Item>
					<CardLexicon
						dark
						// icon="liferayDesign"
						title="Dashboard"
						text="Coming Soon!"
						to="/resources"
						// cta="Learn More"
					/>
				</Grid.Item>
				<Grid.Item>
					<CardLexicon
						dark
						// icon="liferayDesign"
						title="Handbook"
						text="Coming Soon!"
						to="/resources"
						// cta="Learn More"
					/>
				</Grid.Item>
			</Grid>
		</Container>
	</MainLayout>
)

export default ResourcesPage
