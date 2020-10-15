/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import { Heading } from 'pages/design-week/components/_index'
import React from 'react'

export default class DWHeading extends React.Component {
	// componentDidMount() {
	// 	let page = document.documentElement
	// 	page.addEventListener('mousemove', e => {
	// 		let ow = page.offsetWidth
	// 		let oh = page.offsetHeight
	// 		page.style.setProperty('--mouseX', 16 + (e.clientX * 16) / ow + '%')
	// 		page.style.setProperty('--mouseY', 48 + (e.clientY * 10) / oh + '%')
	// 	})
	// }

	render() {
		function getRandomBgImage(max) {
			return Math.floor(Math.random() * Math.floor(max))
		}

		const randomImage = getRandomBgImage(6)

		
		const bgImage = '/images/design-week/bg-' + randomImage + '.jpg'
		
		const { color, delay, title } = this.props
		
		console.log(color,'color')

		return (
			<Box sx={{ gridArea: 'hero', position: 'relative' }}>
				<div
					sx={{
						height: '100%',
						width: '100%',
						position: 'absolute',
						backgroundSize: 'cover',
						opacity: 0,
						transform: 'translateX(-3rem)',
						backgroundImage: `${'url("' + bgImage + '")'}`,
						// backgroundColor: `${color}`,
						// backgroundBlendMode: 'multiply',
						backgroundColor: 'primary',
						backgroundBlendMode: 'lighten',
						animation: 'bgAnimateIn 2s ease-in-out 1s forwards',
						'@keyframes bgAnimateIn': {
							'0%': {
								opacity: 0,
								transform: 'translateX(-3rem)',
							},
							'30%': {
								opacity: 1,
							},
							'100%': {
								transform: 'translateX(0rem)',
								opacity: 1,
							},
						},
						'&:after': {
							content: '""',
							height: '100%',
							width: '100%',
							position: 'absolute',
							top: 0,
							left: 0,
							bg: `${color}`,
							mixBlendMode: 'multiply',
							// bg: 'primary',
							// mixBlendMode: 'lighten',
						},
					}}
				/>
				<Heading bgImage={bgImage} delay={delay} title={title} />
			</Box>
		)
	}
}
