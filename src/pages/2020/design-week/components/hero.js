/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import { Heading } from 'pages/2020/design-week/components/_index'
import React from 'react'

export default class DWHeading extends React.Component {
	render() {
		function getRandomBgImage(max) {
			return Math.floor(Math.random() * Math.floor(max))
		}

		const randomImage = getRandomBgImage(7)

		const bgImage = '/images/design-week/bg-' + randomImage + '.jpg'

		const { color, delay, title } = this.props

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
						},
					}}
				/>
				<Heading bgImage={bgImage} delay={delay} title={title} />
			</Box>
		)
	}
}
