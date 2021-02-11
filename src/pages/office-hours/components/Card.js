/** @jsx jsx */

import { useEffect, useState } from 'react'
import { jsx, Box, Flex, Heading, Text } from 'theme-ui'
import { Link, Image, Icon } from 'components/atoms'
import moment from 'moment'
import { avatarPath, isLive, makeAuthorSlug, getLocalTimeZone } from 'utils'

const Card = ({ title, hosts, schedule, background, icon, meetRoom }) => {
	// references:
	// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
	// https://stackoverflow.com/questions/61091538/example-to-calculate-dates-using-usestate-in-react
	// https://stackoverflow.com/questions/37602853/how-to-loop-through-json-array-until-condition-is-met

	// const [isActive, setIsActive] = useState(false)

	// function evaluate(input) {
	// 	if (input === true) {
	// 		return true
	// 	} else {
	// 		return false
	// 	}
	// }

	// useEffect(() => {
	// 	const events = schedule.map(i => {
	// 		if (isLive(i.startDate, i.endDate)) {
	// 			return true
	// 		} else {
	// 			return false
	// 		}
	// 	})
	// 	events.some(evaluate)
	// 	return isActive
	// }, [])
	//
	// stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value

	return (
		<Box
			sx={{
				position: 'relative',
			}}
		>
			<Box
				sx={{
					backgroundColor: `${background}`,
					mt: [0, '8rem'],
					p: 3,
					height: 'max-content',
				}}
			>
				<Flex
					sx={{
						justifyContent: 'space-between',
						mb: 2,
					}}
				>
					<Heading
						as="h2"
						sx={{
							fontSize: [5, 6],
							mt: [1, 2],
						}}
					>
						{title}
					</Heading>
					<Icon
						sx={{
							height: [6, 7],
							width: [6, 7],
						}}
						color="white"
						name={icon ? icon : `${title ? title.toLowerCase() : title}`}
					/>
				</Flex>
				<Box
					sx={{
						my: 3,
					}}
				>
					{schedule
						? schedule.map((i, index) => (
								<Link
									key={index}
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
										'&:last-child > span:first-of-type': {
											mr: 0,
										},
										mb: ['1.5rem', 'initial'],
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
										{moment(i.startDate)
											.format('LT')
											.replace(/(:|\.|e)[0]{2}/, '') // removes :00 and space
											.replace(/\s/g, '')}{' '}
										{getLocalTimeZone()}
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
					<Flex
						sx={{
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Flex
							sx={{
								flexDirection: 'row-reverse',
								width: 'fit-content',
								ml: '-.2rem',
								mt: 2,
								'& > a:not(:last-child)': {
									ml: '-1rem',
								},
							}}
						>
							{hosts
								? hosts.map((i, index) => (
										<Link
											key={index}
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
