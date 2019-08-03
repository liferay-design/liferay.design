import { Container, Flex } from 'components/atoms'
import { Tags } from 'components/molecules'
import { Footer, Navbar } from 'components/organisms'
import { graphql, withPrefix, Link } from 'gatsby'
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
							post.frontmatter.title +
							' — an article by ' +
							post.frontmatter.author.id +
							' on Liferay.Design'
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
				<Container>
					<Flex
						justify="center"
						align="center"
						className={styles.banner}
					>
						<Tags tags={post.frontmatter.tags} />
						<h1>
							{post.frontmatter.title}{' '}
							<span>
								by{' '}
								<a
									href={withPrefix(
										'/team/' +
											`${post.frontmatter.author.slug}`,
									)}
								>
									{post.frontmatter.author.id}
								</a>
								<br />
								on{' '}
								{moment(post.frontmatter.date).format(
									'MMMM DD,YYYY',
								)}
							</span>
						</h1>
						<div className={styles.role}>
							<h2>{post.timeToRead} Min Read</h2>
						</div>
					</Flex>
				</Container>
				<div className={styles.markdownContainer}>
					<img
						className={styles.featuredImage}
						src={post.frontmatter.featuredImage}
					/>
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
			timeToRead
			frontmatter {
				author {
					id
					slug
				}
				featuredImage
				canonicalLink
				title
				date
				tags
			}
			code {
				body
			}
		}
	}
`
