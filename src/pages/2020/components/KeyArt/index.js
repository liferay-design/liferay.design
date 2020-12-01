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
				path: '/files/animations/2020-crop.json',
				renderer: 'svg',
				loop: false,
				autoplay: true,
			});
		}
	});
	return (
		<div className={styles.keyArt} id="2020-animation"></div>
	)
}