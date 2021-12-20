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
				<video
					sx={{ width: '100vw', height: 'auto', filter: 'blur(80px)' }}
					src="/images/2021/blob-no-blur.mp4"
					autoplay
					muted
				/>
			</Plx>
		</Box>
	)
}

export default HeaderBackground
