import { CardGrid, Container } from 'components/atoms'
import { BillboardAlt, CardDefault } from 'components/molecules'
import { HeroBanner, TopBlogPosts } from 'components/organisms'
import { MainLayout } from 'components/templates'
import React from 'react'
import { spacing, colors } from 'theme'

export default () => {
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
						padding={
							`${spacing.small}` + ' 0 ' + `${spacing.large}`
						}
					>
						<TopBlogPosts />
					</Container>
					<Container
						heading="Resources"
						color="black"
						padding={
							`${spacing.large}` + ' 0 ' + `${spacing.small}`
						}
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
								imageURL="/images/resources/lexicon-cover.png"
								icon="lexicon"
								title="Lexicon Design System"
								subtitle="Our open-source system for designing enterprise software"
								link="/lexicon"
							/>
							<CardDefault
								aspectRatio="16-9"
								imageURL="/images/resources/figma-utilities.png"
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