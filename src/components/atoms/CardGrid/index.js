import PropTypes from 'prop-types'
import React from 'react'
import { Grid } from 'reakit';


const Container = ({children}) => {
    return <Grid columns="repeat(auto-fill, minmax(18rem, 1fr))" autoRows="auto" gap="5rem 4rem">
			{children}
		</Grid>
}

Container.propTypes = {
    children: PropTypes.node,
}

export default Container
