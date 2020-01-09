import React, { Component } from 'react'
import styles from './styles.module.scss'
import Slider from "react-slick"
import './styles.scss'

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  primaryCarousel: null,
		  navCarousel: null
		};
	  }
	
	  componentDidMount() {
		this.setState({
		  primaryCarousel: this.primaryCarousel,
		  navCarousel: this.navCarousel
		});
	  }
	render() {
		var primarySettings = {
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			responsive: [
				{
				  breakpoint: 900,
				  settings: {
					fade: false,
					infinite: false,
				  }
				},
			]
		};
		
		var navSettings = {
			infinite: true,
			slidesToShow: 1,
			focusOnSelect: true,
			responsive: [
				{
				  breakpoint: 900,
				  settings: {
					infinite: false,
				  }
				},
			]
		};
		return (
			<div className={styles.carousel}>
				<Slider 
					{...primarySettings}
					className={styles.primaryCarousel} 
					asNavFor={this.state.navCarousel}
					ref={slider => (this.primaryCarousel = slider)}
					>
						{this.props.children}
				</Slider>
				<Slider 
					{...navSettings}
					className={styles.navCarousel} 
					asNavFor={this.state.primaryCarousel}
					ref={slider => (this.navCarousel = slider)}
					>
						{this.props.children}
				</Slider>
			</div>
		)
	}
}
