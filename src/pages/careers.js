import { CardGrid, Container, Heading } from 'components/atoms'
import { CardDefault, SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	return (
		<MainLayout section="Careers">
			<SEO
				description="Liferay is looking for designers who are passionate about open source technology — apply today!"
				pageTitle="Liferay.Design | Careers"
			/>
			<Container>
				<Heading level={1} color="white" padding="4rem">
					Join the Team!
				</Heading>
				<CardGrid>
					{data.allMdx.edges.map(({ node }, index) => (
						<CardDefault
							delay={`${index}` * 0.1 + 's'}
							avatarImage
							key={node.id}
							imageURL={node.frontmatter.featuredImage}
							link={node.fields.slug}
							title={node.frontmatter.title}
							subtitle={node.frontmatter.office.city}
							avatarImageURL={node.frontmatter.office.regionIcon}
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
						fileAbsolutePath: { regex: "/(careers)/" }
						frontmatter: { published: { eq: true } }
					}
				) {
					totalCount
					edges {
						node {
							id
							frontmatter {
								title
								office {
									city
									regionIcon
								}
								featuredImage
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
