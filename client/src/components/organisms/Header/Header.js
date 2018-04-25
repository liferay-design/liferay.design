import { List, Map } from 'immutable'

import { Heading } from 'components/atoms'
import { Navbar } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Header.scss'

const ARTICLES = 'articles'
const CAREERS = 'careers'
const EVENTS = 'events'
const TEAM = 'team'

export const navKeys = {
	[TEAM]: 'team',
	[ARTICLES]: 'articles',
	[EVENTS]: 'events',
	[CAREERS]: 'careers',
}

const Header = ({ selected }) => (
	<div className={classes.container}>
		<Heading level={3} color="white" className={classes.siteName}>
			Liferay.Design
		</Heading>

		{/* <Navbar
			className={classes.navbar}
			href={`#{option}`}
			options={List([TEAM, ARTICLES, EVENTS, CAREERS])}
			optionsMap={Map(navKeys)}
			selected={selected}
			key="navbar"
		/> */}
	</div>
)

Header.propTypes = {
	selected: PropTypes.string,
}

export default Header
