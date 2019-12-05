import { Flex, Heading } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '../../styles.module.scss'


const SimpleCard = ({ image, title, subtitle, description }) => {
	return (
        <Flex 
            direction="column"
            justify="center"
            align="center"
            className={styles.simpleCard}>
                <div style={{ backgroundImage: `url( ${image} )` }} className={styles.cardImage} />
                <Heading level="3" className={styles.f3}>{title}</Heading>
                <span className={styles.pSmall}>{subtitle}</span>
                <p className={styles.p}>{description}</p>
        </Flex>
	)
}

SimpleCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
	description: PropTypes.string,
}

export default SimpleCard
