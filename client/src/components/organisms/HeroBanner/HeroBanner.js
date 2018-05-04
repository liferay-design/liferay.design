import { Heading } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './HeroBanner.scss'
import FeaturedPost from './FeaturedPost/FeaturedPost'

const HeroBanner = () => (
	<div className={classes.container}>
		<FeaturedPost />
	</div>
)

export default HeroBanner
