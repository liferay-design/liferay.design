import React from 'react'
import { MainLayout } from 'components/templates'
import { Container } from 'components/atoms'
import { LexiconCard } from 'components/molecules'
import { Grid } from 'reakit'

const cardGrid = `
	"a a a b" auto
	"c c d d" auto / auto
`

const ResourcesPage = () => (
	<MainLayout section="Resources">
		<Container>
			<Grid gap="2rem" template={cardGrid}>
				<Grid.Item area="a">
					<LexiconCard dark
						icon="whyBlueprints"
						title="Blueprints"
						text="Liferay's Brand Style Guidelines"
						to="/blueprints" 
						cta="Learn More"
						/>
					</Grid.Item>
				<Grid.Item area="b">
					<LexiconCard dark
						icon="lexicon"
						title="Lexicon"
						text="Coming Soon!"
						to="/resources" 
						// cta="Learn More"
						/>
				</Grid.Item>
				<Grid.Item area="c">
					<LexiconCard dark
						// icon="liferayDesign"
						title="Dashboard"
						text="Coming Soon!"
						to="/resources" 
						// cta="Learn More"
						/>
				</Grid.Item>
				<Grid.Item area="d">
					<LexiconCard dark
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
