import { CardGrid, Container, Heading } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	return (
		<MainLayout section="Team">
			<Container>
				<Heading level={1} color="white" padding="4rem">
					The Squad
				</Heading>
				<CardGrid>
					{data.allMdx.edges.map(({ node }) => (
						<CardDefault
							key={node.id}
							imageURL={node.frontmatter.author.headshot}
							link={'/team/'+`${node.frontmatter.author.slug}`}
							title={node.frontmatter.author.id}
							subtitle={node.frontmatter.author.title}
							icon={node.frontmatter.author.icon}
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
						fileAbsolutePath: { regex: "/(/team/)/" }
						frontmatter: { author: { active: { eq: true } } }
					}
					sort: { order: ASC, fields: [fields___slug] }
				) {
					totalCount
					edges {
						node {
							id
							frontmatter {
								author {
									id
									title
									avatar
									headshot
									icon
									slug
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
