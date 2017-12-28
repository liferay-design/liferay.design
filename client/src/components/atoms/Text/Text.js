import PropTypes from 'prop-types'
import React from 'react'
import classes from './Text.scss'
import { colors } from 'theme'

const Text = ({ align, children, color, type, width }) => {
	const Type = type

	const textAlign = align ? { display: 'block', textAlign: align } : ''

	return (
		<Type className={classes[type]} style={{ color: colors[color], ...textAlign, width }}>
			{children}
		</Type>
	)
}

Text.propTypes = {
	align: PropTypes.string,
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
