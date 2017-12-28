import { List, Map } from 'immutable'

import { Heading } from 'components/atoms'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Navbar.scss'

const Navbar = ({ href, options, optionsMap, selected }) => {
	function _constructHref(entry, href) {
		const placeholders = href.match(/({.*?})/g)

		placeholders.forEach(placeholder => {
			const parameterKey = placeholder.replace(/{|}/g, '')

			if (parameterKey === 'option') {
				href = href.replace(placeholder, entry)
			}
		})

		return href
	}
	return (
		<div className={classes.container}>
			{options.map(entry => {
				return (
					<div
						className={`${classes.entry} ${entry === selected ? classes.selected : ''}`}
						key={entry}
					>
						<Link className={classes.entryLink} to={_constructHref(entry, href)}>
							<Heading className={classes.entryLabel}>
								{optionsMap.get(entry)}
							</Heading>
						</Link>
					</div>
				)
			})}
		</div>
	)
}

Navbar.propTypes = {
	href: PropTypes.string,
	options: PropTypes.instanceOf(List),
	optionsMap: PropTypes.instanceOf(Map),
	selected: PropTypes.string,
}

export default Navbar
