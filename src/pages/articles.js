/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { Container, Heading, Link, Flex } from 'components/atoms'
import { CardDefault, SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
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
					<Heading level={1} sx={{ pb: '4rem', color: 'white' }}>
						The Latest Posts
					</Heading>
					<div style={{ alignSelf: 'baseline', marginTop: '1.8rem' }}>
						<Link
							sx={{
								variant: 'text.tag',
							}}
							to={`/tags/best-practices`}
						>
							Best Practices
						</Link>
						<Link
							sx={{
								variant: 'text.tag',
							}}
							to={`/tags/talks`}
						>
							Talks
						</Link>
					</div>
				</Flex>
				<Grid sx={{ variant: 'grids.threeCards' }}>
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
				</Grid>
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
