import { Container, Heading } from 'components/atoms'
import { MainLayout } from 'components/templates'
import React from 'react'
import PastEvents from './components/PastEvents'
import UpcomingEvents from './components/UpcomingEvents'

export default () => {

	return (
		<MainLayout section="Events">
			<UpcomingEvents />		
			<Container>
				<Heading level={1} color="white" padding="4rem">
					Event Recaps
				</Heading>
				<PastEvents />
			</Container>
		</MainLayout>
	)
}
