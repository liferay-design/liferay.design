/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import {
	ContainerMarkdown,
	Flex,
	Icon,
	SiteName,
	Text,
	Link,
	PrivateComponent,
} from 'components/atoms'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { AuthContainer, GlobalMdx } from 'components/molecules'
import { Footer, PreviousNext, Sidebar } from 'components/organisms'
import { graphql } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import lexicon from 'theme/lexicon.module.scss'
import documentation from 'theme/documentation.module.scss'
import { Helmet } from 'react-helmet'
import { isAuthenticated, isClassified } from 'utils'
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

		const post = this.props.data.mdx
		const seoDescription =
			`${post.frontmatter.title}` + ' on Lexicon by Liferay.Design'
		const seoImage = 'https://liferay.design/images/resources/lexicon-cover.png'
		console.log(mdx.id, 'id')
		return (
			<div className={`${lexicon.theme} ${documentation.theme}`}>
				<Helmet>
					<title>{seoDescription}</title>
					<meta property="og:type" content="article" />
					<meta property="og:image" content={seoImage} />
					<meta
						name="keyword"
						content={
							'Lexicon, Experience Design Language, Design System, Design at Scale, Liferay, Design, Liferay Design, open source design, ' +
							`${post.frontmatter.tags}`
						}
					/>
					<meta
						property="og:description"
						content={post.frontmatter.description}
					/>
					<meta name="Description" content={seoDescription} />
					<meta
						property="og:title"
						content={post.frontmatter.title + ' — Lexicon by Liferay.Design'}
					/>

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@Liferay_Lexicon" />
					<meta name="twitter:title" content={seoDescription} />
					<meta
						name="twitter:description"
						content={post.frontmatter.description}
					/>
					<meta name="twitter:image" content={seoImage} />
					<meta name="twitter:creator" content="@Liferay_Lexicon" />
				</Helmet>
				<MediaQuery maxWidth={767}>
					{matches => {
						return (
							<Grid
								sx={{ variant: 'grids.sideNav' }}
								className={`${documentation.mainContentWrapper} ${lexicon.mainContentWrapper}`}
							>
								{matches && (
									<Flex
										className={documentation.mobileNavbar}
										justify="space-between"
										padding="2rem 1rem"
									>
										<SiteName section="Lexicon" dark />
										{/* <AuthContainer /> */}
									</Flex>
								)}

								<Sidebar
									lexicon
									path={pathname}
									tree={buildSidebarTree(allMdx)}
									isMobile={matches}
									showSidebar={this.state.mobileSidebarVisible}
									section="Lexicon"
								/>

								<div>
									<ContainerMarkdown>
										<Flex justify="space-between" align="baseline">
											<h1>{mdx.frontmatter.title}</h1>

											{/* {!matches && <AuthContainer />} */}
										</Flex>

										{mdx.frontmatter.figmaLink ? (
											<Link
												className={lexicon.labelInfoFull}
												to={mdx.frontmatter.figmaLink}
											>
												View in Figma
											</Link>
										) : null}

										{mdx.frontmatter.titleLabelLink ? (
											<Link
												className={lexicon.labelInfo}
												to={mdx.frontmatter.titleLabelLink}
											>
												View in Clay
											</Link>
										) : null}

										{mdx.frontmatter.docLink ? (
											// <PrivateComponent>
											<Link
												className={lexicon.labelInfo}
												to={
													isAuthenticated()
														? mdx.frontmatter.docLink
														: null
												}
											>
												{isAuthenticated() ? null : (
													<Icon
														name="lock"
														sx={{
															height: '1em',
															width: '1em',
														}}
													/>
												)}
												Documentation
											</Link>
										) : // </PrivateComponent>
										// TODO finish PrivateComponent
										null}

										{mdx.frontmatter.productName ? (
											<Link className={lexicon.labelNeutral}>
												{mdx.frontmatter.productName}
											</Link>
										) : null}

										{mdx.frontmatter.devStatus ? (
											<Link className={lexicon.labelDraft}>
												{mdx.frontmatter.devStatus}
											</Link>
										) : null}

										{mdx.frontmatter.description ? (
											<p className={lexicon.description}>
												{mdx.frontmatter.description}
											</p>
										) : null}

										<GlobalMdx>
											<MDXRenderer>{mdx.body}</MDXRenderer>
										</GlobalMdx>
										{/* <PreviousNext section='lexicon' current={post.id} /> */}
									</ContainerMarkdown>
									<Footer markdown light />
								</div>

								<Flex
									align="center"
									className={documentation.mobileMenuBar}
									justify="space-between"
								>
									<Icon name="lexicon" color="white" height="2em" />

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
		allMdx(
			filter: {
				fields: { slug: { regex: "/(/lexicon/)/" } }
				frontmatter: { draft: { eq: false } }
			}
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						order
						title
						description
						titleLabelLink
						figmaLink
						docLink
						devStatus
						productName
					}
					fields {
						slug
					}
				}
			}
		}

		mdx(fields: { slug: { eq: $slug } }) {
			id
			frontmatter {
				title
				description
				titleLabelLink
				figmaLink
				docLink
				devStatus
				productName
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
