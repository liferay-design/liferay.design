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
							imageURL={node.frontmatter.headshotPro}
							link={node.fields.slug}
							title={node.frontmatter.name}
							subtitle={node.frontmatter.title}
							icon={node.frontmatter.icon}
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
						frontmatter: { active: { eq: true } }
					}
					sort: { order: ASC, fields: [fields___slug] }
				) {
					totalCount
					edges {
						node {
							id
							frontmatter {
								name
								title
								headshotPro
								headshotFun
								dribbble
								instagram
								twitter
								unsplash
								icon
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
