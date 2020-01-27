import { CardGrid, Container, Heading, Link, Flex } from 'components/atoms'
import { CardDefault, SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { colors, fontSizes, fontWeights } from 'theme'
import { graphql } from 'gatsby'
import React from 'react'
import { avatarPath } from 'utils'

export default ({ data }) => {
	return (
		<MainLayout section="Articles">
			<SEO
				description="Articles, posts, best practices, how-to's and more from Liferay's Design Team"
				pageTitle="Liferay.Design | Articles"
			/>
			<Container>
				<Flex direction="row" justify="space-between">
					<Heading level={1} color="white" padding="4rem">
						The Latest Posts
					</Heading>
					<div style={{ alignSelf: 'baseline', marginTop: '1.8rem' }}>
						<Link
							style={{
								background: colors.black,
								borderRadius: fontSizes.micro,
								padding: fontSizes.micro,
								textTransform: 'uppercase',
								color: colors.lightGrey,
								fontWeight: fontWeights.black,
								letterSpacing: '1px',
								fontSize: fontSizes.small,
								margin: '1rem',
							}}
							to={`/tags/best-practices`}
						>
							Best Practices
						</Link>
						<Link
							style={{
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
							to={`/tags/talks`}
						>
							Talks
						</Link>
					</div>
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
							avatarImageURL={avatarPath(node.frontmatter.author.id)}
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
				frontmatter: {
					publish: { eq: true }
					tags: { nin: ["Talks", "Best Practices"] }
				}
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
