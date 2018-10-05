import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'
import IconsObject from './icons'

const Icon = ({ className, fill, height, width, name, style, margin, rotate }) => {
	const styles = {
		...style,
		fill: colors[fill],
		height,
		margin,
		width,
	}

	if (rotate) {
		styles.transform = `rotate(${rotate}deg)`
		styles.transition = 'transform 0.5s'
	}

	const DynamicIcon = IconsObject[name]

	return DynamicIcon ? (
		<DynamicIcon className={className} style={styles} name={name} />
	) : (
		<span title="icon not found"></span>
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

Icon.defaultProps = {
	margin: '4px',
}

export default Icon
