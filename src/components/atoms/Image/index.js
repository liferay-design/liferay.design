import { withPrefix } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export const Image = ({ imgSrc, alt, ...props }) => {
	// function getRandomImage(max) {
	// 	return Math.floor(Math.random() * Math.floor(max))
	// }

	// const image = getRandomImage(14)
	return <img imgSrc={`url(${withPrefix({ src })}`} />
}

Image.propTypes = {
	imgSrc: PropTypes.string,
	alt: PropTypes.string,
}

export default Image
