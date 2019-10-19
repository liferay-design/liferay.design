import { Container, Heading, Flex } from 'components/atoms'
import { MainLayout } from 'components/templates'
import React from 'react'
import { ChangelogFeed } from 'components/organisms'

const Changelog = () => 
(
		<MainLayout section="Changelog">
			<Container heading='The Changelog' color='black' level={1} background="white">
				<Flex direction="column">
					<ChangelogFeed items="50" />
				</Flex>
			</Container>
		</MainLayout>
	)

export default Changelog