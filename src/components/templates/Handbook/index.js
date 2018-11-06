import { ContainerMarkdown, Flex, Icon, SiteName, Text } from 'components/atoms'
import { AuthContainer } from 'components/molecules'
import { FooterMarkdown } from 'components/organisms'
import { PrivatePage } from 'components/templates'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

export default class Handbook extends Component {
	render() {
		const {
			data: { allMdx, mdx },
			location: { pathname },
		} = this.props

		const template = `"main" auto / 1fr`

		return (
			<PrivatePage
				message="You must be a Liferay Employee to view this page"
				section="Handbook"
			>
				<Grid template={template} className={styles.mainContentWrapper}>
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
					</ContainerMarkdown>
					<FooterMarkdown light />
				</Grid>
			</PrivatePage>
		)
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		allMdx(filter: { fields: { slug: { regex: "/(handbook)/" } } }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						order
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
