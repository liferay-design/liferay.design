import { Link } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const SiteName = ({ dark, section }) => {
	var str = section
	if (str !== undefined) {
		var lowerCaseSection = str.toLowerCase()
	}

	return (
		<div className={`${styles.siteName} ${dark && styles.dark}`}>
			<Link to="/">Liferay.Design</Link>
			{section && <Link to={'/' + `${lowerCaseSection}`}> / {section}</Link>}
		</div>
	)
}

SiteName.propTypes = {
	dark: PropTypes.bool,
	section: PropTypes.string,
}

export default SiteName
