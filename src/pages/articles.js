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
					The Blog
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
							icon={node.frontmatter.avatar}
						/>
					))}
				</CardGrid>

				<Posts />
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
		allMdx(filter: { fileAbsolutePath: { regex: "/(articles)/" } }) {
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
