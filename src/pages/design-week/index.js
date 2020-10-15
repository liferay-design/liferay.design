/** @jsx jsx */

import { jsx, Grid, Box, Flex } from 'theme-ui'
import React from 'react'

import { AnimateIn, Icon, Link } from 'components/atoms'
import { SEO } from 'components/molecules'

import { Card, Heading, LoadingAnimation } from 'pages/design-week/components/_index'
import styles from './styles.module.scss'

export default class DesignWeek extends React.Component {
	render() {
		const baseDelay = '1.6'

		function getRandomBgImage(max) {
			return Math.floor(Math.random() * Math.floor(max))
		}

		const randomImage = getRandomBgImage(6)

		const bgImage = '/images/design-week/bg-' + randomImage + '.jpg'

		return (
			<>
				<SEO
					pageTitle="Design Week 2020 | Liferay Design"
					description="Liferay's Design Department Gathering"
					previewImage="/images/design-week/open-graph.png"
					twitterHandle="@liferaydesign"
				/>
				<LoadingAnimation size={'16rem'} />

				<Flex className={styles.page}>
					<AnimateIn delay={baseDelay * 1.05 + 's'}>
						<Link to="/">
							<Icon
								name="liferayDesicon"
								height="2rem"
								width="2rem"
								fill="white"
								margin="0 0 2rem -.2rem"
								className={styles.navIcon}
							/>
						</Link>
					</AnimateIn>
					<Grid
						sx={{
							gridTemplate: [
								'"hero" 3fr "sidebar" 1fr / auto',
								null,
								'"hero sidebar" 100vh / 3fr minmax(400px, 1fr)',
							],
							gridGap: 0,
							width: '100%',
						}}
					>
						<Box sx={{ gridArea: 'hero', position: 'relative' }}>
							<div
								sx={{
									height: '100%',
									width: '100%',
									position: 'absolute',
									backgroundSize: 'cover',
									opacity: 0,
									transform: 'translateX(-3rem)',
									backgroundImage: `${'url("' + bgImage + '")'}`,
									animation: 'bgAnimateIn 2s ease-in-out 1s forwards',
									'@keyframes bgAnimateIn' : {
										'0%': {
											opacity: 0,
											transform: 'translateX(-3rem)',
										},
										'30%': {
											opacity: 1,
										},
										'100%': {
											transform: 'translateX(0rem)',
											opacity: 1,
										},
									},
								}}
							/>
							<Heading
								bgImage={bgImage}
								delay={baseDelay}
								title="Design Week"
							/>
						</Box>
						<Box
							sx={{ gridArea: 'sidebar', bg: 'white' }}
							className={styles.cta}
						>
							<Card
								place="127.0.0.1"
								date="Nov 16—20"
								cta="RSVP"
								ctaUrl="https://forms.gle/mMF2BWyh3G4ByHrt8"
								delay={baseDelay}
							/>
						</Box>
					</Grid>
				</Flex>
			</>
		)
	}
}
