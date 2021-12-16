/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import Plx from 'react-plx'

const Foreground = ({}) => {
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
					startValue: 5,
					endValue: -5,
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
				zIndex: 3,
			}}
		>
			<Plx
				style={{ opacity: 0, transform: 'translateY(5vh)' }}
				parallaxData={opacityTransform}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 1440 900"
					sx={{
						ml: ['-.5rem', 'initial', null],
						height: ['100vh', 'initial', null],
					}}
				>
					<rect
						width="18.61"
						height="18.61"
						x="340"
						y="390"
						fill="#FFD7D8"
						rx="1"
						transform="rotate(-148.18 376.81 337.62)"
					/>
					<path
						fill="#1368DA"
						d="M151 580.54a4 4 0 016 3.47v10.39a4 4 0 01-6 3.46l-9-5.2a4 4 0 010-6.92l9-5.2z"
					/>
					<rect
						width="24"
						height="24"
						stroke="#AE9CE7"
						strokeWidth="16"
						rx="2"
						transform="scale(1 -1) rotate(45 172.62 -71.5)"
					/>
					<rect
						width="18"
						height="18"
						x="1097"
						y="103"
						fill="#FFD7D8"
						rx="1"
						transform="rotate(-48 1097 103)"
					/>
					<path
						fill="#AE9CE7"
						d="M1230.35 369.63a4 4 0 014.07-5.6l10.34 1.08a4 4 0 012.82 6.33l-6.11 8.4a4 4 0 01-6.89-.72l-4.23-9.5z"
					/>
				</svg>
			</Plx>
		</Box>
	)
}

export default Foreground
