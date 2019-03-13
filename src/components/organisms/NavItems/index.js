import React from 'react'
import { Flex } from 'components/atoms'
import { AuthContainer } from 'components/molecules'
import PropTypes from 'prop-types'
import { Link } from 'components/atoms'

import styles from './styles.module.scss'

const NavItems = () => {
	return (
		<Flex className={styles.entry} align="center">
			<Flex className={styles.items}>
				<Link to="/articles">Articles</Link>
				
				<Link to="/careers">Careers</Link>
				
				<Link to="/events">Events</Link>

				<Link to="/team">Team</Link>

				<Link to="/resources">Resources</Link>
			</Flex>

			<AuthContainer />
		</Flex>
	)
}

NavItems.propTypes = {
	href: PropTypes.string,
	selected: PropTypes.string,
}

export default NavItems
