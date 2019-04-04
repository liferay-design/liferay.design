import React from 'react'
import { MainLayout } from 'components/templates'
import { HeroBanner, Posts } from 'components/organisms'
import { CardDefault } from 'components/molecules'
import { CardGrid, Container, Heading, Link } from 'components/atoms'

export default ({ data }) => {
	return (
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
