import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const Container = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

Container.propTypes = {
	children: PropTypes.node,
}

export default Container
