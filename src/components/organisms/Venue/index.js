import { Flex, Heading, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const Venue = () => (
	<section className={styles.container} id="venue">
		<div className={styles.whiteBox} />

		<Flex className={styles.venueInfo} justify="space-between" width="100%">
			<Heading bottomBorder level={2}>
				Venue
			</Heading>

			<Flex className={styles.address} direction="column">
				<Heading className={`f4`} color="white">
					Liferay Headquarters
				</Heading>

				<Text color="white">1400 Montefino Ave</Text>
				<Text color="white">Diamond Bar, CA 91765</Text>

				<a href="https://www.google.com/maps/dir//1400+Montefino+Ave,+Diamond+Bar,+CA+91765/@33.9976775,-117.8166972,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c32c919220bdf5:0x178fae061af36379!2m2!1d-117.8145085!2d33.9976731">
					{' '}
					directions{' '}
				</a>
			</Flex>
			<div className={styles.carousel}>
				<div className={styles.image + ' ' + styles.jess} />

				<div className={styles.image + ' ' + styles.ray} />
			</div>
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
