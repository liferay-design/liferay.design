import { List, Map } from 'immutable'

import { Navbar } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Header.scss'

const AGENDA = 'agenda'
const TEAM = 'team'
const VENUE = 'venue'

export const navKeys = {
	[VENUE]: 'venue',
	[AGENDA]: 'agenda',
	[TEAM]: 'team',
}

const Header = ({ selected }) => (
	<div className={classes.container}>
		<h2 className={classes.siteName}>{'Liferay.Design'}</h2>

		<Navbar
			className={classes.navbar}
			href={`#{option}`}
			options={List([VENUE, AGENDA, TEAM])}
			optionsMap={Map(navKeys)}
			selected={selected}
			key="navbar"
		/>
	</div>
)

Header.propTypes = {
	selected: PropTypes.string,
}

export default Header
