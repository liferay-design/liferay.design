import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CardGrid, Text, Container } from 'components/atoms'
import { CardDefault } from 'components/molecules'

export default ( {teammate, currentPost, ...props} ) => {
	const data = useStaticQuery(graphql`
		{
			allMdx(
				filter: { fileAbsolutePath: { regex: "/(articles)/" } }
				sort: { order: DESC, fields: [frontmatter___date] }
			) {
				edges {
					node {
						id
						timeToRead
						frontmatter {
							title
							featuredImage
							author {
								id
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

	const Posts = data.allMdx.edges
		.filter(edges => edges.node.frontmatter.author.slug === teammate && edges.node.id !== currentPost)
		.slice(0,3)
		.map(({ node }) => (
			<CardDefault
				avatarImage
				key={node.id}
				imageURL={node.frontmatter.featuredImage}
				link={node.fields.slug}
				title={node.frontmatter.title}
				subtitle={`${node.timeToRead}` + ' Min Read'}
				avatarImageURL={node.frontmatter.author.avatar}
			/>
		))

	return (
		<div>
			{Posts.length >= 1 ? (
				<Container
					{...props} 
					color="black"
					background="#fff"
					padding="4rem 0 4rem"
				>
					<CardGrid>{Posts}</CardGrid>
				</Container>
			) : (
				null
			)}
		</div>
	)}

