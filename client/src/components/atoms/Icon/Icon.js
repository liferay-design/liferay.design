import PropTypes from 'prop-types'
import React from 'react'
import ReactSvg from 'react-svg'

const Icon = ({ className, name, style }) => {
	return (
		<ReactSvg
			className={className}
			path={`public/images/icons/${name}.svg`}
			style={style}
		/>
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	style: PropTypes.object,
}

export default Icon
