import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { Posts } from 'components/organisms'
import { Container, Heading } from 'components/atoms'

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
				{data.allMdx.edges.map(({ node }) => (
					<div key={node.id}>
						<Link to={node.fields.slug}>
							<h3>{node.frontmatter.title}</h3>

							<p>{node.excerpt}</p>
						</Link>
					</div>
				))}
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
	{
		allMdx(filter: { fileAbsolutePath: { regex: "/(events)/(past)/" } }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
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
