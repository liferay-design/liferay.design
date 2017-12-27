import { List, Map } from 'immutable'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './Navbar.scss'

class Navbar extends React.Component {
	render() {
		const { href, options, optionsMap, selected } = this.props

		return (
			<div className={classes.container}>
				{options.map(entry => {
					return (
						<div
							className={`${classes.entry} ${
								entry === selected ? classes.selected : ''
							}`}
							key={entry}
						>
							<Link
								className={classes.entryLink}
								to={this._constructHref(entry, href)}
							>
								<h4 className={classes.entryLabel}>
									{optionsMap.get(entry)}
								</h4>
							</Link>
						</div>
					)
				})}
			</div>
		)
	}

	_constructHref(entry, href) {
		const placeholders = href.match(/({.*?})/g)

		placeholders.forEach(placeholder => {
			const parameterKey = placeholder.replace(/{|}/g, '')

			if (parameterKey === 'option') {
				href = href.replace(placeholder, entry)
			}
		})

		return href
	}
}

Navbar.propTypes = {
	href: PropTypes.string,
	options: PropTypes.instanceOf(List),
	optionsMap: PropTypes.instanceOf(Map),
	selected: PropTypes.string,
}

export default Navbar
