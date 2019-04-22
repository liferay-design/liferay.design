import { Flex, Icon, Text } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import React, { Component } from 'react'
import { Button, styled } from 'reakit'
import { colors, fontSizes } from 'theme'
import styles from './styles.module.scss'

const ApplyButton = styled(Button)`
	background-color: ${colors['primary']}
	color: ${colors['white']}
	padding: ${fontSizes['medium']} ${fontSizes['large']}
	height: 100%
`

export default class Careers extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<Navbar section="Careers" />

				<Flex justify="center" align="center" className={styles.banner}>
					<div className={styles.largeContainer}>
						<h1>
							{post.frontmatter.title}
							<span>{post.frontmatter.cityRegion} </span>
						</h1>
						{/* <div className={styles.role}>
						<h2>{post.frontmatter.description}</h2>
					</div> */}
					</div>
				</Flex>
				<div className={styles.mdxWrapper}>
					<Flex direction="column" className={styles.largeContainer}>
						<MDXRenderer>{post.code.body}</MDXRenderer>
						<div className={styles.applyContainer}>
							<ApplyButton
								as="a"
								target="new"
								opaque="false"
								href={post.frontmatter.applyLink}
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
				cityRegion
				applyLink
				description
				title
			}
			code {
				body
			}
		}
	}
`
