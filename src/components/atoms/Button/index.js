import PropTypes from 'prop-types'
import React from 'react'
import { colors, fontSizes, fontWeights } from 'theme'

const Button = ({
	align,
	renderAs,
	className,
	children,
	backgroundColor,
	textColor,
	margin,
	padding,
	size,
	style,
	weight,
	width,
	...props
}) => {
	const RenderAs = renderAs

	const textAlign = align ? { display: 'block', textAlign: align } : null

	const styles = {
		color: colors[textColor],
		backgroundColor: colors[backgroundColor],
		...(margin ? { marginBottom: fontSizes[margin] } : {}),
		...(padding ? { padding: fontSizes[padding] } : {}),
		...(size ? { fontSize: fontSizes[size] } : {}),
		...style,
		...textAlign,
		...(width ? { width } : {}),
		...(weight ? { fontWeight: fontWeights[weight] } : {}),
	}

	return (
		<RenderAs className={className} style={styles} {...props}>
			{children}
		</RenderAs>
	)
}

Button.propTypes = {
	align: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	style: PropTypes.object,
	size: PropTypes.string,
	renderAs: PropTypes.oneOf(['a', 'button']),
	weight: PropTypes.string,
	width: PropTypes.string,
}

Button.defaultProps = {
	size: 'base',
	renderAs: 'button',
}

export default Button
