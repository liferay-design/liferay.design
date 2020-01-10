import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CardGrid, Text, Container } from 'components/atoms'
import { CardDefault } from 'components/molecules'

export default ( {teammate, currentPost, ...props} ) => {
	const data = useStaticQuery(graphql`
		{
			allPathTracksJson {
				edges {
					node {
						id
						vertical
						label
						description
						levels {
							summary
							signals
						}
					}
				}
			}
		}
	`)

	const Tracks = data.allPathTracksJson.edges
		.map(( {node} ) => (
			<>
				<h2>
					{node.vertical}
				</h2>
				<p>
					{node.description}
				</p>
			</>

		))
		// .filter(edges => edges.node.frontmatter.author.slug === teammate && edges.node.id !== currentPost)
		// .slice(0,3)
		// .map(({ node }) => (
		// 	<CardDefault
		// 		avatarImage
		// 		key={node.id}
		// 		imageURL={node.frontmatter.featuredImage}
		// 		link={node.fields.slug}
		// 		title={node.frontmatter.title}
		// 		subtitle={`${node.timeToRead}` + ' Min Read'}
		// 		avatarImageURL={node.frontmatter.author.avatar}
		// 	/>
		// ))

	return (
		<div>
			{Tracks}
		</div>
	)}

