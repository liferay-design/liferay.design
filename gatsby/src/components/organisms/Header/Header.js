import { Heading } from 'components/atoms'
import { Navbar } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Header.module.scss'

const Header = () => (
	<div className={classes.container}>
		<Heading level={3} color="white" className={classes.siteName}>
			Liferay.Design
		</Heading>

		{/* <Navbar /> */}
	</div>
)

Header.propTypes = {
	selected: PropTypes.string,
}

export default Header
