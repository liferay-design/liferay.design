import { CardGrid, Container, Heading } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	const cardData = data.allMdx.edges

	// // Prereqs for conditional date rendering
	// const d1 = new Date(); // Get today's date
	// const today = d1.getTime(); // convert to date object
	// const d2 = new Date(moment(cardData.node.frontmatter.startDateTime).format("YYYY/MM/DD")); // get the date from the frontmatter
	// const eventDate = d2.getTime(); // convert the event's date to a date object

	// // Separate current and past events
	// const pastEvents = cardData.filter(({ node }) => false)

	return (
		<MainLayout section="Events">
			<Container>
				{/* <Heading level={1} color="white" padding="4rem">
					Upcoming Events
				</Heading>

				<Heading level={1} color="white" padding="4rem">
					Past Events
				</Heading> */}
				<Heading level={1} color="white" padding="4rem">
					We Love to Host!
				</Heading>
				<CardGrid>
					{cardData.map(({ node }) => (
						<CardDefault
							pill
							// tag={node.frontmatter.tag}
							key={node.id}
							imageURL={node.frontmatter.featuredImage}
							link={node.fields.slug}
							title={node.frontmatter.title}
							subtitle={node.frontmatter.description}
							icon={node.frontmatter.author}
						/>
					))}
				</CardGrid>
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
	{
		allMdx(
			filter: {
				fileAbsolutePath: { regex: "/(events)/" }
				frontmatter: { draft: { eq: false } }
			}
			sort: { order: DESC, fields: [frontmatter___startDateTime] }
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
						startDateTime
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

// TODO: set up some filter so that past / future events are separated
