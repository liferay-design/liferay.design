import { ContainerMarkdown, Flex, Icon, SiteName, Text } from 'components/atoms'
import { AuthContainer } from 'components/molecules'
import { FooterMarkdown, Sidebar } from 'components/organisms'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

export default class Handbook extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mobileSidebarVisible: false,
		}

		this.toggleMobileSidebarVisibility = this.toggleMobileSidebarVisibility.bind(this)
	}

	toggleMobileSidebarVisibility() {
		this.setState(state => {
			return { mobileSidebarVisible: !state.mobileSidebarVisible }
		})
	}

	render() {
		const {
			data: { allMdx, mdx },
			location: { pathname },
		} = this.props

		return (
					<MediaQuery maxWidth={767}>
					{matches => {
						let gridTemplate = matches
							? `"nav" 8rem "main" 1fr / 1fr`
							: `"sidebar main" auto / 20rem 1fr`

						return (
							<Grid
								template={gridTemplate}
								className={styles.mainContentWrapper}
							>
								{matches && (
									<Flex
										className={styles.mobileNavbar}
										justify="space-between"
										padding="2rem 1.5rem"
									>
										<SiteName section="Handbook" dark />
										<AuthContainer />
									</Flex>
								)}

								<Sidebar
									path={pathname}
									tree={buildSidebarTree(allMdx)}
									isMobile={matches}
									showSidebar={this.state.mobileSidebarVisible}
									section="Handbook"
								/>

								<div
									className={styles.body}
									isMobile={matches}
									isMobileSidebarVisible={
										this.state.mobileSidebarVisible
									}
								>
									<ContainerMarkdown>
										<Flex
											justify="space-between"
											align="baseline"
											className={styles.header}
										>
											<h1>{mdx.frontmatter.title}</h1>

											{!matches && <AuthContainer />}
										</Flex>

										<MDXRenderer className={styles.body}>
											{mdx.code.body}
										</MDXRenderer>
									</ContainerMarkdown>
									<FooterMarkdown light />
								</div>

								<Flex
									align="center"
									className={styles.mobileMenuBar}
									justify="space-between"
								>
									<Icon name="logoDark" />

									{this.state.mobileSidebarVisible ? (
										<Icon
											name="close"
											onClick={this.toggleMobileSidebarVisibility}
										/>
									) : (
										<Text
											color="white"
											onClick={this.toggleMobileSidebarVisibility}
										>
											Menu
										</Text>
									)}
								</Flex>
							</Grid>
						)
					}}
				</MediaQuery>
		)
	}
}

export const pageQuery = graphql`
			query($slug: String!) {
				allMdx(
					filter: {
						fileAbsolutePath: { regex: "/(handbook)/" }
						frontmatter: { publish: { eq: true } }
					}
				) {
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

function buildSidebarTree(markdownNodes) {
	const sidebarTree = markdownNodes.edges.reduce((currentTree, currentValue) => {
		const slug = currentValue.node.fields.slug
		const title = currentValue.node.frontmatter.title
		const order = currentValue.node.frontmatter.order || title

		const slugArr = slug
			.split('/')
			.filter(slug => slug !== '')
			.slice(1)

		const treePath = slugArr.join('.children.')
		const sidebarItemValue = { order, title, slug }

		if (!treePath.includes('children')) {
			sidebarItemValue.firstLevel = true
		}

		return upsertAtPath(treePath, sidebarItemValue, currentTree)
	}, {})

	return sidebarTree
}
