import PropTypes from 'prop-types'
import React from 'react'
import classes from './Text.scss'
import { colors } from 'theme'

const Text = ({ children, color, type }) => {
	const Type = type

	return (
		<Type className={classes[type]} style={{ color: colors[color] }}>
			{children}
		</Type>
	)
}

Text.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	type: PropTypes.oneOf(['p', 'span']),
}

Text.defaultProps = {
	color: 'white',
	type: 'span',
}

export default Text
