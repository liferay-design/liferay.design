import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const Container = ({ children, background, padding }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ background: `${background}`, padding: `${padding}` }}
		>
			<div className={styles.container}>{children}</div>
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node,
}

export default Container
