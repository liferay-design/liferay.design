/** @jsx jsx */

import { jsx, Box, Flex, Heading, Text, Button } from 'theme-ui'
import { Link, Image, Icon, LiveTag } from 'components/atoms'
import moment from 'moment'
import { avatarPath, makeAuthorSlug } from 'utils'

const Card = ({ title, hosts, schedule, background, icon }) => {
	return (
		<Box>
			<LiveTag schedule={schedule} />
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
						name={icon ? icon : `${title ? title.toLowerCase() : title}`}
					/>
				</Flex>
				<Box sx={{ my: 3 }}>
					{schedule
						? schedule.map(i => (
								<Link
									to={i.calendarEvent}
									sx={{
										position: 'relative',
										display: 'inline-block',
										transition: 'transform .2s ease-in-out',
										'&:hover': {
											transform: 'translateY(-.5em)',
											transition: 'transform .2s ease-in-out',
										},
										'&:hover > span': {
											visibility: 'visible',
											transition: 'opacity .2s ease-in-out .1s',
											opacity: 1,
										},
									}}
								>
									<Text
										as="span"
										sx={{
											variant: 'labels.outline',
											color: 'white',
											mr: 1,
										}}
									>
										{i.label
											? i.label // if there's a label, show that
											: moment(i.startDate).format('ddd')}{' '}
										{moment(i.startDate).format('LT')}
									</Text>
									<Text
										as="span"
										sx={{
											visibility: 'hidden',
											opacity: 0,
											position: 'absolute',
											top: 3,
											left: 0,
											whiteSpace: 'nowrap',
											color: 'white',
											fontWeight: 600,
										}}
									>
										Add to Calendar
									</Text>
								</Link>
						  ))
						: schedule}
				</Box>
				<Box>
					<Heading>Hosts</Heading>
					<Flex sx={{ justifyContent: 'space-between' }}>
						<Flex
							sx={{
								flexDirection: 'row-reverse',
								width: 'fit-content',
								ml: '-.2rem',
								mt: 2,
								'& > a:not(:last-child)': { ml: '-1rem' },
							}}
						>
							{hosts
								? hosts.map(i => (
										<Link
											to={'/team/' + makeAuthorSlug(i)}
											sx={{
												position: 'relative',
												'&:hover > span': {
													visibility: 'visible',
													opacity: 1,
													transform:
														'opacity .2s ease-in-out .1s',
												},
											}}
										>
											<Image
												sx={{
													variant: 'images.avatar',
													backgroundColor: `${background}`,
													border:
														'solid 4px rgba(255,255,255,0.08)',
												}}
												alt={i + '’s headshot'}
												src={avatarPath(i)}
											/>
											<Text
												as="span"
												sx={{
													visibility: 'hidden',
													opacity: 0,
													position: 'absolute',
													top: '4rem',
													left: '.4em',
													whiteSpace: 'nowrap',
													color: 'white',
													fontWeight: 600,
												}}
											>
												{i}
											</Text>
										</Link>
								  ))
								: hosts}
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}

export default Card
