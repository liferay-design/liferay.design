import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CardGrid } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import {avatarPath} from 'utils'

export default () => {
	const data = useStaticQuery(graphql`
		{
			allMdx(
				limit: 3
				filter: { 
					fileAbsolutePath: { regex: "/(articles)/" } 
					frontmatter: { publish: {eq: true}}
			}
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
								id
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
			{data.allMdx.edges.map(({ node }, index) => (
				<CardDefault
					avatarImage
					delay={`${index}` * 0.1 + 's'}
					key={node.id}
					imageURL={node.frontmatter.featuredImage}
					link={node.fields.slug}
					title={node.frontmatter.title}
					subtitle={`${node.timeToRead}` + ' Min Read'}
					avatarImageURL={avatarPath(node.frontmatter.author.id)}
				/>
			))}
		</CardGrid>
	)}