import React, { useEffect } from 'react'
import { Flex } from 'components/atoms'
import styles from './styles.module.scss'

export default ({}) => {

	useEffect( () => {
		const script = document.createElement('script');
	
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.4/lottie.min.js";
		script.async = false;
	
		document.head.appendChild(script);

		script.onload = function() {
			lottie.loadAnimation({
				container: document.getElementById('2020-animation'),
				path: '/files/animations/2020.json',
				renderer: 'svg',
				loop: false,
				autoplay: true,
			});
		}
		// setTimeout(function() { //Start the timer
		// }.bind(this), 100)
	});
	return (
		<Flex
			align="center"
			justify="center"
			direction="column"
			className={styles.keyArt}
		>
			<div id="2020-animation"></div>
		</Flex>
	)
}