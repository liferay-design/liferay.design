import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { elevations } from 'theme'

export const Image = ({ circle, dropShadow, src, alt, ...props }) => {
	return (
		<img
			{...props}
			style={{
				borderRadius: `${circle ? '50%' : null}`,
				boxShadow: `${
					dropShadow ? '0 0.5rem 8rem -0.5rem rgba(48, 49, 63, 0.16)' : null
				}`,
			}}
			alt={alt}
			src={`${withPrefix(`${src}`)}`}
		/>
	)
}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	circle: PropTypes.string,
	dropShadow: PropTypes.string,
}

export default Image
