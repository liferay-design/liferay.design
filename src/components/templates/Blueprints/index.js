import { ContainerMarkdown, Flex, Icon, SiteName, Text } from 'components/atoms'
import { AuthContainer } from 'components/molecules'
import { FooterMarkdown, Sidebar } from 'components/organisms'
import { PrivatePage } from 'components/templates'
import { graphql } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import { Grid } from 'reakit'
import styles from './styles.module.scss'
import MediaQuery from 'react-responsive'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

export default class Blueprints extends Component {
	state = {
		mobileSidebarVisible: false,
	}

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

	toggleMobileSidebarVisibility = () => {
		console.log('toggle')
		this.setState(state => {
			return { mobileSidebarVisible: !state.mobileSidebarVisible }
		})
	}

	render() {
		const post = this.props.data.markdownRemark
		const markdown = this.props.data.allMarkdownRemark

		const sidebarTree = this.buildSidebarTree(markdown)
		console.log('render')
		return (
			<PrivatePage
				message="You must be a Liferay Employee to view this page"
				section="Blueprints"
			>
				<div className={styles.sans}>
					<MediaQuery maxWidth={767}>
						{matches => {
							console.log('render')
							return (
								<Grid
									template={
										matches
											? `"sidebar main" auto / ${
													this.state.mobileSidebarVisible
														? '1fr 0'
														: '0 1fr'
											  }`
											: `"sidebar main" auto / 18rem 1fr`
									}
									className={styles.mainContentWrapper}
								>
									{matches && (
										<Flex
											background="#f7f8f9"
											className={styles.mobileNavbar}
											justify="space-between"
											padding="2rem 1.5rem"
										>
											<SiteName section="Blueprints" dark />
											<AuthContainer />
										</Flex>
									)}

									<Sidebar
										path={this.props.location.pathname}
										tree={sidebarTree}
									/>

									<ContainerMarkdown>
										<Flex
											justify="space-between"
											align="baseline"
											className={styles.header}
										>
											<h1>{post.frontmatter.title}</h1>

											{!matches && <AuthContainer />}
										</Flex>

										<div
											className={styles.body}
											dangerouslySetInnerHTML={{
												__html: post.html,
											}}
										/>

										<FooterMarkdown light />

										<Flex
											align="center"
											className={styles.mobileMenuBar}
											justify="space-between"
										>
											<Icon margin="0" name="logoDark" />

											<Flex
												onClick={
													this.toggleMobileSidebarVisibility
												}
											>
												{this.state.mobileSidebarVisible ? (
													<Icon name="close" />
												) : (
													<Text color="white">Menu</Text>
												)}
											</Flex>
										</Flex>
									</ContainerMarkdown>
								</Grid>
							)
						}}
					</MediaQuery>
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
