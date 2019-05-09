import { Flex } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import moment from 'moment'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'

export default class Articles extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<Helmet>
					<title>
						{post.frontmatter.title} &mdash; an article by{' '}
						{post.frontmatter.author} on Liferay.Design
					</title>
					<meta property="og:image" content={post.frontmatter.featuredImage} />
					{post.frontmatter.canonicalLink ? (
						<link
							href={post.frontmatter.canonicalLink}
							rel="canonical"
						/>
					) : null}
				</Helmet>
				<Navbar section="Articles" />

				<Flex justify="center" align="center" className={styles.banner}>
					<h1>
						{post.frontmatter.title}{' '}
						<span>
							by{' '}
							<a href={withPrefix(post.frontmatter.authorLink)}>
								{post.frontmatter.author}
							</a>
							<br />
							on{' '}
							{moment(post.frontmatter.date).format('MMMM DD,YYYY')}
						</span>
					</h1>
					<div className={styles.role}>
						<h2>{post.frontmatter.description}</h2>
					</div>
				</Flex>
				<div className={styles.markdownContainer}>
					<Flex direction="column" className={styles.wrapper}>
						<MDXRenderer>{post.code.body}</MDXRenderer>
					</Flex>
				</div>
				<Footer light />
			</div>
		)
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				author
				authorLink
				description
				featuredImage
				canonicalLink
				title
				date
			}
			code {
				body
			}
		}
	}
`
