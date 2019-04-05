import React from 'react'
import { MainLayout } from 'components/templates'
import { HeroBanner, Posts } from 'components/organisms'
import { BillboardAlt, CardDefault } from 'components/molecules'
import { CardGrid, Container, Heading, Link, Flex, Button, Text } from 'components/atoms'

export default ({ data }) => {
	return (
		<div>
			<BillboardAlt image="/images/posts/design-week-n.jpg"
			heading="Join Us!"
			subtitle="We're hiring Graphic Designers and Product Designers in Frankfurt, Milan, and Los Angeles — check out our careers page to read about the openings!"
			cta="See if we're a fit"
			ctaUrl="careers"
			background="white" />
			<MainLayout>
				<HeroBanner />
				<Container>
					<Heading level={2} color="white" padding="4rem">
						What's New
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
					{/* <Link to="/articles">More Articles</Link> */}
				</Container>
			</MainLayout>
		</div>
	)}

export const query = graphql`
{
	allMdx(limit: 3, filter: { fileAbsolutePath: { regex: "/(articles)/" } }, sort: { order: DESC, fields: [frontmatter___date] }) {
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
}`
