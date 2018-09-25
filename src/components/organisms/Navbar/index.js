import React from 'react'
import styles from './styles.module.scss'
import { SiteName, NavItems } from 'components/molecules'
import PropTypes from 'prop-types'

const Navbar = ({ section }) => {
	// TODO: Add custom nav items for events page
	// const navItems = ['agenda', 'blueprints', 'dashboard', 'team', 'venue']

	// {navItems.map(item => (
	// 	<Heading key={`heading_${item}`} level={4} className={styles.entryLabel}>
	// 		<a href={`#${item}`}>{item}</a>
	// 	</Heading>
	// ))}

	return (
		<nav className={styles.container}>
			<SiteName section={section} />
			<NavItems />
		</nav>
	)
}

Navbar.propTypes = {
	href: PropTypes.string,
	selected: PropTypes.string,
}

export default Navbar
