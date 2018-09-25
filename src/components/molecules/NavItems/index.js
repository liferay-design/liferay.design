import React from 'react'
import { Flex } from 'components/atoms'
import styles from './styles.module.scss'
import { AuthContainer } from 'components/organisms'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavItems = () => {

	return (
		<Flex className={styles.entry} align="center">
			<Link to="/articles">Articles</Link>

			<Link to="/team">Team</Link>

			<AuthContainer />
		</Flex>
	)
}

NavItems.propTypes = {
	href: PropTypes.string,
	selected: PropTypes.string,
}

export default NavItems
