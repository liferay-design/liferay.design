import { ContainerMarkdown, Flex, Icon, SiteName, Text, Link } from 'components/atoms'
import { AuthContainer, GlobalMdx, SEO } from 'components/molecules'
import { Footer, Sidebar } from 'components/organisms'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import documentation from 'theme/documentation.module.scss'
import blueprints from 'theme/blueprints.module.scss'
import moment from 'moment'
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
			<div className={`${blueprints.theme} ${documentation.theme} ${styles.neumorphism}`}>
				<SEO
					description={mdx.excerpt}
					keywords="Liferay Design Handbook, handbook, designer handbook"
					pageTitle={mdx.frontmatter.title}
					previewImage="https://liferay.design/images/handbook/handbook.png"
					contentType="article"
				/>
				<MediaQuery maxWidth={767}>
					{matches => {
						let gridTemplate = matches
							? `"nav" 8rem "main" 1fr / 1fr`
							: `"sidebar main" auto / 20rem 1fr`

						return (
							<Grid
								template={gridTemplate}
								className={documentation.mainContentWrapper}
							>
								{matches && (
									<Flex
										className={documentation.mobileNavbar}
										justify="space-between"
										padding="2rem 1rem"
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

								<div className={`${styles.contentWrapper} ${documentation.contentWrapper}`}
									isMobile={matches}
									isMobileSidebarVisible={
										this.state.mobileSidebarVisible
									}
								>
									{mdx.frontmatter.template === 'landingPage' ? (
										<GlobalMdx>
											<MDXRenderer>{mdx.body}</MDXRenderer>
										</GlobalMdx>
									) : (
										<>
											{' '}
											<ContainerMarkdown>
												<Flex
													justify="space-between"
													align="baseline"
												>
													<h1>{mdx.frontmatter.title}</h1>

													{!matches && <AuthContainer />}
												</Flex>

												<GlobalMdx>
													<MDXRenderer>{mdx.body}</MDXRenderer>
												</GlobalMdx>
												<Flex
													align="center"
													justify="space-between"
												>
													<Text style="italic">
														Last modified on{' '}
														<Link
															target="_new"
															to={
																'https://github.com/liferay-design/liferay.design/commits/master/src/' +
																`${mdx.parent.relativePath}`
															}
														>
															{moment(
																mdx.parent.mtime,
															).format('YYYY.MM.DD')}
														</Link>
													</Text>
													<Link
														target="_new"
														to={
															'https://github.com/liferay-design/liferay.design/tree/master/src/' +
															`${mdx.parent.relativePath}`
														}
														style={{textDecoration:'none'}}
													>
														<Flex
															align="center"
															className={styles.github}
														>
															<Icon
																name="github"
																width="1em"
																margin="0 .5em"
															/>
															<Text weight="heavy">
																Edit on Github
															</Text>
														</Flex>
													</Link>
												</Flex>
											</ContainerMarkdown>
											<Footer markdown light />
										</>
									)}
								</div>

								<Flex
									align="center"
									className={documentation.mobileMenuBar}
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
			</div>
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
				template
			}
			body
			excerpt
			parent {
				... on File {
					mtime
					relativePath
				}
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
