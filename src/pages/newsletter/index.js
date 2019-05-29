import { CardGrid, Icon, Link, Heading, Text, Container } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { Banner, Footer, Navbar } from 'components/organisms'
import React from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
	return (
		<div>
			<Helmet>
				<title>Newsletter | Brand Guidelines for Liferay</title>
			</Helmet>
			<Navbar />
			<Container padding="4rem 0 0">
				<Heading color="white" level="1">
					Get Updates from Liferay's Design Team!
				</Heading>
				<form
					method="POST"
					name="newsletter"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					<div className={styles.field}>
						{/* <label htmlFor="email">Email</label> */}
						<span className={styles.fancyInput}>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="Your Email Address"
							/>
						</span>
					</div>
					<ul className="actions">
						<li>
							<span className={styles.fancyInput}>
								<input
									type="submit"
									value="Subscribe Now"
									className="special"
								/>
							</span>
						</li>
					</ul>
					<input type="hidden" name="bot-field" />
					<input type="hidden" name="form-name" value="contact" />
				</form>
			</Container>
			<Container background="#fff" padding="8rem 0 8rem">
				<Heading level={2} color="black" padding="4rem">
					More musings
				</Heading>
				<CardGrid>
					{data.allMdx.edges.map(({ node }) => (
						<CardDefault
							avatarImage
							key={node.id}
							imageURL={node.frontmatter.featuredImage}
							link={node.fields.slug}
							title={node.frontmatter.title}
							subtitle={node.frontmatter.description}
							avatarImageURL={node.frontmatter.avatar}
						/>
					))}
				</CardGrid>
			</Container>
			<Footer />
		</div>
	)}

export const query = graphql`
	{
		allMdx(
			limit: 3
			filter: { fileAbsolutePath: { regex: "/(articles)/" } }
			sort: { order: DESC, fields: [frontmatter___date] }
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						description
						featuredImage
						author
						avatar
						date(formatString: "MMMM DD, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
