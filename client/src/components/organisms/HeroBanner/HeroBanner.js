import { Heading } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import classes from './HeroBanner.scss'
import yellowPolaroid from 'resources/yellow-polaroid-small.png'

const HeroBanner = ({ label, primaryHeader, secondaryHeader, tertiaryHeader }) => (
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

			<Heading level={5} className={classes.tertiary}>
				{tertiaryHeader}
			</Heading>
		</div>

		<div className={classes.banner} style={{ backgroundImage: `url(${yellowPolaroid})` }} />
	</div>
)

HeroBanner.propTypes = {
	label: PropTypes.string,
	primaryHeader: PropTypes.string,
	secondaryHeader: PropTypes.string,
	tertiaryHeader: PropTypes.string,
}

export default HeroBanner
