import { ContainerMarkdown, Flex, Icon, SiteName, Text } from 'components/atoms'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { AuthContainer, GlobalMdx } from 'components/molecules'
import { FooterMarkdown, Sidebar } from 'components/organisms'
import { graphql } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import lexicon from 'theme/lexicon.module.scss'
import documentation from 'theme/documentation.module.scss'
import { Helmet } from 'react-helmet'

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
										padding="2rem 1.5rem"
									>
										<SiteName section="Lexicon" dark />
										<AuthContainer />
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

								<div
									isMobile={matches}
									isMobileSidebarVisible={
										this.state.mobileSidebarVisible
									}
								>
									<ContainerMarkdown>
										<Flex justify="space-between" align="baseline">
											<h1>{mdx.frontmatter.title}</h1>

											{!matches && <AuthContainer />}
										</Flex>

										{mdx.frontmatter.titleLabelLink ? (
											<span>
												<a
													className={lexicon.labelWarning}
													href={mdx.frontmatter.titleLabelLink}
													target="_blank"
												>
													VIEW IN CLAY
												</a>
											</span>
										) : null}

										{mdx.frontmatter.productName ? (
											<span>
												<a
													className={lexicon.labelInfo}
													target="_blank"
												>
													{mdx.frontmatter.productName}
												</a>
											</span>
										) : null}

										{mdx.frontmatter.devStatus ? (
											<span>
												<a
													className={lexicon.labelDraft}
													target="_blank"
												>
													{mdx.frontmatter.devStatus}
												</a>
											</span>
										) : null}

										{mdx.frontmatter.description ? (
											<p className={lexicon.description}>
												{mdx.frontmatter.description}
											</p>
										) : null}

										<GlobalMdx>
											<MDXRenderer>{mdx.code.body}</MDXRenderer>
										</GlobalMdx>
									</ContainerMarkdown>
									<FooterMarkdown light />
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
			frontmatter {
				title
				description
				titleLabelLink
				devStatus
				productName
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
