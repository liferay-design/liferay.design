import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const CardGrid = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

CardGrid.propTypes = {
	children: PropTypes.node,
}

export default CardGrid
