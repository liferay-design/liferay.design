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
				{/* <h4>{data.allMdx.totalCount} Posts</h4> */}
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
					
					// <div key={node.id}>
					// 	<Link to={node.fields.slug}>
					// 		<h3>{node.frontmatter.title}</h3>

					// 		<p>{node.excerpt}</p>
					// 	</Link>
					// </div>
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
						fileAbsolutePath: { regex: "/(events)/(past)/" }
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
