/** @jsx jsx */

import { jsx, Box, Flex, Heading, Text } from 'theme-ui'
import { Link, Image, Icon } from 'components/atoms'
import { avatarPath } from 'utils'

const Card = ({ title, hosts, schedule, background, icon }) => {
	return (
		<Box
			sx={{ backgroundColor: `${background}`, mt: 5, p: 3, height: 'max-content' }}
		>
			<Flex sx={{ justifyContent: 'space-between', mb: 3 }}>
				<Heading as="h2" sx={{ fontSize: 6, mt: 2 }}>
					{title}
				</Heading>
				<Icon
					sx={{ height: 7, width: 7 }}
					color="white"
					name={icon ? icon : title.toLowerCase()}
				/>
			</Flex>
			<Box sx={{ mb: 3 }}>
				{schedule.map(i => (
					<Text
						as="span"
						sx={{ variant: 'labels.outline', color: 'white', mr: 1 }}
					>
						{i.day} {i.time}
					</Text>
				))}
			</Box>
			<Box>
				<Heading>Hosts</Heading>
				<Flex
					sx={{
						flexDirection: 'row-reverse',
						width: 'fit-content',
						ml: '-.2rem',
						mt: 2,
						'& > div:not(:last-child)': { ml: '-1rem' },
					}}
				>
					{hosts.map(i => (
						<div>
							<Image
								sx={{
									variant: 'images.avatar',
									backgroundColor: `${background}`,
									border: 'solid 4px rgba(255,255,255,0.08)',
								}}
								alt={i + '’s headshot'}
								src={avatarPath(i)}
							/>
						</div>
					))}
				</Flex>
			</Box>
		</Box>
	)
}

export default Card
