import { Flex } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Container } from 'components/atoms';

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
				<Container>
					<Flex justify="center" align="center" className={styles.banner}>
						<h1>{post.frontmatter.name}</h1>
						<div className={styles.role}>
							<h2>{post.frontmatter.title}</h2>
						</div>
						<img src={withPrefix(post.frontmatter.headshotFun)} />
					</Flex>
				</Container>
				<div className={styles.markdownContainer}>
					<Flex margin="auto" direction="column" className={styles.wrapper}>
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
				name
				title
				headshotFun
			}
			code {
				body
			}
		}
	}
`
