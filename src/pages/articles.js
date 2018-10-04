import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { Posts } from 'components/organisms'
import { Container, Heading } from 'components/atoms'

export default ({ data }) => {
	return <MainLayout section="Articles">
			<Container>
				<Heading level={1} color="white" padding="4rem">
					The Blog
				</Heading>
				<Posts />
				<h4>{data.allMarkdownRemark.totalCount} Posts</h4>

				{data.allMarkdownRemark.edges.map(({ node }) => <div key={node.id}>
						<Link to={node.fields.slug}>
							<h3>{node.frontmatter.title}</h3>

							<p>{node.excerpt}</p>
						</Link>
					</div>)}
			</Container>
		</MainLayout>
}

export const query = graphql`
	{
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(articles)/" } }) {
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
