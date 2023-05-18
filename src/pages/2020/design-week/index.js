/** @jsx jsx */

import { jsx, Grid, Box, Flex } from 'theme-ui'
import React from 'react'

import { SEO } from 'components/molecules'

import { Card, Hero, LoadingAnimation } from 'pages/2020/design-week/components/_index'
import styles from './styles.module.scss'

export default class DesignWeek extends React.Component {
	render() {
		const baseDelay = '1.6'
		let colors = [
			'charts.blue',
			'charts.orange',
			'charts.red',
			'charts.teal',
			'charts.pink',
			'charts.green',
			'charts.purple',
			'charts.yellow',
			'charts.cyan',
			'charts.indigo',
		]

		let randomColor = colors[Math.floor(Math.random() * colors.length)]

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
						<Hero color={randomColor} delay={baseDelay} />
						<Box
							sx={{ gridArea: 'sidebar', bg: 'white' }}
							className={styles.cta}
						>
							<Card
								color={randomColor}
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
