/** @jsx jsx */

import { jsx, Styled, Flex, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'components/atoms'
import { slugToSection } from 'utils'

export default function PreviousNext({ current, section, ...props }) {

    const H3 = Styled.h3

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
		<Flex sx={{ justifyContent: 'space-between', my: 5 }}>
			{previous && slugToSection(previous.fields.slug) === section ? (
				<Box>
					<Text sx={{ variant: 'text.caps' }}>Previous</Text>
					<Link to={previous.fields.slug}>
						<H3>{previous.frontmatter.title}</H3>
					</Link>
				</Box>
			) : (
				<div></div>
			)}
			{next && slugToSection(next.fields.slug) === section ? (
				<Box sx={{ textAlign: 'right' }}>
					<Text sx={{ variant: 'text.caps' }}>Next</Text>
					<Link sx={{}} to={next.fields.slug}>
						<H3>{next.frontmatter.title}</H3>
					</Link>
				</Box>
			) : (
				''
			)}
		</Flex>
	)
}
