import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { CardGrid, Container, Heading, Flex } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { colors, fontSizes, fontWeights } from 'theme'
import {avatarPath} from 'utils'

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMdx
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with “${tag}”`
	return (
		<MainLayout section="Articles">
			<Container>
				<Flex direction="row" justify="space-between">
					<Heading level={1} color="white" padding="4rem">
						{tagHeader}
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
						to={`/articles`}
					>
						All Posts
					</Link>
				</Flex>
				<CardGrid>
					{data.allMdx.edges.map(({ node }) => (
						<CardDefault
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
Tags.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMdx: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							title: PropTypes.string.isRequired,
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired,
			),
		}),
	}),
}
export default Tags
export const pageQuery = graphql`
			query($tag: String) {
				allMdx(
					limit: 2000
					sort: { fields: [frontmatter___date], order: DESC }
					filter: { frontmatter: { tags: { in: [$tag] } } }
				) {
					totalCount
					edges {
						node {
							timeToRead
							fields {
								slug
							}
							frontmatter {
								title
								featuredImage
								author {
									id
								}
							}
						}
					}
				}
			}
		`
