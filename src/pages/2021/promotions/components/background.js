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
				<video
					sx={{ width: '100vw', height: 'auto', filter: 'blur(80px) invert(100%)', transform: 'rotate(180deg)', }}
					src="/images/2021/blob-no-blur.mp4"
					autoplay
					muted
				/>
			</Plx>
		</Box>
	)
}

export default Background
