import { withPrefix } from 'gatsby-link'
import React from 'react'
import classes from './Image.module.scss'

export const Image = () => {
	function getRandomImage(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}
	const image = getRandomImage(14)
	return (
		<div
			className={classes.banner}
			style={{ backgroundImage: `url(${withPrefix(`/static/images/banner/${image}.jpg`)}` }}
		/>
	)
}

export default Image
