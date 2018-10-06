import React from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'
import { Sidebar, FooterMarkdown } from 'components/organisms'
import { AuthContainer } from 'components/molecules'
import { ContainerMarkdown, Flex } from 'components/atoms'
import { PrivatePage } from 'components/templates'
import { Grid } from 'reakit'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const template = `
	"sidebar main" auto / 18rem 1fr
`

export default function Blueprints({ data: { allMdx, mdx }, location: { pathname } }) {
	return (
		<PrivatePage
			message="You must be a Liferay Employee to view this page"
			section="Blueprints"
		>
			<div className={styles.sans}>
				<Grid template={template} className={styles.mainContentWrapper}>
					<Sidebar path={pathname} tree={buildSidebarTree(allMdx)} />

					<ContainerMarkdown>
						<Flex
							justify="space-between"
							align="baseline"
							className={styles.header}
						>
							<h1>{mdx.frontmatter.title}</h1>

							<AuthContainer />
						</Flex>

						<MDXRenderer className={styles.body}>{mdx.code.body}</MDXRenderer>

						<FooterMarkdown light />
					</ContainerMarkdown>
				</Grid>
			</div>
		</PrivatePage>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		allMdx(filter: { fields: { slug: { regex: "/blueprints/" } } }) {
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

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

function buildSidebarTree(markdownNodes) {
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
