import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { Footer, Navbar } from 'components/organisms'
import { Flex } from 'components/atoms'
import { withPrefix } from 'gatsby'

export default class Articles extends Component {

	render() {
		const post = this.props.data.markdownRemark

		return	<div>
				<Navbar section="Articles" />

				<Flex justify="center" align="center" className={styles.banner}>
					<h1>
						{post.frontmatter.title} <span>
							by <a href={withPrefix(post.frontmatter.authorLink)}>
								{post.frontmatter.author}
							</a>
						</span>
					</h1>
					<div className={styles.role}>
						<h2>{post.frontmatter.description}</h2>
					</div>
				</Flex>
				<div className={styles.markdownContainer}>
					<Flex direction="column" className={styles.wrapper}>
						<div dangerouslySetInnerHTML={{ __html: post.html }} />
					</Flex>
				</div>
				<Footer light />
			</div>
	}
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				author
				authorLink
				description
			}
		}
	}
`
