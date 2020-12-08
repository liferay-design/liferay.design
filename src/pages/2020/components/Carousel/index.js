import { withPrefix } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import { Flex } from 'theme-ui'
import styles from './styles.module.scss'
import { Link } from 'components/atoms'

const Carousel = ({ slides }) => {
	const slideSize = useRef(null)
	const [slideWidth, setSlideWidth] = useState(0)

	useEffect(() => {
		setSlideWidth(slideSize.current.clientWidth)
	})

	const delay = 5000

	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const next = (current + 1) % slides.length
		const id = setTimeout(() => setCurrent(next), delay)
		return () => clearTimeout(id)
	}, [current])

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
						`${(current * 100) / slides.length}` +
						'%))',
					alignSelf: 'flex-start',
					left: '50%',
					position: 'relative',
				}}
				className={styles.slidesWrapper}
			>
				{slides.map((slide, i) => (
					<div
						onClick={() => setCurrent(i)}
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
						onClick={() => setCurrent(i)}
						className={
							current === i
								? [styles.indicator, styles.currentIndicator].join(' ')
								: styles.indicator
						}
					>
						<div className={styles.indicatorBackground}>
							<div className={styles.activeIndicator} />
						</div>
					</div>
				))}
			</Flex>
		</Flex>
	)
}

export default Carousel
