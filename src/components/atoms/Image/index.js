import { withPrefix } from 'gatsby'
import React from 'react'
import styles from './styles.module.scss'

export const Image = () => {
	function getRandomImage(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}

	const image = getRandomImage(14)
	return (
		<div
			className={styles.banner}
			style={{
				backgroundImage: `url(${withPrefix(
					`/static/images/banner/${image}.jpg`,
				)}`,
			}}
		/>
	)
}

export default Image
