import { Flex } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import moment from 'moment'
import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class Articles extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<Navbar section="Articles" />

				<Flex justify="center" align="center" className={styles.banner}>
					<h1>
						{post.frontmatter.title}{' '}
						<span>
							by{' '}
							<a href={withPrefix(post.frontmatter.authorLink)}>
								{post.frontmatter.author}
							</a>
							<br />on{' '}
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
				title
				date
			}
			code {
				body
			}
		}
	}
`
