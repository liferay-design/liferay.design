import { CardGrid, Container } from 'components/atoms'
import { CardDefault } from 'components/molecules'
import { HeroBanner, TopBlogPosts } from 'components/organisms'
import { useStaticQuery, graphql } from 'gatsby'

import { MainLayout } from 'components/templates'
import React from 'react'
import { spacing, colors } from 'theme'

export default () => {
	const data = useStaticQuery(graphql`
		query {
			lexiconCover: file(relativePath: { eq: "images/resources/lexicon-cover.png" }) {
				childImageSharp {
					fluid {
						src
					}
				}
			}
			figmaUtilities: file(relativePath: { eq: "images/resources/figma-utilities.png" }) {
				childImageSharp {
					fluid {
						src
					}
				}
			}
		}
	`)
	return (
		<div>
			<div
				style={{
					backgroundAttachment: 'fixed',
					backgroundColor: `${colors.black}`,
					backgroundImage: 'url("/images/diamond-bar-topography.png")',
					backgroundRpeat: 'noRepeat repeat',
					backgroundSize: '100%',
					position: 'relative',
				}}
			>
				<MainLayout>
					<HeroBanner />
					<Container
						heading="What's New"
						padding={`${spacing.small}` + ' 0 ' + `${spacing.large}`}
					>
						<TopBlogPosts />
					</Container>
					<Container
						heading="Resources"
						color="black"
						padding={`${spacing.large}` + ' 0 ' + `${spacing.small}`}
						linkText="Get More"
						linkDestination="/resources"
						background={
							'linear-gradient(to bottom, ' +
							`${colors.white}` +
							', ' +
							`${colors.white}` +
							' 80%, ' +
							`${colors.black}` +
							' 80%)'
						}
					>
						<CardGrid two>
							<CardDefault
								aspectRatio="16-9"
								imageURL={data.lexiconCover.childImageSharp.fluid.src}
								icon="lexicon"
								title="Lexicon Design System"
								subtitle="Our open-source system for designing enterprise software"
								link="/lexicon"
							/>
							<CardDefault
								aspectRatio="16-9"
								imageURL={data.figmaUtilities.childImageSharp.fluid.src}
								icon="fa_figma"
								title="Figma Files"
								subtitle="Utilities and components to help you speed up your workflow"
								link="/resources/figma"
							/>
						</CardGrid>
					</Container>
				</MainLayout>
			</div>
		</div>
	)
}