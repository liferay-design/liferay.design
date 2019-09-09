import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const ContainerMarkdown = ({ isMobile, isMobileSidebarVisible, children }) => {
	return (
		<div
			className={`${styles.markdownContainer} ${
				isMobile && isMobileSidebarVisible ? styles.hide : ''
			} ${isMobile ? styles.mobile : ''}`}
		>
			{children}
		</div>
	)
}

ContainerMarkdown.propTypes = {
	children: PropTypes.node,
}

export default ContainerMarkdown
