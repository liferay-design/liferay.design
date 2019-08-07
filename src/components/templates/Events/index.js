import { Flex } from 'components/atoms'
import { Footer, Navbar } from 'components/organisms'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import moment from 'moment'
import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class Events extends Component {
	render() {
		const post = this.props.data.mdx

		// Prereqs for conditional date rendering
		const d1 = new Date() // Get today's date
		const today = d1.getTime() // convert to date object
		const d2 = new Date(moment(post.frontmatter.startDateTime).format('YYYY/MM/DD')) // get the date from the frontmatter
		const eventDate = d2.getTime() // convert the event's date to a date object

		return (
			<div>
				<Navbar section="Events" />

				<Flex justify="center" align="center" className={styles.banner}>
					<Flex direction="column" className={styles.bannerContent}>
						<h1>
							<Flex justify="center" align="center" direction="column">
								<span>
									{' '}
									{moment(post.frontmatter.startDateTime).format('MMM')}
								</span>
								<span>
									{' '}
									{moment(post.frontmatter.startDateTime).format('DD')}
								</span>
							</Flex>
							{post.frontmatter.title}{' '}
						</h1>
						<h2>
							<span className={styles.startTime}>
								{moment(post.frontmatter.startDateTime).format('h:mma')}
							</span>
							{post.frontmatter.endDateTime && (
								<span className={styles.endTime}>
									&nbsp; – &nbsp;
									{moment(post.frontmatter.endDateTime).format('h:mma')}
								</span>
							)}
							<span className={styles.locationName}>
								<a href={post.frontmatter.office.mapURL} target="_blank">
									{post.frontmatter.office.id}, {post.frontmatter.office.region}
								</a>
							</span>
						</h2>
						{post.frontmatter.heroImage && (
							<img
								className={styles.heroImage}
								src={post.frontmatter.heroImage}
							/>
						)}
						<p className={styles.summary}>{post.frontmatter.summary}</p>
						{post.frontmatter.bodyImage && (
							<img
								className={styles.bodyImage}
								src={post.frontmatter.bodyImage}
							/>
						)}
					</Flex>
				</Flex>
				{today < eventDate ? (
					<a
						href={post.frontmatter.ctaURL}
						className={styles.ctaButton}
						target="_blank"
					>
						RSVP
					</a>
				) : null}
				<div className={styles.markdownContainer}>
					<Flex direction="column" className={styles.wrapper}>
						{post.frontmatter.author ? (
							// <Author id={post.frontmatter.author.id} />
							<Author 
								id={post.frontmatter.author.id} 
								avatar={post.frontmatter.author.avatar} 
								slug={post.frontmatter.author.slug} 
								/>
						) : null}
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
				title
				office {
					id
					city
					region
					mapURL
				}
				startDateTime
				author {
					id
					avatar
					slug		
				}
				endDateTime
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
