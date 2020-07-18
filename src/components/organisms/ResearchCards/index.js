import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Text, Heading } from 'components/atoms'
import {slugToTitle} from 'utils'

export default ({}) => {
	const data = useStaticQuery(graphql`
		{
			allMdx(filter: { fileAbsolutePath: { regex: "/(resources/research)/" } }) {
				edges {
					node {
						internal {
							content
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	const ResearchCards = data.allMdx.edges.map(({ node }) => (
		<Flex margin="2rem auto">
			<Heading level={2}>{slugToTitle('/resources/research/', node.fields.slug)}</Heading>
		</Flex>
	))

	return <div>{ResearchCards}</div>
}
