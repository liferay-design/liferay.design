import { Heading } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Navbar.module.scss'

const Navbar = () => {
	const navItems = ['agenda', 'team', 'venue']

	return (
		<div className={classes.container}>
			{navItems.map(item => (
				<Heading key={`heading_${item}`} level={4} className={classes.entryLabel}>
					<a href={`#${item}`}>{item}</a>
				</Heading>
			))}
		</div>
	)
}

Navbar.propTypes = {
	href: PropTypes.string,
	selected: PropTypes.string,
}

export default Navbar
