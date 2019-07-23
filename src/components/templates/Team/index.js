import { Flex } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql, withPrefix } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { cloneDeep, get, set } from 'lodash'
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Container } from 'components/atoms'
import MediaQuery from 'react-responsive'
import moment from 'moment'

function upsertAtPath(path, value, obj) {
	obj = cloneDeep(obj)
	const pathValue = get(obj, path)
	set(obj, path, { ...pathValue, ...value })

	return obj
}

export default class Team extends Component {
	render() {
		const post = this.props.data.mdx

		return (
			<div>
				<Navbar section="Team" />
				<Container>
					<MediaQuery maxWidth={767}>
						{matches => {
							return (
								<Flex justify={matches ? "center" : "center"} align={matches ? "center" : "center"} className={styles.banner}>
									<h1>{post.frontmatter.author.id} { post.frontmatter.author.startDate ? <span className={styles.startYear}>Designing at Liferay since {moment(post.frontmatter.author.startDate).format('YYYY')}</span> : null}</h1>
									<div className={styles.role}>
										<h2>{post.frontmatter.author.title}</h2>
									</div>
									<img src={withPrefix(post.frontmatter.author.avatar)} />
								</Flex>
							)
						}}
					</MediaQuery>
				</Container>
				<div className={styles.markdownContainer}>
					<Flex margin="auto" direction="column" className={styles.wrapper}>
						<MDXRenderer>{post.code.body}</MDXRenderer>
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
				author {
					id
					slug
					startDate
					title
					avatar
				}
			}
			code {
				body
			}
		}
	}
`
