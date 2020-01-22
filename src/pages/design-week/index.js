import React from 'react'

import { Flex, Image, AnimateIn, Icon, Link } from 'components/atoms'
import { SEO } from 'components/molecules'

import { Grid } from 'reakit'

import { Card, Heading, LoadingAnimation } from 'pages/design-week/components/_index'
import styles from './styles.module.scss'
import { spacing } from 'theme'

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
				<LoadingAnimation size={spacing.xLarge} />

				<Flex className={styles.page}>
					<div className={styles.bgImage} style={{backgroundImage:`${'url("'+ bgImage + '")'}`}} />
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
					<Grid className={styles.grid}>
						<Grid.Item area="sidebar" style={{background:'white', height:'100%', width:'100%'}} className={styles.sidebar}>
						</Grid.Item>
						<Grid.Item area="hero">
							<Heading
								bgImage={bgImage}
								delay={baseDelay}
								title="Design Week"
							/>
						</Grid.Item>
						<Grid.Item area="sidebar" className={styles.cta}>
							<Card
								place="Los Angeles, CA"
								date="Mar 23—27"
								cta="RSVP"
								ctaUrl="https://forms.gle/PSkzN2vNmwjLz2B37"
								delay={baseDelay}
							/>
						</Grid.Item>
					</Grid>
				</Flex>
			</>
		)
	}
}
