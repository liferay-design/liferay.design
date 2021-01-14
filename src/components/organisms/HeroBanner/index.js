/** @jsx jsx */

import { jsx, Flex, Text } from 'theme-ui'

const HeroBanner = () => (
	<Flex
		sx={{
			alignItems: 'center',
			justifyContent: ['flex-start', 'center', null],
			height: ['40vh', '448px', null],
			margin: '0 auto',
			pl: [3, 0, null],
			minWidth: '360px',
			position: 'relative',
			width: '100vw',
			maxWidth: '100%',
		}}
	>
		<Text
			as="h1"
			sx={{
				width: ['14ch', '20ch', null],
				fontSize: [5, 6, null],
				fontWeight: 'heading',
				color: 'white',
			}}
		>
			We are{' '}
			<Text as="span" sx={{ color: 'neutral1' }}>
				Liferayʼs global team of{' '}
			</Text>
			designers.
		</Text>
	</Flex>
)

export default HeroBanner
