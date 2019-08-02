import { CardGrid, Container, Heading } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	return (
		<MainLayout section="Articles">
			<Container>
				<Heading level={1} color="white" padding="4rem">
					The Latest Posts
				</Heading>
				<CardGrid>
					{data.allMdx.edges.map(({ node }) => (
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
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
			{
				allMdx(
					filter: {
						fileAbsolutePath: { regex: "/(articles)/" }
						frontmatter: { publish: { eq: true } } 
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
									avatar
								}
							}
							fields {
								slug
							}
							excerpt
						}
					}
				}
			}
		`
