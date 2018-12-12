import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './styles.module.scss'

export default class VariableWidth extends Component {
	render() {
		const settings = {
			dots: false,
			arrows: false,
			infinite: false,
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			focusOnSelect: true,
			infinite: true,
			initialSlide: 3,
		}
		return (
			<div className={styles.wrapper}>
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<Slider {...settings}>
					<div className={styles.imgWrapper} style={{ width: '50vw' }}>
						<img className={styles.image} src="/images/2018/rebrand-1.jpg" />
						<p>Offsite branding meeting</p>
					</div>
					<div className={styles.imgWrapper}>
						<img className={styles.image} src="/images/2018/rebrand-2.jpg" />
						<p>DXP Cloud branding at LSNA</p>
					</div>
					<div className={styles.imgWrapper}>
						<img className={styles.image} src="/images/2018/rebrand-3.jpg" />
						<p>Liferay products branding at LSNA</p>
					</div>
					<div className={styles.imgWrapper}>
						<img className={styles.image} src="/images/2018/rebrand-4.jpg" />
						<p>Analytics Cloud branding at LSNA</p>
					</div>
					<div className={styles.imgWrapper}>
						<img className={styles.image} src="/images/2018/rebrand-5.jpg" />
						<p>Offsite branding meeting</p>
					</div>
					<div className={styles.imgWrapper}>
						<img className={styles.image} src="/images/2018/rebrand-6.png" />
						<p>New branding on Liferay.com</p>
					</div>
				</Slider>
			</div>
		)
	}
}
