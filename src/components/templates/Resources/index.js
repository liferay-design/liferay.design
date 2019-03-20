import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { Footer, Navbar } from 'components/organisms'
import { Container, Flex } from 'components/atoms'
import { withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

export default class Resources extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<Navbar section="Resources" />

				<Flex justify="center" align="center" className={styles.banner}>
					<Flex direction="column" className={styles.bannerContent}>
						<h1>{post.frontmatter.title} </h1>
					</Flex>
				</Flex>
				<div className={styles.markdownContainer}>
					<Container>
						<Flex direction="column" className={styles.wrapper}>
							<MDXRenderer>{post.code.body}</MDXRenderer>
						</Flex>
					</Container>
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
						startDateTime
						endDateTime
						locationName
						locationURL
						heroImage
						summary
						bodyImage
						ctaURL
					}
					code {
						body
					}
				}
			}
		`
