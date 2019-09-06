import { CardGrid, Container, Heading, Link } from 'components/atoms'
import { BillboardAlt, CardDefault } from 'components/molecules'
import { HeroBanner, TopBlogPosts } from 'components/organisms'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
	return (
		<div>
			<BillboardAlt
				image="/images/banner/0.jpg"
				heading="Join Us!"
				subtitle="We're hiring Product Designers! Check out our careers page to learn more."
				cta="See if we're a fit"
				ctaUrl="careers/"
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
						<TopBlogPosts />
						<Link to="/articles">More Articles</Link>
					</Container>
					<Container background="white">
						<Heading level={2} color="black" padding="4rem">
							Resources
						</Heading>
						<CardGrid two>
							<CardDefault 
								imageURL='/images/resources/lexicon-cover.png'
								icon='lexicon'
								title='Lexicon: An Experience Language for Crafting Beautiful UI'
								subtitle='Our open-source Design Language for Enterprise Software'
								link='/lexicon'
							/>
							<CardDefault 
								imageURL='/images/resources/figma-utilities.png'
								icon='fa_figma'
								title='Figma Files'
								subtitle='Our open-source library of Figma resources.'
								link='/resources/figma'
							/>
						</CardGrid>
						<Link to="/resources">Resources</Link>
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
					timeToRead
					frontmatter {
						title
						featuredImage
						author {
							slug
							avatar
						}
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
