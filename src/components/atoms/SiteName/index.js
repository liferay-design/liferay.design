import React from 'react'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SiteName = ({ dark, section }) => {
	var str = section
	if (str !== undefined) {
		var lowerCaseSection = str.toLowerCase()
	}

	return (
		<div className={`${styles.siteName} ${dark && styles.dark}`}>
			<Link to="/">Liferay.Design</Link>
			{section && <Link to={lowerCaseSection}> / {section}</Link>}
		</div>
	)
}

SiteName.propTypes = {
	dark: PropTypes.bool,
	section: PropTypes.string,
}

export default SiteName
