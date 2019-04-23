import PropTypes from 'prop-types'
import React from 'react'
import { Grid } from 'reakit'

const CardGrid = ({ children }) => {
	return (
		<Grid 
			templateColumns="repeat(auto-fill, minmax(18rem, 1fr))" 
			autoRows="auto" 
			gap="5rem 4rem"
		>
			{children}
		</Grid>
	)
}

CardGrid.propTypes = {
	children: PropTypes.node,
}

export default CardGrid
