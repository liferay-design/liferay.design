import { Icon, Image, Container, Heading, Link, Flex, Text } from 'components/atoms'
import { MainLayout } from 'components/templates'
import { colors, fontSizes, fontWeights } from 'theme'
import { graphql } from 'gatsby'
import React from 'react'
import { Avatar } from 'react-md'

export default ({ data }) => {
	return (
		<MainLayout section="Changelog">
			<Container background="white">
				<Flex direction="row" justify="space-between">
					<Heading level={1} color="white" padding="4rem">
						The Changelog
					</Heading>
				</Flex>
				<Flex direction="column">
					{data.allChangelogYaml.edges.map(({ node }) => (
						<Flex margin="4rem 0" direction="column" key={node.id}>
							{node.icon ? <Icon name={node.icon} /> : ''}
							<Link to={node.url}>
								<Heading level="2">
									{node.title}
									<Icon
										name="externalLink"
										width=".6em"
										margin="0 0 0 .5em"
									/>
								</Heading>
							</Link>
							{node.longSummary ? <Text>{node.longSummary}</Text> : ''}
							<Text>{node.id}</Text>
							<Text>{node.url}</Text>
							Updated by: <Text>{node.author.id}</Text>
							<Avatar src={node.author.headshot} />
							{node.contributors ? (
								<Text>
									With contributions from: {node.contributors.map((i) => (
										<div>
											<Avatar title={i.id} src={i.headshot} alt={i.id} />
										</div>
									))}
								</Text>
							) : (
								''
							)}
						</Flex>
					))}
				</Flex>
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
			{
				allChangelogYaml(sort: { order: DESC, fields: [id] }) {
					totalCount
					edges {
						node {
							id
							url
							author {
								id
								headshot
							}
							title
							icon
							longSummary
							contributors {
								id
								headshot
							}
							buildPreview
						}
					}
				}
			}
		`
