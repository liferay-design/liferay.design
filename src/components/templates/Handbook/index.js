import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'
import { Flex } from 'components/atoms'
import { Sidebar, Footer, Navbar } from 'components/organisms'
import { PrivatePage } from 'components/templates'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

export default class Handbook extends Component {
	buildSidebarTree(markdownNodes) {
		const sidebarTree = markdownNodes.edges.reduce((currentTree, currentValue) => {
			const slug = currentValue.node.fields.slug
			const title = currentValue.node.frontmatter.title

			const slugArr = slug
				.split('/')
				.filter(slug => slug !== '')
				.slice(1)

			const treePath = slugArr.join('.children.')
			const sidebarItemValue = { title, slug }

			return upsertAtPath(treePath, sidebarItemValue, currentTree)
		}, {})

		return sidebarTree
	}

	render() {
		const post = this.props.data.mdx
		const markdown = this.props.data.allMdx

		const sidebarTree = this.buildSidebarTree(markdown)

		return (
			<PrivatePage
				message="You must be a Liferay Employee to view this page"
				section="Handbook"
			>
				<Navbar section="Handbook" />
				{/* <Sidebar path={this.props.location.pathname} tree={sidebarTree}/> */}

				<div className={styles.markdownContainer}>
					<Flex direction="column" className={styles.wrapper}>
						<h1>{post.frontmatter.title}</h1>

						<MDXRenderer>{post.code.body}</MDXRenderer>
					</Flex>
				</div>
				<Footer light />
			</PrivatePage>
		)
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		allMdx(filter: { fields: { slug: { regex: "/handbook/" } } }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
			}
		}

		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
			}
			code {
				body
			}
		}
	}
`
