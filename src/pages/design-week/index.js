/** @jsx jsx */

import { jsx, Grid, Box, Flex } from 'theme-ui'
import React from 'react'

import { Image, AnimateIn, Icon, Link } from 'components/atoms'
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
					<div
						className={styles.bgImage}
						style={{ backgroundImage: `${'url("' + bgImage + '")'}` }}
					/>
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
							gridTemplate: '"hero hero sidebar" 100vh / 1fr 1fr 1fr',
						}}
					>
						<Box
							sx={{
								area: 'sidebar',
								backgroundColor: 'white',
								height: '100%',
								width: '100%',
							}}
							className={styles.sidebar}
						></Box>
						<Box sx={{ gridArea: 'hero' }}>
							<Heading
								bgImage={bgImage}
								delay={baseDelay}
								title="Design Week"
							/>
						</Box>
						<Box sx={{ gridArea: 'sidebar' }} className={styles.cta}>
							<Card
								place="Los Angeles, CA"
								date="Mar 23—27"
								cta="RSVP"
								ctaUrl="https://forms.gle/PSkzN2vNmwjLz2B37"
								delay={baseDelay}
							/>
						</Box>
					</Grid>
				</Flex>
			</>
		)
	}
}
