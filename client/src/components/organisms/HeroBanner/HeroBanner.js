import { Heading } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './HeroBanner.scss'
import FeaturedPost from './FeaturedPost/FeaturedPost'

const HeroBanner = ({ label, primaryHeader, secondaryHeader, date, tertiaryHeader }) => (
	<div className={classes.container}>
		<div className={classes.header}>
			<Heading level={5} className={classes.label}>
				{label}
			</Heading>

			<Heading level={1} className={classes.primary}>
				{primaryHeader}
			</Heading>

			<Heading level={2} className={classes.secondary}>
				{secondaryHeader}
			</Heading>

			<Heading level={2} className={classes.secondary}>
				{date}
			</Heading>

			<Heading level={5} className={classes.tertiary}>
				{tertiaryHeader}
			</Heading>
		</div>

		<FeaturedPost />
	</div>
)

HeroBanner.propTypes = {
	label: PropTypes.string,
	primaryHeader: PropTypes.string,
	secondaryHeader: PropTypes.string,
	date: PropTypes.string,
	tertiaryHeader: PropTypes.string,
}

export default HeroBanner
