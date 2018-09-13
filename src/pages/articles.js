import React from 'react'
import { Link, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'
import { Posts } from 'components/organisms'
import { styled, Heading } from 'reakit'

const Title = styled(Heading)`
		fontSize: 3rem;
		fontWeight: 600;
		color: white;
`;

export default ({ data }) => {
	return (
		<div>
			<MainLayout section="Articles" >
			<Title>
				The Blog
			</Title>
			<Posts />

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
