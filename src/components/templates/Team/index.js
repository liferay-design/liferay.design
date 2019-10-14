import { Container, Flex } from 'components/atoms'
import { GlobalMdx, SEO } from 'components/molecules'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Footer, Navbar, RecentBlogPosts } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import MediaQuery from 'react-responsive'
import moment from 'moment'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

export default class Team extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<SEO
					description={post.excerpt}
					previewImage={withPrefix(post.frontmatter.author.avatar)}
					keywords='designer, profile'
					pageTitle={'Profile page for ' + `${post.frontmatter.author}` + '| Designing at Liferay since' + `${moment(post.frontmatter.author.startDate,).format('YYYY')}`}
					twitterHandle={post.frontmatter.author.twitter}
					contentType='profile'
				/>
				<Navbar section="Team" />
				<Container banner>
					<MediaQuery maxWidth={767}>
						{matches => {
							return (
								<Flex
									justify={matches ? 'center' : 'center'}
									align={matches ? 'center' : 'center'}
									className={styles.banner}
								>
									<h1>
										{post.frontmatter.author.id}{' '}
										{post.frontmatter.author.startDate ? (
											<span className={styles.startYear}>
												Designing at Liferay since{' '}
												{moment(
													post.frontmatter.author
														.startDate,
												).format('YYYY')}
											</span>
										) : null}
									</h1>
									<div className={styles.role}>
										<h2>{post.frontmatter.author.title}</h2>
									</div>
									<img
										src={withPrefix(
											post.frontmatter.author.avatar,
										)}
									/>
								</Flex>
							)
						}}
					</MediaQuery>
				</Container>
				<div className={styles.markdownContainer}>
					<Flex
						margin="auto"
						direction="column"
						className={styles.wrapper}
					>
						<GlobalMdx>
							<MDXRenderer>{post.code.body}</MDXRenderer>
						</GlobalMdx>
					</Flex>
				</div>
				<RecentBlogPosts
					heading={'Recent posts by ' + `${post.frontmatter.author.id}`}
					teammate={post.frontmatter.author.slug}
				/>
				<Footer light />
			</div>
		)
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				author {
					id
					slug
					startDate
					title
					avatar
					twitter
				}
			}
			code {
				body
			}
			excerpt
		}
	}
`
