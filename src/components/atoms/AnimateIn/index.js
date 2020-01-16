import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const AnimateIn = ({
	delay,
	children
}) => {

	return (
		<div className={styles.animateIn} style={ delay ? {animationDelay:`${delay}`} : null }>
			{children}
		</div>
	)
}

AnimateIn.propTypes = {
	delay: PropTypes.any,
}

export default AnimateIn
