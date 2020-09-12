/** @jsx jsx */

import { jsx, Flex, Box, Image } from 'theme-ui'
import { Container, ScrollProgress } from 'components/atoms'
import { GlobalMdx, SEO, SocialIcons } from 'components/molecules'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Footer, Navbar, RecentBlogPosts } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import { cloneDeep, get, set } from 'lodash'
import { Component } from 'react'
import styles from './styles.module.scss'
import moment from 'moment'
import { avatarPath, makeAuthorSlug } from 'utils'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

export default class Team extends Component {
	render() {
		const post = this.props.data.mdx
		const teammate = post.frontmatter.author
		const links = teammate.links ? teammate.links : null // this is to catch people who dont have links
		const socials = links
			? [
					links.dribbble
						? {
								url: 'https://www.dribbble.com/' + links.dribbble,
								name: 'dribbble',
						  }
						: null,
					links.figma
						? {
								url: 'https://figma.com/@' + links.figma,
								name: 'figma',
						  }
						: null,
					links.github
						? {
								url: 'https://github.com/' + links.github,
								name: 'github',
						  }
						: null,
					links.instagram
						? {
								url: 'https://www.instagram.com/' + links.instagram,
								name: 'instagram',
						  }
						: null,
					links.medium
						? {
								url: 'https://www.medium.com/@' + links.medium,
								name: 'medium',
						  }
						: null,
					links.twitter
						? {
								url: 'https://twitter.com/' + links.twitter,
								name: 'twitter',
						  }
						: null,
			  ]
			: null

		return (
			<div>
				<ScrollProgress />
				<SEO
					description={post.excerpt}
					previewImage={withPrefix(avatarPath(teammate.id))}
					keywords="designer, profile"
					pageTitle={
						`${teammate.id}` +
						' | Designing at Liferay since ' +
						`${moment(teammate.startDate).format('YYYY')}`
					}
					twitterHandle={links ? links.twitter : null}
					contentType="profile"
				/>
				<Box
					sx={{
						position: 'absolute',
						top: ['0', '16%', null],
						left: ['0', '0', '0'],
						right: [null, '0', '0'],
						width: ['100%', '84%', '52%'],
						m: [null, '0 auto', null],
						height: '75vh',
						maxHeight: '768px',
						maxWidth: '640px',
						minWidth: '540px',
						'&::after': {
							content: '""',
							position: 'absolute',
							height: '60%',
							width: '100%',
							bottom: '0',
							left: '0',
							backgroundImage:
								'linear-gradient(to top,rgb(19, 20, 31) 0%,rgba(19, 20, 31, 0.987) 8.1%,rgba(19, 20, 31, 0.951) 15.5%,rgba(19, 20, 31, 0.896) 22.5%,rgba(19, 20, 31, 0.825) 29%,rgba(19, 20, 31, 0.741) 35.3%,rgba(19, 20, 31, 0.648) 41.2%,rgba(19, 20, 31, 0.55) 47.1%,rgba(19, 20, 31, 0.45) 52.9%,rgba(19, 20, 31, 0.352) 58.8%,rgba(19, 20, 31, 0.259) 64.7%,rgba(19, 20, 31, 0.175) 71%,rgba(19, 20, 31, 0.104) 77.5%,rgba(19, 20, 31, 0.049) 84.5%,rgba(19, 20, 31, 0.013) 91.9%,rgba(19, 20, 31, 0) 100%)',
						},
					}}
				>
					<Image
						sx={{ width: '100%', height: '100%' }}
						src={withPrefix(avatarPath(teammate.id))}
					/>
				</Box>
				<Navbar section="Team" />
				<Container banner>
					<Flex
						sx={{
							flexDirection: ['column', null, 'row'],
							height: ['70vh', null, '60vh'],
							justifyContent: 'space-between',
							alignItems: ['flex-end', 'center', null],
						}}
					>
						<div
							sx={{
								flexGrow: [1, null, 0],
								display: ['block', null, 'none'],
							}}
						/>
						<Flex
							sx={{
								zIndex: 1,
								alignSelf: ['flex-start', null, 'flex-end'],
								flexDirection: 'column',
							}}
						>
							<h1
								sx={{
									fontSize: [6, null, 7],
									color: 'mainL2',
									maxWidth: ['initial', null, '10ch'],
								}}
							>
								<span sx={{ color: 'white' }}>{teammate.id}</span>
								<span sx={{ display: 'block', fontSize: [4, null, 6] }}>
									{teammate.title}
								</span>
								{teammate.startDate ? (
									<span
										sx={{
											display: 'block',
											mt: 2,
											fontSize: 2,
											color: 'mainL3',
											fontWeight: 'body',
										}}
									>
										Designing at Liferay since{' '}
										{moment(teammate.startDate).format('YYYY')}
									</span>
								) : null}
							</h1>
						</Flex>
						{links ? (
							<SocialIcons
								socials={socials}
								sx={{
									alignSelf: ['flex-start', null, 'center'],
									flexDirection: ['row', null, 'column'],
									'> a': {
										color: 'mainL4',
										my: [0, null, 2],
										mx: [2, null, 0],
									},
									'> a:first-child': {
										ml: 0,
									},
								}}
							/>
						) : null}
					</Flex>
				</Container>
				<div className={styles.markdownContainer}>
					<Flex
						sx={{ margin: 'auto', flexDirection: 'column' }}
						className={styles.wrapper}
					>
						<GlobalMdx>
							<MDXRenderer>{post.body}</MDXRenderer>
						</GlobalMdx>
					</Flex>
				</div>
				<RecentBlogPosts
					heading={'Recent posts by ' + `${teammate.id}`}
					teammate={makeAuthorSlug(teammate.id)}
				/>
				<Footer light />
			</div>
		)
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				author {
					id
					startDate
					title
					links {
						dribbble
						figma
						github
						instagram
						medium
						twitter
						unsplash
						webflow
						website
					}
				}
			}
			body
			excerpt
		}
	}
`
