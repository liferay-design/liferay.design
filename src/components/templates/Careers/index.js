import { Flex, Icon, Text } from 'components/atoms'
import { GlobalMdx } from 'components/molecules'
import { Footer, Navbar } from 'components/organisms'
import { graphql } from 'gatsby'
import React, { Component } from 'react'
import { Button, styled } from 'reakit'
import { colors, fontSizes } from 'theme'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'


const ApplyButton = styled(Button)`
	background-color: ${colors['primary']}
	color: ${colors['white']}
	padding: ${fontSizes['medium']} ${fontSizes['large']}
	height: 100%
`

export default class Careers extends Component {
	render() {
		const post = this.props.data.mdx
		const applyLink =
			'https://app.jobvite.com/j?aj='+`${post.frontmatter.jobId}`+'&s=liferay-dot-design'
		const seoDescription = `${post.frontmatter.title}` + ', ' + `${post.frontmatter.office.city}`
		const seoImage = 'https://liferay.design' + post.frontmatter.featuredImage

		return (
			<div>
				<Helmet>
					<title>{seoDescription}</title>
					<meta property="og:type" content="article" />
					<meta
						property="og:image"
						content={seoImage}
					/>
					<meta
						name="keyword"
						content={
							'Liferay, Design, Liferay Design, open source design, ' +
							`${post.frontmatter.tags}`
						}
					/>
					<meta property="og:description" content={post.excerpt} />
					<meta name="Description" content={seoDescription}></meta>
					<meta
						property="og:title"
						content={seoDescription}
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@Liferay_Lexicon" />
					<meta name="twitter:title" content={seoDescription} />
					<meta name="twitter:description" content={'A career opportunity at Liferay.Design'} />
					<meta name="twitter:image" content={seoImage} />
  					<meta name="twitter:creator" content="@Liferay_Lexicon" />
					{applyLink ? (
						<link href={applyLink} rel="canonical" />
					) : null}
				</Helmet>
				<Navbar section="Careers" />

				<Flex justify="center" align="center" className={styles.banner}>
					<div className={styles.largeContainer}>
						<h1>
							{post.frontmatter.title}
							<span>{post.frontmatter.office.city}, {post.frontmatter.office.region} </span>
						</h1>
					</div>
				</Flex>
				<div className={styles.mdxWrapper}>
					<Flex direction="column" className={styles.largeContainer}>
						<GlobalMdx>{post.code.body}</GlobalMdx>
						<div className={styles.applyContainer}>
							<ApplyButton
								as="a"
								target="new"
								opaque="false"
								href={applyLink}
							>
								Apply on Jobvite{' '}
								<Icon
									name="externalLink"
									margin="0 .2rem 0 .1rem"
									height=".8rem"
									width=".8rem"
									fill="white"
								/>
							</ApplyButton>
							<Text type="p" style="italic">
								(apologies in advance :grimacing:)
							</Text>
						</div>
					</Flex>
				</div>
				<Footer light />
			</div>
		)
	}
}

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				jobId
				office {
					city
					region
				}
				title
				featuredImage
			}
			code {
				body
			}
		}
	}
`
