import { Container, Flex } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import React, { Component } from 'react'
import styles from './styles.module.scss'

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
