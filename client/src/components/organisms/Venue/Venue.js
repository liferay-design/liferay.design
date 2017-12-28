import { Flex, Heading, Icon, Text } from 'components/atoms'

import PropTypes from 'prop-types'
import React from 'react'
import classes from './Venue.scss'

const Venue = () => (
	<section className={classes.container}>
		<div className={classes.whiteBox} />

		<Flex justify="space-between" width="100%">
			<Heading bottomBorder level={2}>
				Venue
			</Heading>

			<Flex direction="column">
				<Heading color="white">Liferay Headquarters</Heading>

				<Text color="white">1400 Montefino Ave</Text>
				<Text color="white">Diamond Bar, CA 91765</Text>
				<Text color="white">Jan 22 – Jan 26</Text>
				<Text>directions</Text>

				<Flex justify="space-between">
					<Icon name="leftArrow" />
					<Icon name="rightArrow" />
					{'01 / 05'}
				</Flex>
			</Flex>

			<div className={classes.image1} />

			<div className={classes.image2} />
		</Flex>
	</section>
)

Venue.propTypes = {
	label: PropTypes.string,
	primaryHeader: PropTypes.string,
	secondaryHeader: PropTypes.string,
	tertiaryHeader: PropTypes.string,
}

export default Venue
