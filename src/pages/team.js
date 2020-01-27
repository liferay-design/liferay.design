import { CardGrid, Container, Heading } from 'components/atoms'
import { CardDefault, SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'
import { headshotPath, makeAuthorSlug } from 'utils'

export default ({ data }) => {
	return (
		<MainLayout section="Team">
			<SEO
				description="Meet the Liferay.Design team — we're all over the world!"
				pageTitle="Liferay.Design | Team"
			/>
			<Container>
				<Heading level={1} color="white" padding="4rem">
					The Squad
				</Heading>
				<CardGrid>
					{data.allMdx.edges.map(({ node }, index) => (
						<CardDefault
							delay={`${index}` * 0.1 + 's'}
							key={node.id}
							imageURL={headshotPath(node.frontmatter.author.id)}
							link={'/team/' + makeAuthorSlug(node.frontmatter.author.id)}
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
							icon
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
