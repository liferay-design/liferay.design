import { Container, Link, Image, ScrollProgress } from 'components/atoms'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO, Tags, GlobalMdx } from 'components/molecules'
import { Footer, Navbar, RecentBlogPosts } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import moment from 'moment'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { colors } from 'theme'
import { makeAuthorSlug } from 'utils'
import { Grid } from 'reakit'
import MediaQuery from 'react-responsive'

export default class Articles extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div style={{overflowX:'hidden'}}>
				<ScrollProgress />
				<SEO
					description={post.excerpt}
					previewImage={
						'https://liferay.design' + post.frontmatter.featuredImage
					}
					keywords={post.frontmatter.tags}
					pageTitle={
						`${post.frontmatter.title}` +
						' - an article by ' +
						`${post.frontmatter.author.id}` +
						' on Liferay.Design'
					}
					twitterHandle={
						post.frontmatter.author.twitter
							? post.frontmatter.author.twitter
							: null
					}
					canonicalLink={
						post.frontmatter.canonicalLink ? (
							<link href={post.frontmatter.canonicalLink} rel="canonical" />
						) : null
					}
					contentType="article"
				/>
				<Navbar section="Articles" />
				<Container>
					<MediaQuery maxWidth={767}>
					{matches => {
						let gridTemplate = matches
							? `	"c v" auto
								"i i" auto / 1fr 1rem
							`
							: `	"c c v" auto
								"l i r" auto
								"l i r" auto / 1fr 768px 1fr`
						return (
							<Grid template={gridTemplate} className={styles.banner}>
								<Grid.Item area='c'>
									{post.frontmatter.tags ? (
										<Tags tags={post.frontmatter.tags} />
									) : null}
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
															style={{
																color: colors.primaryl3,
																textDecoration: 'underline',
																textDecorationColor: colors.primary,
															}}
															to={withPrefix(
																'/team/' + `${makeAuthorSlug(i.id)}`,
															)}
														>
															{i.id}
														</Link>
													))}
												</>
											) : null}
											&nbsp;on{' '}
											{moment(post.frontmatter.date).format('MMMM DD, YYYY')}
										</span>
									</h1>
								</Grid.Item>
								<Grid.Item area='v' alignSelf='center' justifySelf='center' className={styles.role}>
									<h2>{post.timeToRead} Min Read</h2>
								</Grid.Item>
								<Grid.Item area='i' className={styles.featuredImage}>
									<Image
										alt={'featured image for ' + `${post.frontmatter.title}`}
										src={post.frontmatter.featuredImage}
									/>
								</Grid.Item>
							</Grid>)}}
					</MediaQuery>
				</Container>
				<div className={styles.markdownContainer}>
					<div className={styles.wrapper}>
						<GlobalMdx>
							<MDXRenderer>{post.body}</MDXRenderer>
						</GlobalMdx>
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
					twitter
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
