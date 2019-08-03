import React from 'react'
import PropTypes from 'prop-types'
import { colors, fontSizes, fontWeights } from 'theme'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
const TagsPage = ({
	data: {
		allMdx: { group },
		site: {
			siteMetadata: { title },
		},
	},
}) => (
	<div>
		<Helmet title={title} />
		<div>
			<h1>Tags</h1>
			<ul>
				{group.map(tag => (
					<li key={tag.fieldValue}>
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
							}}
							to={`/tags/${kebabCase(tag.fieldValue.toLowerCase())}`}
						>
							{tag.fieldValue} ({tag.totalCount})
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
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
