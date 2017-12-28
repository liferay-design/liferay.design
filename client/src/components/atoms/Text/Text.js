import PropTypes from 'prop-types'
import React from 'react'
import classes from './Text.scss'
import { colors } from 'theme'

const Text = ({ children, color, type, width }) => {
	const Type = type

	return (
		<Type className={classes[type]} style={{ color: colors[color], width }}>
			{children}
		</Type>
	)
}

Text.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	type: PropTypes.oneOf(['p', 'span']),
	width: PropTypes.string,
}

Text.defaultProps = {
	color: 'black',
	type: 'span',
}

export default Text
