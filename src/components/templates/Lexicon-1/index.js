/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { ContainerMarkdown, Flex, Icon, SiteName, Text, Link } from 'components/atoms'
import { AuthContainer, GlobalMdx } from 'components/molecules'
import { Footer, Sidebar } from 'components/organisms'
import { graphql } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import lexicon from 'theme/lexicon.module.scss'
import documentation from 'theme/documentation.module.scss'

export default class Lexicon extends Component {
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
			<div className={`${lexicon.theme} ${documentation.theme}`}>
				<MediaQuery maxWidth={767}>
					{matches => {
						return (
							<Grid
								sx={{ variant: 'grids.sideNav' }}
								className={documentation.mainContentWrapper}
							>
								{matches && (
									<Flex
										className={documentation.mobileNavbar}
										justify="space-between"
										padding="2rem 1rem"
									>
										<SiteName section="Lexicon-1" dark />
										{/* <AuthContainer /> */}
									</Flex>
								)}

								<Sidebar
									lexicon
									path={pathname}
									tree={buildSidebarTree(allMdx)}
									isMobile={matches}
									showSidebar={this.state.mobileSidebarVisible}
									section="Lexicon-1"
								/>

								<div>
									<ContainerMarkdown>
										<Flex justify="space-between" align="baseline">
											<h1>{mdx.frontmatter.title}</h1>

											{/* {!matches && <AuthContainer />} */}
										</Flex>

										{mdx.frontmatter.titleLabelLink ? (
											<span>
												<Link
													className={lexicon.labelLink}
													to={mdx.frontmatter.titleLabelLink}
												>
													VIEW IN CLAY
												</Link>
											</span>
										) : null}

										{mdx.frontmatter.description ? (
											<p className={lexicon.description}>
												{mdx.frontmatter.description}
											</p>
										) : null}

										<GlobalMdx>
											<MDXRenderer>{mdx.body}</MDXRenderer>
										</GlobalMdx>
									</ContainerMarkdown>
									<Footer markdown light />
								</div>

								<Flex
									align="center"
									className={documentation.mobileMenuBar}
									justify="space-between"
								>
									<Icon name="lexicon" color="white" height="2rem" />

									{this.state.mobileSidebarVisible ? (
										<Icon
											name="close"
											color="white"
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
		allMdx(filter: { fields: { slug: { regex: "/lexicon-1/" } } }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						order
						title
						description
						titleLabelLink
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
				description
				titleLabelLink
			}
			body
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
