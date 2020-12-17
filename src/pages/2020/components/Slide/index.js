/** @jsx jsx */
import { withPrefix } from 'gatsby'
// import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Flex } from 'theme-ui'
import { Link } from 'components/atoms'
import styles from './styles.module.scss'

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
        <div className={[styles.slide, styles.pagestyles].join(' ')}>
            <Flex
                sx={{
                    padding: ['2rem', '4rem'],
                    flexDirection: ['column', 'column', 'row'],
                    alignItems: ['center', 'center', 'flex-start']
                }}
                
            >
                <div
                    sx={{
                        width: ['72px','94px'],
                        height: ['72px', '94px'],
                        borderRadius: ['0.5em'],
                        backgroundColor: `darkBlack`,
                        padding: ['1rem', '2rem'],
                        flexShrink: ['0'],
                    }}>
                    <img src={`${withPrefix(`${icon}`)}`} />
                </div>
                <div 
                    sx={{
                        padding: ['2rem 0', '1.5rem'],
                    }}>
                    <h2 
                        className={styles.f2}
                        sx={{
                            textAlign: ['center', 'center', 'left']
                        }}>{title}</h2>
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