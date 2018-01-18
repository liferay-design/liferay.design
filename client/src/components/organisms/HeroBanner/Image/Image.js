import React from 'react'
import classes from './Image.scss'
import yellowPolaroid from 'resources/yellow-polaroid-small.png'

export const Image = () => {
	return <div className={classes.banner} style={{ backgroundImage: `url(${yellowPolaroid})` }} />
}

export default Image
