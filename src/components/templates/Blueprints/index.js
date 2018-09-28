import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'
import { Sidebar, FooterMarkdown } from 'components/organisms'
import { AuthContainer } from 'components/molecules'
import { ContainerMarkdown, Flex } from 'components/atoms'
import { PrivatePage } from 'components/templates'
import { Grid } from 'reakit'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

const template = `
	"sidebar main" auto / 18rem 1fr
`;
export default class Blueprints extends Component {
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

			if (!treePath.includes('children')) {
				sidebarItemValue.firstLevel = true
			}

			return upsertAtPath(treePath, sidebarItemValue, currentTree)
		}, {})

		return sidebarTree
	}

	render() {
		const post = this.props.data.markdownRemark
		const markdown = this.props.data.allMarkdownRemark

		const sidebarTree = this.buildSidebarTree(markdown)

		return (
			<PrivatePage
				message="You must be a Liferay Employee to view this page"
				section="Blueprints"
			>
				<div className={styles.sans}>
					<Grid template={template} className={styles.mainContentWrapper}>
						<Sidebar path={this.props.location.pathname} tree={sidebarTree} />
						<ContainerMarkdown>
							<Flex justify="space-between" align="baseline" className={styles.header}>
								<h1>{post.frontmatter.title}</h1>
								<AuthContainer />
							</Flex>
							<div className={styles.body}
								dangerouslySetInnerHTML={{
									__html: post.html,
								}}
							/>
							<FooterMarkdown light />
						</ContainerMarkdown>
					</Grid>
				</div>
			</PrivatePage>
		)
	}
}

export const query = graphql`
	query($slug: String!) {
		allMarkdownRemark(filter: { fields: { slug: { regex: "/blueprints/" } } }) {
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

		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`
