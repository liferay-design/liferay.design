/** @jsx jsx */
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx, Flex } from 'theme-ui'
import { Link } from 'components/atoms'
import styles from '../../styles.module.scss'

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
        <div sx={{height: '100%'}}>
            {type === 'card' ?
            <div sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <Flex
                    sx={{
                        alignItems: ['center', 'center', 'flex-start'],
                        background: 'backgroundGradient',
                        flexDirection: ['column', 'column', 'row'],
                        flexGrow: '1',
                        maxWidth: '1200px',
                        overflow: 'hidden',
                        p: ['2rem', '4rem'],
                        width: ['90vw', '80vw'],
                    }}
                    
                >
                    <div
                        sx={{
                            bg: `darkBlack`,
                            borderRadius: ['0.5em'],
                            flexShrink: ['0'],
                            height: ['72px', '94px'],
                            p: ['1rem', '2rem'],
                            width: ['72px','94px'],
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
                        <p className={styles.pLarge}
                            sx={{
                                textAlign: 'justify',
                            }}>{description}</p>
                        <Link to={url}>{linkText}</Link>
                    </div>
                </Flex>
                <div 
                    className={styles.imageWrapper}
                    sx={{
                        height: '0',
                        pb: '40%',
                        position: 'relative',
                        width: '100%',
                    }}>
                    <img
                        className={styles.image}
                        sx={{
                            height: '100%',
                            position: 'absolute',
                            width: '100%',
                        }}
                        src={`${withPrefix(`${image}`)}`}
                    />
                </div>
            </div>
            :
            <Flex
                sx={{
                    height: ['50.625vw', '45vw'], // 3:2 ratio
                    objectFit: 'contain',
                    position: 'relative',
                    width: ['90vw', '80vw'],
                }}>
                <img
                    className={styles.image}
                    sx={{
                        margin: '0',
                        minHeight: '100%',
                        minWidth: '100%',
                    }}
                    src={`${withPrefix(`${image}`)}`}
                />
            </Flex>
            }
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