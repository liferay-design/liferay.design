import { Container, Heading, Flex } from 'components/atoms'
import { MainLayout } from 'components/templates'
import React from 'react'
import { ChangelogFeed } from 'components/organisms'

const Changelog = () => 
(
		<MainLayout section="Changelog">
			<Container background="white">
				<Flex direction="row" justify="space-between">
					<Heading level={1} color="black" padding="4rem">
						The Changelog
					</Heading>
				</Flex>
				<Flex direction="column">
					<ChangelogFeed items="4"/>
				</Flex>
			</Container>
		</MainLayout>
	)

export default Changelog