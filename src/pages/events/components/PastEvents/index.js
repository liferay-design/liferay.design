import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CardGrid } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import moment from 'moment'

export default () => {
	const data = useStaticQuery(graphql`
		{
			allMdx(
				filter: {
					fileAbsolutePath: { regex: "/(events)/" }
					frontmatter: { draft: { eq: false } }
				}
				sort: { order: DESC, fields: [frontmatter___date] }
			) {
				totalCount
				edges {
					node {
						id
						frontmatter {
							tag
							title
							office {
								city
								regionIcon
							}
							featuredImage
							date
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	const Events = data.allMdx.edges
		.filter(
			edgeItem => moment(edgeItem.node.frontmatter.date).toDate() < Date.now(),
		)
		.map(({ node }, index) => (
			<CardDefault
				delay={`${index}` * 0.1 + 's'}
				avatarImage
				pill
				tag={node.frontmatter.tag}
				key={node.id}
				imageURL={node.frontmatter.featuredImage}
				link={node.fields.slug}
				title={node.frontmatter.title}
				subtitle={node.frontmatter.office.city}
				avatarImageURL={node.frontmatter.office.regionIcon}
			/>
		))
	return (
		<CardGrid>
			{Events}
		</CardGrid>
	)}