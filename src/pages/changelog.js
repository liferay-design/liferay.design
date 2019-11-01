import { Container, Heading, Flex } from 'components/atoms'
import { MainLayout } from 'components/templates'
import React from 'react'
import { ChangelogFeed } from 'components/organisms'
import { SEO } from 'components/molecules'

const Changelog = () => (
	<MainLayout section="Changelog">
		<SEO
			description="A feed with all of the latest updates to Liferay.Design"
			pageTitle="Liferay.Design | Changelog"
		/>
		<Container background="white">
			<Flex align="center" direction="column">
				<Heading level={1}>The Changelog</Heading>
				<ChangelogFeed items="50" />
			</Flex>
		</Container>
	</MainLayout>
)

export default Changelog