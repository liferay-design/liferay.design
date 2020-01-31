import PropTypes from 'prop-types'
import React from 'react'
import { Grid } from 'reakit'

const CardGrid = ({ children, two, three, gap }) => {

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
			gap={gap}
		>
			{children}
		</Grid>
	)
}

CardGrid.defaultProps = {
	three: true,
	gap: "5rem 4rem",
}

CardGrid.propTypes = {
	children: PropTypes.node,
	gap: PropTypes.string,
	two: PropTypes.bool,
	three: PropTypes.bool,
}

export default CardGrid
