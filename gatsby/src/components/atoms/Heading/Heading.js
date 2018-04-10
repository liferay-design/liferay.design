import PropTypes from 'prop-types'
import React from 'react'
import classes from './Heading.module.scss'
import { colors } from 'theme'

const Heading = ({ align, bottomBorder, className, color, children, level }) => {
	const Header = `h${level}`
	const borderClass = bottomBorder ? 'bottomBorder' : ''

	return (
		<Header
			className={`${className} ${classes[Header]} ${classes[borderClass]}`}
			style={{ color: colors[color], textAlign: align }}
		>
			{children}
		</Header>
	)
}

Heading.propTypes = {
	align: PropTypes.string,
	bottomBorder: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.node,
	level: PropTypes.number.isRequired,
}

Heading.defaultProps = {
	level: 3,
	textAlign: 'left',
}

export default Heading
