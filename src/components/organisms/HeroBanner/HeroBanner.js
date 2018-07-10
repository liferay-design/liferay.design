import React from 'react'
import classes from './HeroBanner.module.scss'
import { FeaturedPost } from 'components/molecules'

const HeroBanner = () => (
	<div className={classes.container}>
		<FeaturedPost />
	</div>
)

export default HeroBanner
