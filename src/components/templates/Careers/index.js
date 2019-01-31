import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { Icon, Text } from 'components/atoms'
import { styled, Button } from 'reakit'
import { Footer, Navbar } from 'components/organisms'
import { Flex } from 'components/atoms'
import { withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { colors, fontSizes, fontWeights } from 'theme'

const ApplyButton = styled(Button)`
	background-color: ${colors["primary"]}
	color: ${colors["white"]}
	padding: ${fontSizes["medium"]} ${fontSizes["large"]}
`


export default class Careers extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<Navbar section="Careers" />

				<Flex justify="center" align="center" className={styles.banner}>
					<div className={styles.largeContainer}>
					<h1>{post.frontmatter.title} 
						<span>{post.frontmatter.author} </span>
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
								href={post.frontmatter.authorLink}
							>
								Apply on Jobvite <Icon name="externalLink" margin="0 .2rem 0 .1rem" height=".8rem" width=".8rem" fill="white" />
							</ApplyButton>
							<Text type="p" style="italic">(apologies in advance :grimacing:)</Text>
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
				author
				authorLink
				description
				title
			}
			code {
				body
			}
		}
	}
`
