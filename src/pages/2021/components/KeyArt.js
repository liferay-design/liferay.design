/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import { useEffect } from 'react'

export default ({}) => {
	useEffect(() => {
		const script = document.createElement('script')

		script.src =
			'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.4/lottie.min.js'
		script.async = false

		document.head.appendChild(script)

		script.onload = function() {
			lottie.loadAnimation({
				container: document.getElementById('2020-animation'),
				path: '/files/animations/2020-crop.json',
				renderer: 'svg',
				loop: false,
				autoplay: true,
			})
		}
	})
	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: '940px',
				margin: 'auto',
			}}
			id="2020-animation"
		></Box>
	)
}
