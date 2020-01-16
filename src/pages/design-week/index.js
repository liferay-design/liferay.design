import React from 'react'

import { Flex } from 'components/atoms'
import { SEO } from 'components/molecules'

import { Grid } from 'reakit'
import MediaQuery from 'react-responsive'

import { Card, Heading, LoadingAnimation } from 'pages/design-week/components/_index'
import styles from './styles.module.scss'
import { sizes, spacing } from 'theme'

const DesignWeek = () => {
	return (
		<>
			<SEO
				pageTitle="Design Week 2020 | Liferay Design"
				description="Liferay's Design Department Gathering"
				previewImage="/images/design-week/open-graph.png"
				twitterHandle="@liferaydesign"
			/>
			<MediaQuery maxWidth={sizes.medium}>
				{matches => {
					let gridTemplate = matches
						? ` "hero" 67%
                        "sidebar" auto / 1fr`
						: `"hero hero sidebar" 100vh / 1fr 1fr 1fr`
					return (
						<Flex className={styles.page}>
							<Grid template={gridTemplate} className={styles.grid}>
								<Grid.Item area="sidebar">
									<Card
										place="Los Angeles, CA"
										date="Mar 23—27"
										cta="RSVP"
										ctaUrl="https://forms.gle/PSkzN2vNmwjLz2B37"
									/>
								</Grid.Item>
								<Grid.Item area="hero">
									<Heading title="Design Week" />
								</Grid.Item>
							</Grid>
						</Flex>
					)
				}}
			</MediaQuery>
			<LoadingAnimation size={spacing.xLarge} />
		</>
	)
}

export default DesignWeek
