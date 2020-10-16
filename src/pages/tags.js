/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { Container, Link, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
const TagsPage = ({
	data: {
		allMdx: { group },
		site: {
			siteMetadata: { title },
		},
	},
}) => (
	<MainLayout>
		<Helmet title={title} />
		<Container heading="Tags">
			<Flex sx={{ flexWrap: 'wrap', mb:'20vh', }}>
				{group.map((tag, index) => (
					<AnimateIn delay={index * 0.08 + 's'} sx={{ mr: 2, my: 2 }}>
						<Link
							key={tag.fieldValue}
							sx={{
								variant: 'links.tag',
							}}
							to={`/tags/${kebabCase(tag.fieldValue.toLowerCase())}`}
						>
							{tag.fieldValue} ({tag.totalCount})
						</Link>
					</AnimateIn>
				))}
			</Flex>
		</Container>
	</MainLayout>
)
TagsPage.propTypes = {
	data: PropTypes.shape({
		allMdx: PropTypes.shape({
			group: PropTypes.arrayOf(
				PropTypes.shape({
					fieldValue: PropTypes.string.isRequired,
					totalCount: PropTypes.number.isRequired,
				}).isRequired,
			),
		}),
		site: PropTypes.shape({
			siteMetadata: PropTypes.shape({
				title: PropTypes.string.isRequired,
			}),
		}),
	}),
}
export default TagsPage
export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(limit: 2000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`
