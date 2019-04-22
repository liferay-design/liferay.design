import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export const Image = ({ imgSrc, alt, ...props }) => {
	return <img imgSrc={`url(${withPrefix({ src })}`} />
}

Image.propTypes = {
	imgSrc: PropTypes.string,
	alt: PropTypes.string,
}

export default Image
