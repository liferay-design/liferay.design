import { colors, fontSizes, fontWeights } from 'theme'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import React from 'react'

const Button = ({
	align,
	renderAs,
	className,
	children,
	color,
	margin,
	size,
	style,
	weight,
	width,
	...props
}) => {
	const RenderAs = renderAs

	const textAlign = align ? { display: 'block', textAlign: align } : null

	const styles = {
		color: colors[color],
		...(margin ? { marginBottom: fontSizes[margin] } : {}),
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
