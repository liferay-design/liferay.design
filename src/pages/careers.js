import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { Posts } from 'components/organisms'
import { Container, Heading } from 'components/atoms'

export default ({ data }) => {
	return (
		<MainLayout section="Careers">
			<Container>
				<Heading level={1} color="white" padding="4rem">
					Join the Team!
				</Heading>
				<h4>{data.allMdx.totalCount} Posts</h4>

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
		allMdx(filter: { fileAbsolutePath: { regex: "/(careers)/" } }) {
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
