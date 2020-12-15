import { withPrefix } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import { Flex } from 'theme-ui'
import styles from './styles.module.scss'
import { Link } from 'components/atoms'

const Carousel = ({ slides }) => {
	if (slides) {

		const slideSize = useRef(null)
		const [slideWidth, setSlideWidth] = useState(0)

		useEffect(() => {
			setSlideWidth(slideSize.current.clientWidth)
		})

		const delay = 5000

		const slidesCount = slides.length					
						
		// AUTO ADVANCE SLIDES
		const [current, setCurrent] = useState(0)

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
				sx={{ flexDirection: 'column', alignItems: 'center', width: '100vw' }}
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
					{slides.map((slide, i) => (
						<div
							onClick={
								current === i && isActive
								? () => setIsActive(false)
								: () => {setCurrent(next), setIsActive(true)}}
							className={
								current === i
									? [styles.slide, styles.currentSlide].join(' ')
									: styles.slide
							}
							key={i}
							ref={slideSize}
						>
							<Flex
								sx={{
									padding: '6rem',
								}}
							>
								<div className={styles.icon}>
									<img src={`${withPrefix(`${slide.icon}`)}`} />
								</div>
								<div className={styles.details}>
									<h2 className={styles.f2}>{slide.title}</h2>
									<p className={styles.pLarge}>{slide.description}</p>
									<Link to={slide.url}>{slide.linkText}</Link>
								</div>
							</Flex>
							<div className={styles.imageWrapper}>
								<img
									className={styles.image}
									src={`${withPrefix(`${slide.image}`)}`}
								/>
							</div>
						</div>
					))}
				</Flex>
				<Flex sx={{ marginTop: '2rem' }}>
					{slides.map((slide, i) => (
						<div
							onClick={current === i && isActive
							? () => setIsActive(false) 
							: () => {setCurrent(next), setIsActive(true)}}
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
