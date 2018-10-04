import React from 'react'
import { MainLayout } from 'components/templates'
import { Team } from 'components/organisms'
import { Container, Heading } from 'components/atoms'

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
