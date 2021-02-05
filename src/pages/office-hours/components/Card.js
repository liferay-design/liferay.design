/** @jsx jsx */

import { jsx, Box, Flex, Heading, Text } from 'theme-ui'
import { Link, Image, Icon } from 'components/atoms'
import moment from 'moment'
import { avatarPath } from 'utils'

const Card = ({ title, hosts, schedule, background, icon }) => {
	console.log(moment().local(true), 'time')
	return (
		<Box
			sx={{
				backgroundColor: `${background}`,
				mt: [0, '6rem'],
				p: 3,
				height: 'max-content',
			}}
		>
			<Flex sx={{ justifyContent: 'space-between', mb: 2 }}>
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
						{i.day}{' '}
						{moment(i.time, 'hhmm')
							.local(true)
							.format('h:mm A')}
						{console.log(moment(i.time))}
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
