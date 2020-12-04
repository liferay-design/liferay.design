import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef, getHeight } from 'react'
import { Flex } from 'theme-ui'
import styles from './styles.module.scss'
import { Link } from 'components/atoms'



const Carousel = (props) => {
    const [slideWidth, setSlideWidth] = useState(0)
    const slideSize = useRef(null);
    
    useEffect(() => {
        setSlideWidth(slideSize.current.clientWidth)
    });
    console.log(slideWidth);

    const slidesLength = props.slides.length;

    const [current, setCurrent] = useState(0);

    const initialCarouselState = {
        offset: 0,
        desired: 0,
        active: 0
    };

    const delay = 5000;

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const next = (current + 1) % slidesLength;
        const id = setTimeout(() => setCurrent(next), delay);
        return () => clearTimeout(id);
    }, [current] );

	return (
        <Flex sx={{flexDirection: 'column', alignItems: 'center', width: '100vw'}} className={styles.pagestyles}>
            <Flex sx={{
                    transform: 'translateX(calc(-' + `${slideWidth/2}` + 'px - ' + `${current*100/slidesLength}` + '%))',
                    alignSelf: 'flex-start',
                    left: '50%',
                    position: 'relative',
                }}
                className={styles.slidesWrapper}>
                {props.slides.map((slide, i) => (
                    <div 
                    onClick={() => setCurrent(i)}
                    className={current === i ? [styles.slide, styles.currentSlide].join(' ') : styles.slide}
                    key={i}
                    ref={slideSize}>

                        <Flex sx={{
                            padding: '6rem',
                        }}>
                            <div className={styles.icon}>
                                <img src={`${withPrefix(`${slide.icon}`)}`}/>
                            </div>
                            <div className={styles.details}>
                                <h2 className={styles.f2}>{slide.title}</h2>
                                <p className={styles.pLarge}>{slide.description}</p>
                                <Link to={slide.url}>{slide.linkText}</Link>
                            </div>
                        </Flex>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={`${withPrefix(`${slide.image}`)}`}/>
                        </div>
                    </div>
                ))}
            </Flex>
            <Flex sx={{marginTop: '2rem'}}>
                {props.slides.map((slide, i) => (
                    <div 
                        onClick={() => setCurrent(i)}
                        className={current === i ? [styles.indicator, styles.currentIndicator].join(' ') : styles.indicator}>
                            <div className={styles.indicatorBackground}>
                                <div className={styles.activeIndicator}/>
                            </div>
                    </div>
                ))}
            </Flex>
        </Flex>
	)
}

export default Carousel
