import PropTypes from 'prop-types'
import React from 'react'
import ReactSvg from 'react-svg'
import { colors } from 'theme'
import { withPrefix } from 'gatsby-link'

const Icon = ({ className, fill, height, width, name, style }) => {
	const styles = {
		...style,
		fill: colors[fill],
		height,
		padding: '4px',
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
}

Icon.defaultProps = {
	fill: 'black',
}

export default Icon
