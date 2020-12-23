/** @jsx jsx */
import { useState, useEffect, useRef } from 'react'
import { jsx, Flex, Box } from 'theme-ui'
import styles from './styles.module.scss'

const Carousel = ({ children }) => {
	if (children) {
		const slide = useRef()
		const indicator = useRef()
		const slidesWrapper = useRef()

		const [current, setCurrent] = useState(0)
		const [isActive, setIsActive] = useState(true)

		const delay = 8000
		const slidesCount = children.length
		const next = (current + 1) % slidesCount

		useEffect(() => {
			let timeLeft = 0
			slidesWrapper.current.style.transform =
				'translateX(calc(-' +
				`${slide.current.clientWidth / 2}` +
				'px - ' +
				`${(current * 100) / slidesCount}` +
				'%))'
			if (isActive) {
				const timer = setInterval(() => {
					if (timeLeft >= 1) {
						timeLeft = 0
						clearInterval(timer)
						setCurrent(next)
					}
					indicator.current.style.transform = 'scaleX(' + timeLeft + ')'
					timeLeft += 0.01
				}, delay / 100)
				return () => clearInterval(timer)
			}
		}, [isActive, current])

		return (
			<Box sx={{ overflowX: 'hidden' }}>
				<Flex
					sx={{
						flexDirection: 'column',
						alignItems: 'center',
						height: ['auto', '100vh'],
						width: '100vw',
						mb: 5,
					}}
					className={isActive ? styles.active : null}
				>
					<Flex
						sx={{
							alignSelf: 'flex-start',
							left: '50%',
							position: 'relative',
						}}
						className={styles.slidesWrapper}
						ref={slidesWrapper}
					>
						{children.map((children, i) => (
							<div
								onClick={
									current === i && isActive
										? () => setIsActive(false)
										: () => {
												current === i
													? setCurrent(next)
													: setCurrent(i),
													setIsActive(true)
										  }
								}
								className={
									current === i
										? [styles.slide, styles.currentSlide].join(' ')
										: current === i + 1
										? [styles.slide, styles.prevSlide].join(' ')
										: current === i - 1
										? [styles.slide, styles.nextSlide].join(' ')
										: styles.slide
								}
								key={i}
								ref={current === i ? slide : null}
								sx={{
									transition: 'transform 250ms ease-in-out',
									height: '100%',
								}}
							>
								{children}
							</div>
						))}
					</Flex>
					<Flex sx={{ marginTop: 3, width: ['100vw', 'initial'], pr: 2 }}>
						{children.map((children, i) => (
							<div
								onClick={
									current === i && isActive
										? () => setIsActive(false)
										: () => {
												current === i
													? setCurrent(next)
													: setCurrent(i),
													setIsActive(true)
										  }
								}
								className={
									current === i
										? [
												styles.indicator,
												styles.currentIndicator,
										  ].join(' ')
										: styles.indicator
								}
								key={i}
							>
								<div className={styles.indicatorBackground}>
									<div
										className={styles.activeIndicator}
										key={i}
										ref={current === i ? indicator : null}
										sx={
											current === i
												? {
														transition:
															'transform 50ms linear',
												  }
												: {
														transition:
															'transform 250ms linear',
														transform: 'scaleX(0) !important',
												  }
										}
									/>
								</div>
							</div>
						))}
					</Flex>
				</Flex>
			</Box>
		)
	}
	return `null`
}

export default Carousel
