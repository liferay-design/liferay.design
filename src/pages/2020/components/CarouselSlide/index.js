import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const CarouselSlide = ({
    image,
    description
}) => {
	return (
		<div className={styles.slide}>
            <img src={`${withPrefix(`${image}`)}`}/>
            <p className={styles.p}>{description}</p>
		</div>
	)
}

CarouselSlide.propTypes = {
    image: PropTypes.string,
    description: PropTypes.string
}


export default CarouselSlide
