import { CardGrid, Container, Heading, Link, Flex } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { colors, fontSizes, fontWeights } from 'theme'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	return (
		<MainLayout section="Articles">
			<Container>
				<Flex direction="row" justify="space-between">
					<Heading level={1} color="white" padding="4rem">
						The Latest Posts
					</Heading>
					<Link
						style={{
							alignSelf: 'baseline',
							background: colors.black,
							borderRadius: fontSizes.micro,
							padding: fontSizes.micro,
							textTransform: 'uppercase',
							color: colors.lightGrey,
							fontWeight: fontWeights.black,
							letterSpacing: '1px',
							fontSize: fontSizes.small,
							margin: '1rem 0',
						}}
						to={`/tags/best-practices`}
					>
						Best Practices
					</Link>
				</Flex>
				<CardGrid>
					{data.allMdx.edges.map(({ node }, index) => (
						<CardDefault
							delay={`${index}` * 0.1 + 's'}
							avatarImage
							key={node.id}
							imageURL={node.frontmatter.featuredImage}
							link={node.fields.slug}
							title={node.frontmatter.title}
							subtitle={`${node.timeToRead}` + ' Min Read'}
							avatarImageURL={node.frontmatter.author.avatar}
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
						fileAbsolutePath: { regex: "/(articles)/" }
						frontmatter: { publish: { eq: true } }
						frontmatter: { tags: { ne: "Best Practices" }}
					}
					sort: { order: DESC, fields: [frontmatter___date] }
				) {
					totalCount
					edges {
						node {
							id
							timeToRead
							frontmatter {
								title
								featuredImage
								author {
									id
									avatar
								}
								tags
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
