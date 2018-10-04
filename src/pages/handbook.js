import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'

export default ({ data }) => {
	return (
		<div>
			<MainLayout section="Handbook" >

			<h4>{data.allMarkdownRemark.totalCount} Posts</h4>

			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<Link to={node.fields.slug}>
						<h3>{node.frontmatter.title}</h3>

						<p>{node.excerpt}</p>
					</Link>
				</div>
			))}
			</MainLayout>
		</div>
	)
}

export const query = graphql`
	{
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(handbook)/" } }) {
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
