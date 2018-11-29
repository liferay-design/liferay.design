import React from 'react'
import styles from './styles.module.scss'
import { FeaturedPost } from 'components/molecules'

const HeroBanner = () => (
	<div className={styles.container}>
		<FeaturedPost />
	</div>
)

export default HeroBanner
