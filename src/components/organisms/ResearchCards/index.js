import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Text, Heading } from 'components/atoms'
import {slugToTitle} from 'utils'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default ({}) => {
	const data = useStaticQuery(graphql`
		{
			allMdx(filter: { fileAbsolutePath: { regex: "/(resources/research)/" } }) {
				edges {
					node {
						body
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
			<MDXRenderer>
				{node.body}
			</MDXRenderer>
		</Flex>
	))

	return <div>{ResearchCards}</div>
}
