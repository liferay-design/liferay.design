/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import Plx from 'react-plx'

const Background = ({}) => {
	const opacityTransform = [
		{
			start: '40vh',
			end: '70vh',
			properties: [
				{
					startValue: 0,
					endValue: 1,
					property: 'opacity',
				},
			],
		},
		{
			start: '38vh',
			end: '100%',
			properties: [
				{
					startValue: 10,
					endValue: -10,
					unit: 'vh',
					property: 'translateY',
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
			<Plx
				style={{ opacity: 0, transform: 'translateY(10vh)' }}
				parallaxData={opacityTransform}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 1440 900"
				>
					<rect
						width="72"
						height="72"
						stroke="#1368DA"
						stroke-width="16"
						rx="4"
						transform="matrix(.86603 .5 .5 -.86603 1274 130)"
					/>
					<circle cx="195" cy="760" r="80" stroke="#F8BA5E" stroke-width="16" />
					<rect
						width="18"
						height="18"
						x="809"
						y="226"
						fill="#F8BA5E"
						rx="1"
						transform="rotate(-40 809 226)"
					/>
					<rect
						width="18"
						height="18"
						x="809"
						y="226"
						fill="#00BF76"
						rx="1"
						transform="rotate(-40 809 226)"
					/>
					<rect
						width="18"
						height="18"
						x="809"
						y="226"
						fill="#FFD7D8"
						rx="1"
						transform="rotate(-40 809 226)"
					/>
					<path
						fill="#1368DA"
						d="M583.8 92.63a4 4 0 016.82-1.2l6.68 7.96a4 4 0 01-2.37 6.51l-10.23 1.8a4 4 0 01-4.45-5.3l3.55-9.77z"
					/>
					<rect
						width="24"
						height="24"
						stroke="#1368DA"
						stroke-width="16"
						rx="2"
						transform="scale(1 -1) rotate(30 808.7 1943.3)"
					/>
					<rect
						width="24"
						height="24"
						stroke="#00BF76"
						stroke-width="16"
						rx="2"
						transform="scale(1 -1) rotate(30 808.7 1943.3)"
					/>
					<rect
						width="24"
						height="24"
						stroke="#F8BA5E"
						stroke-width="16"
						rx="2"
						transform="scale(1 -1) rotate(30 808.7 1943.3)"
					/>
					<rect
						width="24"
						height="24"
						stroke="#AE9CE7"
						stroke-width="16"
						rx="2"
						transform="scale(1 -1) rotate(30 808.7 1943.3)"
					/>
					<circle cx="960.5" cy="458.5" r="10.5" fill="#00BF76" />
					<rect
						width="18"
						height="18"
						x="850"
						y="810"
						fill="#F8BA5E"
						rx="1"
						transform="rotate(60 850 810)"
					/>
					<rect
						width="18"
						height="18"
						x="850"
						y="810"
						fill="#00BF76"
						rx="1"
						transform="rotate(60 850 810)"
					/>
					<rect
						width="18"
						height="18"
						x="850"
						y="810"
						fill="#FFD7D8"
						rx="1"
						transform="rotate(60 850 810)"
					/>
					<path
						fill="#AE9CE7"
						d="M554 850.02a4 4 0 013.98 5.67l-4.39 9.42a4 4 0 01-6.9.6l-5.96-8.5a4 4 0 012.93-6.29l10.35-.9z"
					/>
					<rect
						width="24"
						height="24"
						stroke="#1368DA"
						stroke-width="16"
						rx="2"
						transform="matrix(.5 .86603 .86603 -.5 680 660)"
					/>
					<rect
						width="24"
						height="24"
						stroke="#00BF76"
						stroke-width="16"
						rx="2"
						transform="matrix(.5 .86603 .86603 -.5 680 660)"
					/>
					<rect
						width="24"
						height="24"
						stroke="#F8BA5E"
						stroke-width="16"
						rx="2"
						transform="matrix(.5 .86603 .86603 -.5 680 660)"
					/>
				</svg>
			</Plx>
		</Box>
	)
}

export default Background
