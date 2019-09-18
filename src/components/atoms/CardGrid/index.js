import PropTypes from 'prop-types'
import React from 'react'
import { Grid } from 'reakit'

const CardGrid = ({ children, two, three }) => {

	const numberOfCards = {
		...(three ? {
			templateColumns:"repeat(auto-fill, minmax(18rem, 1fr))"
				} : {}),
		...(two ? {
			templateColumns:"repeat(auto-fit, minmax(18rem, 1fr))"
				} : {}),
	}

	return (
		<Grid
			{...numberOfCards}
			autoRows="auto"
			gap="5rem 4rem"
		>
			{children}
		</Grid>
	)
}

CardGrid.defaultProps = {
	three: true,
}

CardGrid.propTypes = {
	children: PropTypes.node,
	two: PropTypes.boolean,
	three: PropTypes.boolean,
}

export default CardGrid
