import { colors, fontSizes, fontWeights } from 'theme'

import PropTypes from 'prop-types'
import React from 'react'

const Text = ({
	align,
	className,
	children,
	color,
	size,
	style,
	type,
	weight,
	width,
}) => {
	const Type = type

	const textAlign = align ? { display: 'block', textAlign: align } : null

	const styles = {
		color: colors[color],
		...(size ? { fontSize: fontSizes[size] } : {}),
		...style,
		...textAlign,
		...(width ? { width } : {}),
		...(weight ? { fontWeight: fontWeights[weight] } : {}),
	}

	return (
		<Type className={className} style={styles}>
			{children}
		</Type>
	)
}

Text.propTypes = {
	align: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	style: PropTypes.object,
	size: PropTypes.string,
	type: PropTypes.oneOf(['p', 'span']),
	weight: PropTypes.string,
	width: PropTypes.string,
}

Text.defaultProps = {
	size: 'base',
	type: 'span',
	weight: 'regular',
}

export default Text
