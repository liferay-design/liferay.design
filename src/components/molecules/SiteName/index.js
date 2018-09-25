import React from 'react'
import styles from './styles.module.scss'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SiteName = ({ section }) => {

	return (
		<Link className={styles.siteName} to="/">
			Liferay.Design {section && `/ ${section}`}
		</Link>
	)
}

// SiteName.propTypes = {
// 	href: PropTypes.string,
// 	selected: PropTypes.string,
// }

export default SiteName
