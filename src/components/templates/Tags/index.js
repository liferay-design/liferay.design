import React from 'react'
import PropTypes from 'prop-types'
// Components
import { Link, graphql } from 'gatsby'
const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMdx
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${tag}"`
	return (
		<div>
			<h1>{tagHeader}</h1>
			<ul>
				{edges.map(({ node }) => {
					const { slug } = node.fields
					const { title } = node.frontmatter
					return (
						<li key={slug}>
							<Link to={slug}>{title}</Link>
						</li>
					)
				})}
			</ul>
			{/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
			<Link to="/tags">All tags</Link>
		</div>
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
`
