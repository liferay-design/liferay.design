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
		<Flex
			sx={{
				backgroundColor: theme => theme.colors.backgroundDark,
				height: ['auto', '100vh', null],
				py: 5,
			}}
		>
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
							variant: 'text.preheader',
							color: 'lightText',
							ml: [0, '17%', null],
							mb: 4,
							px: [2, 0, null],
							'&:before': {
								content: '""',
								width: '88px', // should match rest of site
								height: '1px',
								backgroundColor: 'primary',
								mr: '1rem',
								display: 'inline-block',
								verticalAlign: 'text-top',
								mt: '.5em',
							},
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
							variant: 'text.display',
							fontSize: [7, 5 ],
							color: 'lightText',
							ml: [0, '17%', null],
							px: [2, 0, null],
							width: ['100%', '48ch', null],
							lineHeight: '1.5',
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
