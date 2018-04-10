import { Heading } from 'components/atoms'
import { Navbar } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Header.module.scss'

const Header = () => (
	<div>
		<Heading level={3} color="white" className={classes.container}>
			Liferay.Design
		</Heading>

		<Navbar />
	</div>
)

export default Header
