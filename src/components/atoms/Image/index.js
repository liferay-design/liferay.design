import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export const Image = ({ src, alt, ...props }) => {
	return <img {...props} alt={alt} src={`${withPrefix(`${src}`)}`} />
}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
}

export default Image
