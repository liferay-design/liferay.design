import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { Posts } from 'components/organisms'
import { CardDefault } from 'components/molecules'
import { CardGrid, Container, Heading } from 'components/atoms'

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
							subtitle={node.frontmatter.description}
							avatarImageURL={node.frontmatter.avatar}
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
					filter: { fileAbsolutePath: { regex: "/(articles)/" } }
					sort: { order: DESC, fields: [frontmatter___date] }
				) {
					totalCount
					edges {
						node {
							id
							frontmatter {
								title
								description
								featuredImage
								author
								avatar
								date(formatString: "MMMM DD, YYYY")
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
