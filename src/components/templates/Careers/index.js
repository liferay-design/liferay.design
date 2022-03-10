/** @jsx jsx */

import { Flex, Icon, Text } from 'components/atoms'
import { GlobalMdx } from 'components/molecules'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Footer, Navbar } from 'components/organisms'
import { graphql } from 'gatsby'
import React, { Component } from 'react'
import { jsx, Button } from 'theme-ui'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'

export default class Careers extends Component {
	render() {
		const post = this.props.data.mdx
		const applyLink = `${(post.frontmatter.jobId === null
			? 'mailto:' + `${post.frontmatter.contact}`
			: 'https://app.jobvite.com/j?aj=' +
			  `${post.frontmatter.jobId}` +
			  '&s=liferay-dot-design')}`
		const seoDescription =
			`${post.frontmatter.title}` + ', ' + `${post.frontmatter.office.city}`
		const seoImage = 'https://liferay.design' + post.frontmatter.featuredImage

		return (
			<div>
				<Helmet>
					<title>{seoDescription}</title>
					<meta property="og:type" content="article" />
					<meta property="og:image" content={seoImage} />
					<meta
						name="keyword"
						content={
							'Careers, Liferay, Design, Liferay Design, open source design, ' +
							`${post.frontmatter.tags}`
						}
					/>
					<meta
						property="og:description"
						content={'A career opportunity at Liferay.Design'}
					/>
					<meta name="Description" content={seoDescription} />
					<meta property="og:title" content={seoDescription} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content="@liferaydesign" />
					<meta name="twitter:title" content={seoDescription} />
					<meta
						name="twitter:description"
						content={'A career opportunity at Liferay.Design'}
					/>
					<meta name="twitter:image" content={seoImage} />
					<meta name="twitter:creator" content="@liferaydesign" />
					{applyLink ? <link href={applyLink} rel="canonical" /> : null}
				</Helmet>
				<Navbar section="Careers" />

				<Flex justify="center" align="center" className={styles.banner}>
					<div className={styles.largeContainer}>
						<h1>
							{post.frontmatter.title}
							<span>
								{post.frontmatter.remote === true &&
								(post.frontmatter.office.country == 'Mexico' ||
									post.frontmatter.office.country == 'Brazil')
									? 'Remote in LATAM' + ', based in '
									: 'Remote in ' +
									  post.frontmatter.office.country +
									  ', based in '}
								{post.frontmatter.office.city},{' '}
								{post.frontmatter.office.state}{' '}
							</span>
						</h1>
					</div>
				</Flex>
				<div className={styles.mdxWrapper}>
					<Flex direction="column" className={styles.largeContainer}>
						<GlobalMdx>
							<MDXRenderer>{post.body}</MDXRenderer>
						</GlobalMdx>
						<div className={styles.applyContainer}>
							<Button
								as="a"
								target="new"
								href={applyLink}
								sx={{
									variant: 'buttons.primary',
								}}
							>
								{
									(post.frontmatter.jobId === null
										? 'Email us!'
										: 'Apply on Jobvite')
								}{' '}
								<Icon
									name="externalLink"
									sx={{
										margin: '0 .2rem 0 .4rem',
										height: '.8rem',
										width: '.8rem',
										fill: 'white',
									}}
								/>
							</Button>
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
				remote
				contact
				office {
					city
					state
					country
				}
				title
				featuredImage
			}
			body
		}
	}
`
