/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import { Container, Link, Image, ScrollProgress } from 'components/atoms'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO, Tags, GlobalMdx } from 'components/molecules'
import { Footer, Navbar, RecentBlogPosts, PreviousNext } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import moment from 'moment'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { makeAuthorSlug } from 'utils'

export default class Articles extends Component {
	render() {
		const post = this.props.data.mdx
		const links = post.frontmatter.author.links ? post.frontmatter.author.links : null // this is to catch people who dont have links

		return (
			<div style={{ overflowX: 'hidden' }}>
				<ScrollProgress />
				<SEO
					description={post.excerpt}
					previewImage={post.frontmatter.featuredImage}
					keywords={post.frontmatter.tags}
					pageTitle={
						`${post.frontmatter.title}` +
						' - an article by ' +
						`${post.frontmatter.author.id}` +
						' on Liferay.Design'
					}
					twitterHandle={links ? links.twitter : null}
					canonicalLink={
						post.frontmatter.canonicalLink
							? post.frontmatter.canonicalLink
							: ''
					}
					contentType="article"
				/>
				<Navbar section="Articles" />
				<Container>
					<Grid sx={{ variant: 'grids.post' }} className={styles.banner}>
						<Box sx={{ gridArea: 'c' }}>
							{post.frontmatter.tags ? (
								<Tags tags={post.frontmatter.tags} />
							) : null}
							<h1>
								{post.frontmatter.title}{' '}
								<span>
									by{' '}
									<Link
										sx={{
											color: 'primaryl3',
											textDecoration: 'underline',
											textDecorationColor: theme =>
												theme.colors.primary,
										}}
										to={withPrefix(
											'/team/' +
												`${makeAuthorSlug(
													post.frontmatter.author.id,
												)}`,
										)}
									>
										{post.frontmatter.author.id}
									</Link>
									{post.frontmatter.contributors ? (
										<>
											{' '}
											and{' '}
											{post.frontmatter.contributors.map(i => (
												<Link
													sx={{
														color: 'primaryl3',
														textDecoration: 'underline',
														textDecorationColor: 'primary',
													}}
													to={withPrefix(
														'/team/' +
															`${makeAuthorSlug(i.id)}`,
													)}
												>
													{i.id}
												</Link>
											))}
										</>
									) : null}
									&nbsp;on{' '}
									{moment(post.frontmatter.date).format(
										'MMMM DD, YYYY',
									)}
								</span>
							</h1>
						</Box>
						<Box
							sx={{
								gridArea: 'v',
								alignSelf: 'center',
								justifySelf: 'center',
							}}
							className={styles.role}
						>
							<h2>{post.timeToRead} Min Read</h2>
						</Box>
						<Box sx={{ gridArea: 'i' }} className={styles.featuredImage}>
							<Image
								alt={'featured image for ' + `${post.frontmatter.title}`}
								src={post.frontmatter.featuredImage}
							/>
						</Box>
					</Grid>
				</Container>
				<div className={styles.markdownContainer}>
					<div className={styles.wrapper}>
						<GlobalMdx>
							<MDXRenderer>{post.body}</MDXRenderer>
						</GlobalMdx>
						<PreviousNext section="articles" current={post.id} />
					</div>
				</div>
				<RecentBlogPosts
					heading={'More posts by ' + `${post.frontmatter.author.id}`}
					teammate={`${makeAuthorSlug(post.frontmatter.author.id)}`}
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
					links {
						twitter
					}
				}
				featuredImage
				canonicalLink
				title
				date
				tags
				contributors {
					id
				}
			}
			excerpt
			body
		}
	}
`
