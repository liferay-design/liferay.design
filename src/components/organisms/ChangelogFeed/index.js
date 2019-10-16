import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Heading, Text, Flex, Link, Icon } from 'components/atoms'
import Changelog from 'pages/changelog'
import PropTypes from 'prop-types'
import {Avatar} from 'react-md'

export default function ChangelogFeed ({ items, ...props }) {
	const data = useStaticQuery(graphql`
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
	`)

	const Feed = data.allChangelogYaml.edges
		.slice(0, `${items}`)
		.map(({ node }) => (
			<Flex margin="4rem 0" direction="column" key={node.id}>
				{node.icon ? <Icon name={node.icon} /> : ''}
				<Link to={node.url}>
					<Heading level="2">
						{node.title}
						<Icon name="externalLink" width=".6em" margin="0 0 0 .5em" />
					</Heading>
				</Link>
				{node.longSummary ? <Text>{node.longSummary}</Text> : ''}
				<Text>{node.id}</Text>
				<Text>{node.url}</Text>
				Updated by: <Text>{node.author.id}</Text>
				<Avatar src={node.author.headshot} />
				{node.contributors ? (
					<Text>
						With contributions from:{' '}
						{node.contributors.map(i => (
							<div>
								<Avatar title={i.id} src={i.headshot} alt={i.id} />
							</div>
						))}
					</Text>
				) : (
					''
				)}
			</Flex>
		))

	return <div>{Feed}</div>
}

ChangelogFeed.propTypes = {
	items: PropTypes.string,
}