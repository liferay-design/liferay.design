import { Container, Heading } from 'components/atoms'
import { Team } from 'components/organisms'
import { MainLayout } from 'components/templates'
import React from 'react'

const TeamPage = () => (
	<MainLayout section="Team">
		<Container>
			<Heading level={1} color="white" padding="4rem">
				The Squad
			</Heading>
			<Team />
		</Container>
	</MainLayout>
)

export default TeamPage
