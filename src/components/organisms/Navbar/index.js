import React from 'react'
import { Flex, Heading } from 'components/atoms'
import styles from './styles.module.scss'
import { AuthContainer } from 'components/organisms'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
			<Link className={styles.siteName} to="/">Liferay.Design {section && `/ ${section}`}</Link>

			<Flex className={styles.entry} align="center">
				<Link to="/articles">Articles</Link>

				<Link to="/team">Team</Link>

				<Link to="/resources">Resources</Link>

				<AuthContainer />
			</Flex>
		</nav>
	)
}

Navbar.propTypes = {
	href: PropTypes.string,
	selected: PropTypes.string,
}

export default Navbar
