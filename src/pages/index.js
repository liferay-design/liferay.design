import { CardGrid, Container, Heading } from 'components/atoms'
import { BillboardAlt, CardDefault } from 'components/molecules'
import { HeroBanner } from 'components/organisms'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	return (
		<div>
			<BillboardAlt
				image="/images/posts/design-week-n.jpg"
				heading="Join Us!"
				subtitle="We're hiring Graphic Designers and Product Designers in Frankfurt, Milan, and Los Angeles — check out our careers page to read about the openings!"
				cta="See if we're a fit"
				ctaUrl="careers"
				background="white"
			/>
			<div
				style={{
					backgroundAttachment: 'fixed',
					backgroundColor: '#13141f',
					backgroundImage: 'url("/images/diamond-bar-topography.png")',
					backgroundRpeat: 'noRepeat repeat',
					backgroundSize: '100%',
					position: 'relative',
				}}
			>
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
		</div>
	)
}

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
