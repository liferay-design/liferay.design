/** @jsx jsx */

import Headshots from './headshots.js'
import { jsx, Flex, Heading, Text } from 'theme-ui'
import { AnimateIn } from 'components/atoms'

import yaml from 'markdown/annual-reports/TwentyTwentyOne.yaml'
import HeaderBackground from './headerBackground.js'
import HeaderForeground from './headerForeground.js'

const promotions = yaml.promotionsPage

export default ({}) => {
	const Header = (
		<Flex sx={{ background: 'white', height: ['auto', '100vh', null], py: 5 }}>
			<Flex
				sx={{
					justifyContent: 'center',
					maxWidth: '1280px',
					my: 0,
					mx: [1, 'auto', null],
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<AnimateIn>
					<Heading
						sx={{
							ml: [0, '17%', null],
							mb: 4,
							color: 'main',
							fontSize: [5, 6, null],
							px: [2, 0, null],
						}}
					>
						{promotions.title}
					</Heading>
				</AnimateIn>
				<HeaderBackground />
				<Headshots />
				<HeaderForeground />
				<AnimateIn delay=".5s">
					<Text
						as="h2"
						sx={{
							ml: [0, '17%', null],
							px: [2, 0, null],
							width: ['100%', '48ch', null],
							lineHeight: '1.5',
							fontFamily: 'modes.brand.body',
							fontSize: [3, 4, null],
							fontWeight: 'body',
						}}
					>
						{promotions.subtitle}
					</Text>
				</AnimateIn>
			</Flex>
		</Flex>
	)
	return <div>{Header}</div>
}
