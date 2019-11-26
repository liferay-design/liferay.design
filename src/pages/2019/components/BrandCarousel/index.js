import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './styles.module.scss'
import { CardDefault } from 'components/molecules'

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
						<CardDefault
							avatarImage
							imageURL="/images/2018/rebrand-3.jpg"
							link="/images/2018"
							title="Title"
							subtitle="Subtitle"
							avatarImageURL="/images/2018/rebrand-3.jpg"
						/>
					</div>
					<div className={styles.imgWrapper}>
						<CardDefault
							avatarImage
							imageURL="/images/2018/rebrand-3.jpg"
							link="/images/2018"
							title="Title"
							subtitle="Subtitle"
							avatarImageURL="/images/2018/rebrand-3.jpg"
						/>
					</div>
<div className={styles.imgWrapper}>
					<CardDefault
						avatarImage
						imageURL="/images/2018/rebrand-3.jpg"
						link="/images/2018"
						title="Title"
						subtitle="Subtitle"
						avatarImageURL="/images/2018/rebrand-3.jpg"
					/>
					</div>
<div className={styles.imgWrapper}>
					<CardDefault
						avatarImage
						imageURL="/images/2018/rebrand-3.jpg"
						link="/images/2018"
						title="Title"
						subtitle="Subtitle"
						avatarImageURL="/images/2018/rebrand-3.jpg"
					/>
					</div>
<div className={styles.imgWrapper}>
					<CardDefault
						avatarImage
						imageURL="/images/2018/rebrand-3.jpg"
						link="/images/2018"
						title="Title"
						subtitle="Subtitle"
						avatarImageURL="/images/2018/rebrand-3.jpg"
					/>
					</div>
				</Slider>
			</div>
		)
	}
}
