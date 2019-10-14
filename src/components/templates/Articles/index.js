import { Container, Flex, Link, Image } from 'components/atoms'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Tags, GlobalMdx } from 'components/molecules'
import { Footer, Navbar, RecentBlogPosts } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import moment from 'moment'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
import { colors } from 'theme'

export default class Articles extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<SEO
					description={
						`${post.frontmatter.title}` +
						' - an article by ' +
						`${post.frontmatter.author.id}` +
						' on Liferay.Design'
					}
					previewImage={
						'https://liferay.design' + post.frontmatter.featuredImage
					}
					keywords={post.frontmatter.tags}
					pageTitle={post.frontmatter.title}
					twitterHandle={
						post.frontmatter.author.twitter
							? post.frontmatter.author.twitter
							: null
					}
					canonicalLink={
						post.frontmatter.canonicalLink ? (
							<link
								href={post.frontmatter.canonicalLink}
								rel="canonical"
							/>
						) : null
					}
					contentType="article"
				/>
				<Navbar section="Articles" />
				<Container>
					<Tags tags={post.frontmatter.tags} />
					<Flex
						justify="center"
						align="center"
						className={styles.banner}
					>
						<h1>
							{post.frontmatter.title}{' '}
							<span>
								by{' '}
								<Link
									style={{
										color: colors.primaryl3,
										textDecoration: 'underline',
										textDecorationColor: colors.primary,
									}}
									to={withPrefix(
										'/team/' +
											`${post.frontmatter.author.slug}`,
									)}
								>
									{post.frontmatter.author.id}
								</Link>
								&nbsp;on{' '}
								{moment(post.frontmatter.date).format(
									'MMMM DD, YYYY',
								)}
							</span>
						</h1>
						<div className={styles.role}>
							<h2>{post.timeToRead} Min Read</h2>
						</div>
					</Flex>
				</Container>
				<div className={styles.markdownContainer}>
					<Image
						alt={'featured image for ' + `${post.frontmatter.title}`}
						className={styles.featuredImage}
						src={post.frontmatter.featuredImage}
					/>
					<div className={styles.wrapper}>
						<GlobalMdx>
							<MDXRenderer>{post.code.body}</MDXRenderer>
						</GlobalMdx>
					</div>
				</div>
				<RecentBlogPosts
					heading={'More posts by ' + `${post.frontmatter.author.id}`}
					teammate={post.frontmatter.author.slug}
					currentPost={post.id}
				/>
				<Footer light />
			</div>
		)
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
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
			excerpt
			code {
				body
			}
		}
	}
`
