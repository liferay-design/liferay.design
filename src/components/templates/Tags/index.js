import { Flex } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import moment from 'moment'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

export default class Tags extends Component {
	render() {
		const post = this.props.data.mdx
		const Tags = ({ pageContext, data }) => {
			const { tag } = pageContext
			const { edges, totalCount } = data.allMdx
			const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} 
tagged with "${tag}"`

		return (
			<div>
				<Helmet>
					<title>
						{post.frontmatter.title} &mdash; an article by{' '}
						{post.frontmatter.author.id} on Liferay.Design
					</title>
					<meta
						property="og:image"
						content={
							'https://liferay.design/' +
							post.frontmatter.featuredImage
						}
					/>
					<meta
						property="og:title"
						content={
							post.frontmatter.title + ' — an article by ' + 
						post.frontmatter.author.id + ' on Liferay.Design'
						}
					/>
					{post.frontmatter.canonicalLink ? (
						<link
							href={post.frontmatter.canonicalLink}
							rel="canonical"
						/>
					) : null}
				</Helmet>
				<Navbar section="Articles" />

				<Flex justify="center" align="center" className={styles.banner}>
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
				</Flex>
				<Footer light />
			</div>
		)
	}}}

Tags.propTypes = {
	pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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
        }).isRequired
      ),
    }),
  }),
}

export const pageQuery = graphql`
	query($tag: String) {
		allMdx(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 1000
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
						tags
					}
				}
			}
		}
	}
`
