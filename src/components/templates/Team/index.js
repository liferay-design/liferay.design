import { Container, Flex, ScrollProgress } from 'components/atoms'
import { GlobalMdx, SEO, SocialIcons } from 'components/molecules'
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
		const teammate = post.frontmatter.author
		const links = teammate.links ? teammate.links : null // this is to catch people who dont have links

		return (
			<div>
				<ScrollProgress />
				<SEO
					description={post.excerpt}
					previewImage={withPrefix(avatarPath(teammate.id))}
					keywords="designer, profile"
					pageTitle={
						`${teammate.id}` +
						' | Designing at Liferay since ' +
						`${moment(teammate.startDate).format('YYYY')}`
					}
					twitterHandle={links ? links.twitter : null}
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
										{teammate.id}{' '}
										{teammate.startDate ? (
											<span className={styles.startYear}>
												Designing at Liferay since{' '}
												{moment(teammate.startDate).format(
													'YYYY',
												)}
											</span>
										) : null}
									</h1>
									<div className={styles.role}>
										<SocialIcons />
										{/* <h2>{teammate.title}</h2> */}
									</div>
									<img src={withPrefix(avatarPath(teammate.id))} />
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
					heading={'Recent posts by ' + `${teammate.id}`}
					teammate={makeAuthorSlug(teammate.id)}
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
					links {
						dribbble
						figma
						github
						instagram
						medium
						twitter
						unsplash
						webflow
						website
					}
				}
			}
			body
			excerpt
		}
	}
`
