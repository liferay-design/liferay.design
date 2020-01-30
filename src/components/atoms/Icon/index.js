import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'
import IconsObject from './icons'

const Icon = ({
	className,
	fill,
	height,
	width,
	name,
	style,
	margin,
	rotate,
	...props
}) => {
	const styles = {
		...style,
		fill: colors[fill],
		height,
		margin,
		width,
	}

	if (rotate) {
		styles.transform = `rotate(${rotate}deg)`
		styles.transition = 'transform 0.4s'
	}

	const DynamicIcon = IconsObject[name]

	if (!DynamicIcon) {
		console.log(`${name} icon not found`)
	}

	return DynamicIcon ? (
		<DynamicIcon className={className} style={styles} name={name} {...props} />
	) : (
		<span />
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	name: PropTypes.string.isRequired,
	style: PropTypes.object,
	margin: PropTypes.string,
	rotate: PropTypes.number,
}

export default Icon
