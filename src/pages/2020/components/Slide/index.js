import { withPrefix } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'theme-ui'
import { Link } from 'components/atoms'
import styles from '../Carousel/styles.module.scss'

const Slide = ({ 
    title,
    image,
    icon,
    url,
    linkText,
    description,
    type,
 }) => {
     return(
        <div>
            <Flex
                sx={{
                    padding: '6rem',
                }}
            >
                <div className={styles.icon}>
                    <img src={`${withPrefix(`${icon}`)}`} />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.f2}>{title}</h2>
                    <p className={styles.pLarge}>{description}</p>
                    <Link to={url}>{linkText}</Link>
                </div>
            </Flex>
            <div className={styles.imageWrapper}>
                <img
                    className={styles.image}
                    src={`${withPrefix(`${image}`)}`}
                />
            </div>
        </div>
     )
}

Slide.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	icon: PropTypes.string,
	url: PropTypes.string,
	linkText: PropTypes.string,
	description: PropTypes.string,
	type: PropTypes.string,
}

export default Slide