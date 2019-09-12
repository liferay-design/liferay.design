import { Container, Flex, Link, Image } from 'components/atoms'
import { Tags, GlobalMdx } from 'components/molecules'
import { Footer, Navbar } from 'components/organisms'
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
				<Helmet>
					<title>
						{post.frontmatter.title} &mdash; an article by{' '}
						{post.frontmatter.author.id} on Liferay.Design
					</title>
					<meta property="og:type" content="article" />
					<meta
						property="og:image"
						content={
							'https://liferay.design' +
							post.frontmatter.featuredImage
						}
					/>
					<meta name="keyword" content={"Liferay, Design, Liferay Design, open source design, " + `${post.frontmatter.tags}`} />
					<meta property="og:description" content={post.excerpt}/>
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
									style = {{
										color:colors.primaryl3,
										textDecoration:"underline",
										textDecorationColor:colors.primary,
									}}
									to={withPrefix(
										'/team/' +
											`${post.frontmatter.author.slug}`,
									)}
								>{post.frontmatter.author.id}</Link>
								&nbsp;on {' '}
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
						className={styles.featuredImage}
						src={post.frontmatter.featuredImage}
					/>
					<Flex direction="column" className={styles.wrapper}>
						<GlobalMdx>{post.code.body}</GlobalMdx>
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
			excerpt
			code {
				body
			}
		}
	}
`
