import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CardGrid } from 'components/atoms'
import { CardDefault } from 'components/molecules'

export default () => {
	const data = useStaticQuery(graphql`
		{
			allMdx(
				limit: 3
				filter: { fileAbsolutePath: { regex: "/(articles)/" } }
				sort: { order: DESC, fields: [frontmatter___date] }
			) {
				totalCount
				edges {
					node {
						id
						timeToRead
						frontmatter {
							title
							featuredImage
							author {
								slug
								avatar
							}
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)
	return (
		<CardGrid>
			{ data.allMdx.edges.map(({ node }) => (
				<CardDefault
					avatarImage
					key={node.id}
					imageURL={node.frontmatter.featuredImage}
					link={node.fields.slug}
					title={node.frontmatter.title}
					subtitle={`${node.timeToRead}` + ' Min Read'}
					avatarImageURL={node.frontmatter.author.avatar}
				/>
			))}
		</CardGrid>
)}