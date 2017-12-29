import { List, Map } from 'immutable'

import { Heading } from 'components/atoms'
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
		<Heading level={5} color="white" className={classes.siteName}>
			Liferay.Design
		</Heading>

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
