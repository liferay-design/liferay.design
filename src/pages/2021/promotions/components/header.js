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
				pt: [3, 5],
				pb: 5,
				overflowX: ['hidden', 'initial'],
			}}
		>
			<Flex
				sx={{
					flexDirection: 'column',
					justifyContent: 'center',
					maxWidth: '1280px',
					mx: [1, 'auto', null],
					my: 0,
					width: '100%',
				}}
			>
				<AnimateIn>
					<Heading
						sx={{
							variant: 'text.preheader',
							color: 'lightText',
							mb: [3, 4],
							mt: [4, null],
							px: [2, 1, 0],
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
							fontSize: [5, 6],
							color: 'lightText',
							px: [2, 1, 0],
							width: ['100%', '48%', null],
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
