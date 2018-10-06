import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'
import { Footer, Navbar } from 'components/organisms'
import { Flex } from 'components/atoms'
import { withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

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
				<Navbar section="Team" />

				<Flex justify="center" align="center" className={styles.banner}>
					<h1>{post.frontmatter.title}</h1>
					<div className={styles.role}>
						<h2>{post.frontmatter.description}</h2>
					</div>
					<img src={withPrefix(post.frontmatter.featuredImage)} />
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
			}
			code {
				body
			}
		}
	}
`
