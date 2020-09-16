/** @jsx jsx */

import { jsx, Flex, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'components/atoms'

export default function PreviousNext({ current, section, ...props }) {
	const data = useStaticQuery(graphql`
		{
			allMdx(
				sort: { order: ASC, fields: frontmatter___date }
				filter: { frontmatter: { publish: { eq: true } } }
			) {
				totalCount
				edges {
					previous {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					node {
						id
					}
					next {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	`)

	const Posts = data.allMdx.edges.filter(edges => edges.node.id === current)

	const previous = Posts[0].previous
	const next = Posts[0].next

	return (
		<Flex sx={{ justifyContent: 'space-between' }}>
			<Box>
				<Text sx={{ variant: 'caps' }}>Previous</Text>
				<Link to={previous.fields.slug}>
					<div>{previous.frontmatter.title}</div>
				</Link>
			</Box>
			{next.fields.slug == section ? (
				<Box sx={{ textAlign: 'right' }}>
					<Text sx={{ variant: 'caps' }}>Next</Text>
					<Link sx={{}} to={next.fields.slug}>
						<div>{next.frontmatter.title}</div>
					</Link>
				</Box>
			) : (
				''
			)}
		</Flex>
	)
}
