import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { CardGrid, Container, Heading } from 'components/atoms'
import { CardDefault } from 'components/molecules'

export default ({ data }) => {
	return (
		<MainLayout section="Events">
			<Container>
				<Heading level={1} color="white" padding="4rem">
					Upcoming Events
				</Heading>

			<Heading level={1} color="white" padding="4rem">
				Past Events
			</Heading>
			<CardGrid>
				{data.allMdx.edges.map(({ node }) => (
					<CardDefault
						key={node.id}
						imageURL={node.frontmatter.featuredImage}
						link={node.fields.slug}
						title={node.frontmatter.title}
						subtitle={node.frontmatter.description}
						icon={node.frontmatter.author}
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
						fileAbsolutePath: { regex: "/(events)/" }
						frontmatter: { 
							draft: { eq: false }
						}
					}
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
