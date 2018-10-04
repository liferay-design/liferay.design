import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'
import { Footer, Navbar } from 'components/organisms'
import { Flex } from 'components/atoms'
import { withPrefix } from 'gatsby'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

export default class Team extends Component {

	render() {
		const post = this.props.data.markdownRemark

		return <div>
				<Navbar section="Team" />

				<Flex justify="center" align="center" className={styles.banner}>
					<h1>{post.frontmatter.title}</h1>
					<div className={styles.role}><h2>{post.frontmatter.description}</h2></div>
					<img src={withPrefix(post.frontmatter.featuredImage)} />
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
						description
						featuredImage
					}
				}
			}
		`
