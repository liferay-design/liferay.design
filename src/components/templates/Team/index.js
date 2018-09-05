import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styles from './styles.module.scss'
import { cloneDeep, get, set } from 'lodash'
import { Footer, Navbar } from 'components/organisms'
import { Flex } from 'components/atoms'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

export default class Team extends Component {

	render() {
		const post = this.props.data.markdownRemark
		const markdown = this.props.data.allMarkdownRemark

		return (
			<div>
				<Navbar section="Team" />
				<div className={styles.markdownContainer}>
					<h1>{post.frontmatter.title}</h1>
					{/* <img src={post.frontmatter.featured_image}/> */}
					<h2>{post.frontmatter.description}</h2>

					<Flex className={styles.wrapper}>
						<div 						
						dangerouslySetInnerHTML={{
							__html: post.html,
						}}
						/>
					</Flex>
				</div>
				<Footer />
			</div>				
		)
	}
}

export const query = graphql`
	query($slug: String!) {
		allMarkdownRemark(filter: { fields: { slug: { regex: "/team/" } } }) {
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
				description
			}
		}
	}
`
