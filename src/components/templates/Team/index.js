import { Container, Flex, ScrollProgress } from 'components/atoms'
import { GlobalMdx, SEO } from 'components/molecules'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Footer, Navbar, RecentBlogPosts } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import MediaQuery from 'react-responsive'
import moment from 'moment'
import { avatarPath, makeAuthorSlug } from 'utils'

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
				<ScrollProgress />
				<SEO
					description={post.excerpt}
					previewImage={withPrefix(avatarPath(post.frontmatter.author.id))}
					keywords="designer, profile"
					pageTitle={
						`${post.frontmatter.author.id}` +
						' | Designing at Liferay since ' +
						`${moment(post.frontmatter.author.startDate).format('YYYY')}`
					}
					twitterHandle={post.frontmatter.author.twitter}
					contentType="profile"
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
													post.frontmatter.author.startDate,
												).format('YYYY')}
											</span>
										) : null}
									</h1>
									<div className={styles.role}>
										<h2>{post.frontmatter.author.title}</h2>
									</div>
									<img
										src={withPrefix(
											avatarPath(post.frontmatter.author.id),
										)}
									/>
								</Flex>
							)
						}}
					</MediaQuery>
				</Container>
				<div className={styles.markdownContainer}>
					<Flex margin="auto" direction="column" className={styles.wrapper}>
						<GlobalMdx>
							<MDXRenderer>{post.body}</MDXRenderer>
						</GlobalMdx>
					</Flex>
				</div>
				<RecentBlogPosts
					heading={'Recent posts by ' + `${post.frontmatter.author.id}`}
					teammate={makeAuthorSlug(post.frontmatter.author.id)}
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
					startDate
					title
					twitter
				}
			}
			body
			excerpt
		}
	}
`
