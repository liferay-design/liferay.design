import { CardGrid, Container } from 'components/atoms'
import { SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'
import { slugToTitle, slugToIcon } from 'utils'
import Card from './components/Card'

export default ({ data }) => {

	return (
		<MainLayout section="Resources">
			<SEO
				description="Liferay Design Research"
				pageTitle="Liferay.Design | Research Resources"
			/>
			<Container background="white" heading="Research Methods" color="black">
				<CardGrid>
					{data.allMdx.edges.map(({ node }, index) => (
						<Card
							delay={`${index}` * 0.1 + 's'}
							key={node.id}
							title={slugToTitle('/resources/research/', node.fields.slug)}
							icon={slugToIcon('/resources/research/', node.fields.slug)}
							subtitle={node.frontmatter.subtitle}
							body={node.body}
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
			sort: { order: ASC, fields: fields___slug }
			filter: { fileAbsolutePath: { regex: "/(resources/research)/" } }
		) {
			edges {
				node {
					id
					frontmatter {
						subtitle
					}
					body
					fields {
						slug
					}
				}
			}
		}
	}
`
