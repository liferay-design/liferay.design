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
			
			if (isActive) {
				const id = setTimeout(() => {
					setCurrent(next)
				}, delay)
				return () => clearTimeout(id)
			}
			
		}, [isActive, current])
		return (
			<Flex
				sx={{ flexDirection: 'column', alignItems: 'center', width: '100vw' }}
				className={styles.pagestyles}
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
								current === i
								? () => setIsActive(false)
								: () => {setCurrent(i), setIsActive(true)}}
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
							onClick={() => {setCurrent(i), setIsActive(true)}}
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
									style={{scaleX: "1"}} />
							</div>
						</div>
					))}
				</Flex>
				State: {isActive ? "active" : "inactive"} <br/> {current}
			</Flex>
		)
	}
	return `null`
}

export default Carousel
