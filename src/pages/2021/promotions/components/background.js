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
					filter="url(#large)"
					sx={{
						ml: ['-40vw', 'initial', null],
						height: ['100vh', 'initial', null],
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
						<feGaussianBlur in="SourceGraphic" stdDeviation="32" />
					</filter>
					<rect
						width="72"
						height="72"
						stroke="#1368DA"
						strokeWidth="16"
						rx="4"
						transform="matrix(.86603 .5 .5 -.86603 1274 130)"
					/>
					<circle cx="195" cy="760" r="80" stroke="#F8BA5E" strokeWidth="16" />
					<path
						filter="url(#medium)"
						fill="#1368DA"
						d="M583.8 92.63a4 4 0 016.82-1.2l6.68 7.96a4 4 0 01-2.37 6.51l-10.23 1.8a4 4 0 01-4.45-5.3l3.55-9.77z"
					/>
					<rect
						width="24"
						height="24"
						stroke="#F8BA5E"
						strokeWidth="16"
						rx="2"
						transform="rotate(30)"
						x="790"
						y="160"
						filter="url(#small)"
					/>
				</svg>
			</Plx>
		</Box>
	)
}

export default Background
