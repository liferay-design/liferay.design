/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import Plx from 'react-plx'

const HeaderBackground = ({}) => {
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
				zIndex: 0,
			}}
		>
			<Plx parallaxData={opacity}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					width="100%"
					viewBox="0 0 1440 900"
					filter="url(#large)"
					sx={{
						width: ['100vw', '100%', null],
						height: ['2950px', 'auto', null],
						opacity: 0,
						'@keyframes fadeIn': {
							to: {
								opacity: 1,
							},
						},
						animation: 'fadeIn .4s ease-in forwards',
					}}
				>
					<filter
						id="large"
						x="-30%"
						y="-30%"
						width="160%"
						height="160%"
						filterUnits="objectBoundingBox"
					>
						<feGaussianBlur in="SourceGraphic" stdDeviation="24" />
					</filter>
					<use y="-2950" xlinkHref="#background">
						<animateTransform
							attributeName="transform"
							type="translate"
							from="0 0"
							to="0 2950"
							begin="0s"
							dur="240s"
							repeatCount="indefinite"
						/>
					</use>
					<use y="0" xlinkHref="#background">
						<animateTransform
							attributeName="transform"
							type="translate"
							from="0 0"
							to="0 2950"
							begin="0s"
							dur="240s"
							repeatCount="indefinite"
						/>
					</use>
					<defs>
						<g id="background">
							<rect
								width="14"
								height="14"
								x="1624.36"
								y="315.06"
								fill="#FFD7D8"
								rx="1"
								transform="rotate(25 1624.36 315.06)"
							/>
							<path
								fill="#AE9CE7"
								d="M1720.26 604.3a3.07 3.07 0 013.16-4.28l7.94.9a3.07 3.07 0 012.13 4.88l-4.74 6.42a3.07 3.07 0 01-5.29-.6l-3.2-7.32z"
							/>
							<rect
								width="24"
								height="24"
								stroke="#F8BA5E"
								strokeWidth="13"
								rx="2"
								transform="scale(1 -1) rotate(-45 267.47 -1978)"
							/>
							<rect
								width="14"
								height="14"
								x="2258.77"
								y="344.55"
								fill="#FFD7D8"
								rx="1"
								transform="rotate(-70 2258.77 344.55)"
							/>
							<rect
								width="16"
								height="16"
								stroke="#00BF76"
								strokeWidth="13"
								rx="1"
								transform="scale(1 -1) rotate(30 1623.1 3445.09)"
							/>
							<rect
								width="16"
								height="16"
								x="2409.18"
								y="551.17"
								fill="#FFD7D8"
								rx="1"
								transform="rotate(-20 2409.18 551.17)"
							/>
							<rect
								width="14"
								height="14"
								x="1537.2"
								y="548.89"
								fill="#00BF76"
								rx="1"
								transform="rotate(-30 1537.2 548.9)"
							/>
							<path
								fill="#AE9CE7"
								d="M2627.19 324.08a3.08 3.08 0 013.6 3.92l-3.01 9.56a3.08 3.08 0 01-5.2 1.15l-6.77-7.38a3.07 3.07 0 011.6-5.08l9.78-2.17z"
							/>
							<circle cx="2349" cy="417" r="9" fill="#00BF76" />
							<circle cx="2080" cy="590" r="8" fill="#FFD7D8" />
							<rect
								width="16"
								height="16"
								x="2721.49"
								y="411.91"
								fill="#FFD7D8"
								rx="1"
								transform="rotate(-60 2721.49 411.91)"
							/>
							<circle cx="2822" cy="615" r="7" fill="#00BF76" />
							<rect
								width="14"
								height="14"
								fill="#FFD7D8"
								rx="1"
								transform="scale(1 -1) rotate(25 1481.83 45.35)"
							/>
							<path
								fill="#AE9CE7"
								d="M253.26 332.7a3.08 3.08 0 003.17 4.28l7.93-.9a3.07 3.07 0 002.13-4.88l-4.74-6.42a3.07 3.07 0 00-5.3.6l-3.19 7.31z"
							/>
							<rect
								width="24"
								height="24"
								x="10"
								y="540"
								stroke="#F8BA5E"
								strokeWidth="13"
								rx="2"
								transform="rotate(-45 10 540)"
							/>
							<rect
								width="14"
								height="14"
								fill="#FFD7D8"
								rx="1"
								transform="scale(1 -1) rotate(-70 -26.73 -861.55)"
							/>
							<rect
								width="16"
								height="16"
								x="473"
								y="580"
								stroke="#00BF76"
								strokeWidth="13"
								rx="1"
								transform="rotate(30 473 580)"
							/>
							<rect
								width="16"
								height="16"
								fill="#FFD7D8"
								rx="1"
								transform="scale(1 -1) rotate(-20 -647.91 -2891.86)"
							/>
							<rect
								width="14"
								height="14"
								fill="#00BF76"
								rx="1"
								transform="matrix(.86603 .5 .5 -.86603 70 388)"
							/>
							<path
								fill="#AE9CE7"
								d="M1160.19 599.92a3.08 3.08 0 003.6-3.92l-3.01-9.56a3.08 3.08 0 00-5.2-1.15l-6.77 7.38a3.07 3.07 0 001.6 5.08l9.78 2.17z"
							/>
							<circle
								r="9"
								fill="#00BF76"
								transform="matrix(1 0 0 -1 882 521)"
							/>
							<circle
								r="8"
								fill="#FFD7D8"
								transform="matrix(1 0 0 -1 613 347)"
							/>
							<rect
								width="16"
								height="16"
								fill="#FFD7D8"
								rx="1"
								transform="matrix(.5 .86603 .86603 -.5 1260 525)"
							/>
							<circle
								r="7"
								fill="#00BF76"
								transform="matrix(1 0 0 -1 1355 323)"
							/>
						</g>
					</defs>
				</svg>
			</Plx>
		</Box>
	)
}

export default HeaderBackground
