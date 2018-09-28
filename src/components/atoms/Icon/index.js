import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'
import IconsObject from '../Icons'

const Icon = ({ className, fill, height, width, name, style, padding, rotate }) => {
	const styles = {
		...style,
		fill: colors[fill],
		height,
		padding,
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
		<span>Icon does not exist</span>
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	name: PropTypes.string.isRequired,
	style: PropTypes.object,
	padding: PropTypes.string,
	rotate: PropTypes.number,
}

Icon.defaultProps = {
	padding: '4px',
	height: '24px',
	width: '24px',
}

export default Icon
