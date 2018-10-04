import React from 'react'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SiteName = ({ dark, section }) => {
	return (
		<Link className={`${styles.siteName} ${dark && styles.dark}`} to="/">
			Liferay.Design {section && `/ ${section}`}
		</Link>
	)
}

SiteName.propTypes = {
	dark: PropTypes.bool,
	section: PropTypes.string,
}

export default SiteName
