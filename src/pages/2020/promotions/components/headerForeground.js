/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import Plx from 'react-plx'

const HeaderForeground = ({}) => {
	const opacity = [
		{
			start: '50vh',
			end: '70vh',
			properties: [
				{
					startValue: 1,
					endValue: 0,
					property: 'opacity',
				},
			],
		},
	]
	return (
		<Box
			sx={{
				variant: 'boxes.fullScreen',
				zIndex: 3,
			}}
		>
			<Plx parallaxData={opacity}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					width="100%"
					viewBox="0 0 1440 900"
					sx={{
						width: ['2800px', '100%', null],
						height: ['100vh', 'auto', null],
						opacity: 0,
						'@keyframes fadeIn': {
							to: {
								opacity: 1,
							},
						},
						animation: 'fadeIn .3s ease-in forwards',
					}}
				>
					<use x="-2000" xlinkHref="#foreground">
						<animateTransform
							attributeName="transform"
							type="translate"
							from="0 0"
							to="2800 0"
							begin="0s"
							dur="320s"
							repeatCount="indefinite"
						/>
					</use>
					<use x="800" xlinkHref="#foreground">
						<animateTransform
							attributeName="transform"
							type="translate"
							from="0 0"
							to="2800 0"
							begin="0s"
							dur="320s"
							repeatCount="indefinite"
						/>
					</use>
					<defs>
						<g id="foreground">
							<rect
								width="14"
								height="14"
								x="1575.92"
								y="349"
								fill="#FFD7D8"
								rx="1"
								transform="rotate(25 1575.92 349)"
							/>
							<rect
								width="14"
								height="14"
								x="1439"
								y="508"
								fill="#00BF76"
								rx="1"
								transform="rotate(-30 1439 508)"
							/>
							<path
								fill="#AE9CE7"
								d="M2386.19 379.08a3.08 3.08 0 013.6 3.92l-3.01 9.56a3.08 3.08 0 01-5.2 1.15l-6.77-7.38a3.07 3.07 0 011.6-5.08l9.78-2.17z"
							/>
							<circle cx="2145" cy="492" r="9" fill="#00BF76" />
							<circle cx="1894" cy="363" r="8" fill="#FFD7D8" />
							<path
								fill="#AE9CE7"
								d="M225.26 592.17a3.07 3.07 0 003.16 4.28l7.94-.9a3.07 3.07 0 002.13-4.87l-4.74-6.43a3.07 3.07 0 00-5.3.6l-3.19 7.32z"
							/>
							<rect
								width="24"
								height="24"
								stroke="#1368DA"
								strokeWidth="13"
								rx="2"
								transform="scale(1 -1) rotate(-45 61.47 -1715.43)"
							/>
							<rect
								width="14"
								height="14"
								fill="#FFD7D8"
								rx="1"
								transform="scale(1 -1) rotate(-70 -312.61 -218.9)"
							/>
							<path
								fill="#AE9CE7"
								d="M946.2 362.63a3.07 3.07 0 003.59-3.92l-3-9.56a3.07 3.07 0 00-5.2-1.15l-6.78 7.38a3.07 3.07 0 001.6 5.08l9.78 2.17z"
							/>
							<circle
								r="8"
								fill="#FFD7D8"
								transform="matrix(1 0 0 -1 427 347)"
							/>
							<rect
								width="16"
								height="16"
								stroke="#00BF76"
								strokeWidth="13"
								rx="1"
								transform="scale(1 -1) rotate(30 1177.96 844.37)"
							/>
						</g>
					</defs>
				</svg>
			</Plx>
		</Box>
	)
}

export default HeaderForeground
