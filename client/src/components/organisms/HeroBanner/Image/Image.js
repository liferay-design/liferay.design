import React from 'react'
import classes from './Image.scss'

export const Image = () => {
	function getRandomImage(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}
	const image = getRandomImage(13)
	return (
		<div
			className={classes.banner}
			style={{ backgroundImage: `url(/public/images/banner/${image}.jpg)` }}
		/>
	)
}

export default Image
