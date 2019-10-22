import { Container, Heading, Flex } from 'components/atoms'
import { MainLayout } from 'components/templates'
import React from 'react'
import { ChangelogFeed } from 'components/organisms'

const Changelog = () => 
(
		<MainLayout section="Changelog">
			<Container background="white">
				<Flex align="center" direction="column">
					<Heading level={1}>The Changelog</Heading>
					<ChangelogFeed items="50" />
				</Flex>
			</Container>
		</MainLayout>
	)

export default Changelog