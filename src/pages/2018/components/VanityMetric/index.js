import { Flex } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const VanityMetric = ({ number, description, size }) => {
	return (
		<Flex justify="center" direction="column" className={styles.stat}>
			<svg height={size} width={size}>
				<g className={styles.circle}>
					<circle cx="50%" cy="50%" r="50%" stroke="none" />
				</g>
			</svg>
			<div className={styles.f3}>{number}</div>
			<div className={styles.p}>{description}</div>
		</Flex>
	)
}

VanityMetric.propTypes = {
	number: PropTypes.string,
	description: PropTypes.string,
	size: PropTypes.string,
}

export default VanityMetric
