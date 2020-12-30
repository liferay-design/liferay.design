/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { Container } from 'components/atoms'
import { CardDefault, BillboardAlt } from 'components/molecules'
import { HeroBanner, TopBlogPosts } from 'components/organisms'
import { useStaticQuery, graphql } from 'gatsby'
import { MainLayout } from 'components/templates'

export default () => {
	const data = useStaticQuery(graphql`
		query {
			lexiconCover: file(
				relativePath: { eq: "images/resources/lexicon-cover.png" }
			) {
				childImageSharp {
					fluid {
						src
					}
				}
			}
			figmaUtilities: file(
				relativePath: { eq: "images/resources/figma-component-library.png" }
			) {
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
			<BillboardAlt
				annualReport
				heading="What a Year!"
				subtitle="Not even 2020 could stop us from releasing our 3rd annual&nbsp;report!"
				cta="Check it out"
				ctaUrl="/2020"
				background="white"
			/>
			<div
				sx={{
					backgroundAttachment: 'fixed',
					backgroundColor: 'black',
					backgroundImage: 'url("/images/diamond-bar-topography.png")',
					backgroundRpeat: 'noRepeat repeat',
					backgroundSize: '100%',
					position: 'relative',
				}}
			>
				<MainLayout>
					<HeroBanner />
					<Container heading="What's New" padding={{ px: 0, pt: 2, pb: 5 }}>
						<TopBlogPosts />
					</Container>
					<Container
						heading="Resources"
						sx={{ color: 'black' }}
						padding={{ px: 0, pt: 4, pb: 3 }}
						linkText="Get More"
						linkDestination="/resources"
						background={
							'linear-gradient(to bottom, #fff, #fff 80%, #13141F 80%)'
						}
					>
						<Grid sx={{ variant: 'grids.twoCards' }}>
							<CardDefault
								aspectRatio="16:9"
								imageURL={data.lexiconCover.childImageSharp.fluid.src}
								icon="lexicon"
								title="Lexicon Design System"
								subtitle="Our open-source system for designing enterprise software"
								link="/lexicon"
							/>
							<CardDefault
								aspectRatio="16:9"
								imageURL={data.figmaUtilities.childImageSharp.fluid.src}
								icon="fa_figma"
								title="Free Figma Resources"
								subtitle="Utilities and components to help you speed up your workflow"
								link="/resources/figma"
							/>
						</Grid>
					</Container>
				</MainLayout>
			</div>
		</div>
	)
}
