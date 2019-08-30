import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export const Image = ({ circle, src, alt, ...props }) => {
	return <img {...props} style={{ borderRadius:`${circle ? "50%" : null }` }} alt={alt} src={`${withPrefix(`${src}`)}`} />
}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	circle: PropTypes.string,
}

export default Image
