import React from 'react'
import { MainLayout } from 'components/templates'
import { Container } from 'components/atoms'
import { LexiconCard } from 'components/molecules'

const ResourcesPage = () => (
	<MainLayout section="Resources">
		<Container>
			<LexiconCard 
				styles="blueprints"
				title="Blueprints"
				text="Liferay's Brand Style Guidelines"
				to="/blueprints" 
				cta="Learn More"
				/>
			<LexiconCard 
				title="Lexicon"
				text="Liferay's Experience Language"
				to="/lexicon" 
				cta="Learn More"
				/>
		</Container>
	</MainLayout>
)

export default ResourcesPage
