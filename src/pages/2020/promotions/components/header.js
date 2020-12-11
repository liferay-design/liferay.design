/** @jsx jsx */

import Headshots from './headshots.js'
import { jsx, Flex, Heading, Text } from 'theme-ui'
import { AnimateIn } from 'components/atoms'

import yaml from 'markdown/annual-reports/TwentyTwenty.yaml'
import HeaderBackground from './headerBackground.js'
import HeaderForeground from './headerForeground.js'

const promotions = yaml.promotionsPage

export default ({}) => {
	const Header = (
		<Flex sx={{ background: 'white', height: '100vh' }}>
			<Flex
				sx={{
					justifyContent: 'center',
					maxWidth: '1280px',
					margin: '0 auto',
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<AnimateIn>
					<Heading sx={{ ml: '17%', mb: 4, color: 'main', fontSize: 6 }}>
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
							ml: '17%',
							width: '48ch',
							lineHeight: '1.5',
							fontFamily: 'modes.brand.body',
							fontSize: 4,
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
