import React from 'react'
import { Flex, Heading, Icon } from 'components/atoms'
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
			<Flex align="center">
				<Icon width="10rem" name="liferay" />

				<Heading level={3} padding="0">
					{section}
				</Heading>
			</Flex>

			<Link to="/blueprints">Blueprints</Link>

			<a href="dashboard-liferaydotdesign.wedeploy.io">Dashboard</a>

			<Link to="/handbook">Handbook</Link>

			<Link to="/events">Events</Link>

			<AuthContainer>Sign In</AuthContainer>
		</nav>
	)
}

Navbar.propTypes = {
	href: PropTypes.string,
	selected: PropTypes.string,
}

export default Navbar
