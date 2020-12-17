/** @jsx jsx */
import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef } from 'react'
import { jsx, Flex } from 'theme-ui'
import styles from './styles.module.scss'

const Carousel = ({ children }) => {
	if (children) {

		const slideSize = useRef(null)
		const [slideWidth, setSlideWidth] = useState(0)
		
		const delay = 5000
		
		const slidesCount = children.length					
		
		// AUTO ADVANCE SLIDES
		const [current, setCurrent] = useState(0)
		
		useEffect(() => {
			setSlideWidth(slideSize.current.clientWidth)
		})

		const [isActive, setIsActive] = useState(true);
		
		const next = (current + 1) % slidesCount
		
		
		useEffect(() => {
			let timeLeft = 0
			if(isActive){
				const timer = setInterval(() => {
					if(timeLeft >= 1){
						timeLeft = 0
						clearInterval(timer)
						setCurrent(next)
					}
					document.getElementById("active").style.transform = "scaleX(" + timeLeft + ")" // need a way to transform the active indicator without target ID so we can use multiple carousels per page.
					timeLeft += 0.01
				}, (delay/100))
				return () => clearInterval(timer)
			}
		}, [isActive, current])
		
		return (
			<Flex
				sx={{ flexDirection: 'column', alignItems: 'center', width: '100vw', overflowX: 'visible', }}
				className={isActive ? [styles.active, styles.pagestyles].join(' ') : styles.pagestyles}
			>
				<Flex
					sx={{
						transform:
							'translateX(calc(-' +
							`${slideWidth / 2}` +
							'px - ' +
							`${(current * 100) / slidesCount}` +
							'%))',
						alignSelf: 'flex-start',
						left: '50%',
						position: 'relative',
					}}
					className={styles.slidesWrapper}
				>
					{children.map((children, i) => (
						<div
							onClick={
								current === i && isActive
								? () => setIsActive(false)
								: () => {current === i ? setCurrent(next) : setCurrent(i), setIsActive(true)}}
							className={
								current === i
									? [styles.slide, styles.currentSlide].join(' ')
									: current === (i+1) && type === 'images' ? [styles.slide, styles.prevSlide].join(' ')
									: current === (i-1) ? [styles.slide, styles.nextSlide].join(' ')
									: styles.slide
							}
							key={i}
							ref={slideSize}
						>
							{children}
						</div>
					))}
				</Flex>
				<Flex sx={{ marginTop: '2rem' }}>
					{children.map((children, i) => (
						<div
							onClick={current === i && isActive
							? () => setIsActive(false) 
							: () => {current === i ? setCurrent(next) : setCurrent(i), setIsActive(true)}}
							className={
								current === i
									? [styles.indicator, styles.currentIndicator].join(' ')
									: styles.indicator
							}
							key={i}
						>
							<div className={styles.indicatorBackground}>
								<div
									className={styles.activeIndicator}
									id={current === i ? "active" : null}
									/>
							</div>
						</div>
					))}
				</Flex>
			</Flex>
		)
	}
	return `null`
}

export default Carousel
