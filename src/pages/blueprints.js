import React from 'react'
import { Link, graphql } from 'gatsby'
import { Heading, Text, Icon } from 'components/atoms'
import { Footer, Banner, Navbar } from 'components/organisms'
import styles from './blueprints.module.scss'
import { Grid, Cell, Card, CardTitle, CardText, } from 'react-md'

const Blueprints = () => (
		<div>
			<Navbar/>
			<Banner/>
			<div className={styles.teasers}>
				<div className={styles.container}>
					<Grid>
						<Cell size={1}>
							<Text color="#c4cacb" weight="700" size="12px" type="p" className={styles.vertical}>Explore Blueprints</Text>
						</Cell>
						<Cell size={5}>
							<Link className={styles.cardLink} to="/blueprints/about">
								<Card className={styles.card}>
									<Icon name="why-blueprints" />
									<CardTitle>Why Blueprints?</CardTitle>
									<CardText>A single source of truth for Liferay so that we can go far, together.</CardText>
									<CardText>Read More</CardText>
								</Card>
							</Link>
						</Cell>
						<Cell size={5}>
							<Link className={styles.cardLink} to="/blueprints/about">
								<Card className={styles.card}>
									<Icon name="logos" />
									<CardTitle>Just the Logos, Please</CardTitle>
									<CardText>We know what you’re looking for, and we respect that. That's why this is at the top of the page.</CardText>
									<CardText>Waffle Time</CardText>
								</Card>
							</Link>
						</Cell>
					</Grid>
					<Grid>
						<Cell offset={1} size={10}>
							<Link className={styles.cardLink} to="/blueprints/about">
								<Card className={styles.card}>
									<Icon name="resources" />
									<CardTitle>Resources</CardTitle>
									<CardText>The reason you've come to this site&mdash;logos, colors, fonts, images&mdash;get it all right here!</CardText>
									<CardText>Get 'Em</CardText>
								</Card>
							</Link>
						</Cell>
					</Grid>
					<Grid>
						<Cell offset={1} size={5}>
							<Link className={styles.cardLink} to="/blueprints/about">
								<Card className={styles.card}>
									<Icon name="faqs" />
									<CardTitle>FAQ</CardTitle>
									<CardText>Have a question? We have frequently given answers.</CardText>
									<CardText>Why is the Liferay Blue</CardText>
								</Card>
							</Link>
						</Cell>
						<Cell size={5}>
							<Link className={styles.cardLink} to="/blueprints/about">
								<Card className={styles.card}>
									<Icon name="liferay-design" />
									<CardTitle>Liferay.Design</CardTitle>
									<CardText>Shameless plug for the people behind all of this stuff&mdash;see what else we're doing.</CardText>
									<CardText>Experience Liferay.Design</CardText>
								</Card>
							</Link>
						</Cell>
						<Cell size={1}>
							<Link className={styles.social} to="https://github.com/liferay-design"><Icon fill="white" name="github" /></Link>
							<Link className={styles.social} to="https://dribbble.com/liferay"><Icon fill="white" name="dribbble" /></Link>
							<Link className={styles.social} to="https://twitter.com/liferaydesign"><Icon fill="white" name="twitter" /></Link>
						</Cell>
					</Grid>
				</div>
			</div>
			<section>
				<Icon name="jira"/>
				<Heading level={2}>Need something?</Heading>
				<Text>Head over to Jira and <Link href="https://issues.liferay.com/secure/CreateIssueDetails!init.jspa?pid=10780&issuetype=17" target="_blank">create an issue</Link>!</Text>
			</section>
			<Footer></Footer>
		</div>
	)

	export default Blueprints
	
// get all posts
{/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

{data.allMarkdownRemark.edges.map(({ node }) => (
	<div key={node.id}>
		<Link to={node.fields.slug}>
			<h3>{node.frontmatter.title}</h3>

			<p>{node.excerpt}</p>
		</Link>
	</div>
))} 	 */}

// export const query = graphql`
// 	{
// 		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blueprints)/" } }) {
// 			totalCount
// 			edges {
// 				node {
// 					id
// 					frontmatter {
// 						title
// 					}
// 					fields {
// 						slug
// 					}
// 					excerpt
// 				}
// 			}
// 		}
// 	}
// `
