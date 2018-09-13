import PropTypes from 'prop-types'
import React from 'react'
import ReactSvg from 'react-svg'
import { colors } from 'theme'
import { withPrefix } from 'gatsby'

const Icon = ({ className, fill, height, width, name, style, padding }) => {
	const styles = {
		...style,
		fill: colors[fill],
		height,
		padding,
		width,
	}

	return (
		<ReactSvg
			className={className}
			path={withPrefix(`/images/icons/${name}.svg`)}
			style={styles}
		/>
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
}

Icon.defaultProps = {
	padding: '4px',
}

export default Icon
