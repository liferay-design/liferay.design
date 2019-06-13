import PropTypes from 'prop-types'
import React from 'react'
import { colors, fontSizes, fontWeights } from 'theme'

const Text = ({
	align,
	center,
	className,
	children,
	color,
	margin,
	size,
	style,
	type,
	weight,
	width,
	maxWidth,
	...props
}) => {
	const Type = type

	const textAlign = align ? { display: 'block', textAlign: align } : null

	const styles = {
		color: colors[color],
		...(margin ? { marginBottom: fontSizes[margin] } : {}),
		...(center ? { marginRight: 'auto', marginLeft: 'auto' } : {}),
		...(size ? { fontSize: fontSizes[size] } : {}),
		...(style ? { fontStyle: style } : {}),
		...textAlign,
		...(width ? { width } : {}),
		...(maxWidth ? { maxWidth } : {}),
		...(weight ? { fontWeight: fontWeights[weight] } : {}),
	}

	return (
		<Type className={className} style={styles} {...props}>
			{children}
		</Type>
	)
}

Text.propTypes = {
	align: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	margin: PropTypes.string,
	style: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string,
	weight: PropTypes.string,
	width: PropTypes.string,
	maxWidth: PropTypes.string,
}

Text.defaultProps = {
	size: 'base',
	type: 'span',
	weight: 'regular',
}

export default Text
