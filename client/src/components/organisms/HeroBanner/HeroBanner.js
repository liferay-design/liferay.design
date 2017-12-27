import PropTypes from 'prop-types'
import React from 'react'
import classes from './HeroBanner.scss'
import yellowPolaroid from 'resources/yellow-polaroid-small.png'

const HeroBanner = ({
	label,
	primaryHeader,
	secondaryHeader,
	tertiaryHeader,
}) => (
	<div className={classes.container}>
		<div className={classes.header}>
			<h5 className={classes.label}>{label}</h5>

			<h1 className={classes.primary}>{primaryHeader}</h1>

			<h2 className={classes.secondary}>{secondaryHeader}</h2>

			<h5 className={classes.tertiary}>{tertiaryHeader}</h5>
		</div>

		<div
			className={classes.banner}
			style={{ backgroundImage: `url(${yellowPolaroid})` }}
		/>
	</div>
)

HeroBanner.propTypes = {
	label: PropTypes.string,
	primaryHeader: PropTypes.string,
	secondaryHeader: PropTypes.string,
	tertiaryHeader: PropTypes.string,
}

export default HeroBanner
