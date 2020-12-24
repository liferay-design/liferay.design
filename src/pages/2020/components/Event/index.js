/** @jsx jsx */

import { jsx, Box, Flex, Grid, Text, Heading, ThemeProvider } from 'theme-ui'
import { Link } from 'components/atoms'
import PropTypes from 'prop-types'
import Plx from 'react-plx'
import styles from './styles.module.scss'

const Event = ({ name, description, startDate, endDate, url, image }) => {
	const designerHired = [
		{
			start: 'self',
			duration: '50vh',
			properties: [
				{
					startValue: 0,
					endValue: 120,
					property: 'translateY',
				},
			],
		},
		{
			start: 'self',
			duration: '40vh',
			startOffset: '60vh',
			properties: [
				{
					startValue: 120,
					endValue: 0,
					property: 'translateY',
				},
			],
		},
	]
	const eventImage = [
		{
			start: 'self',
			duration: '40vh',
			startOffset: '40vh',
			properties: [],
		},
	]

	const startMonth = new Date(startDate).toLocaleDateString('en-us', {
		month: 'short',
		timeZone: 'UTC',
	})
	const startDay = new Date(startDate).toLocaleDateString('en-us', {
		day: '2-digit',
		timeZone: 'UTC',
	})
	const endDay = new Date(endDate).toLocaleDateString('en-us', {
		day: '2-digit',
		timeZone: 'UTC',
	})

	return (
		<Plx parallaxData={designerHired}>
			<Flex
				sx={{
					justifyContent: 'flex-start',
					alignItems: 'center',
					position: 'relative',
					pb: ['20vh', '6vw'],
					m: '4vw auto',
					flexDirection: ['column', 'row'],
				}}
			>
				<Flex
					sx={{
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '6rem',
						height: '6rem',
						variant: 'boxes.icon',
						textAlign: 'center',
					}}
					className={styles.date}
				>
					<div className={styles.month}>{startMonth}</div>
					<Flex
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div className={styles.day}>{startDay}</div>
						{endDate ? '\u00A0\u00A0—' : null}
						<div className={styles.day}>{endDate ? endDay : null}</div>
					</Flex>
				</Flex>
				<Flex
					sx={{
						flexDirection: ['column', 'row'],
						my: [4, 0],
						alignItems: 'center',
					}}
				>
					<Link to={url} sx={{ mx: 4, mt: [4, 0], order: 2 }}>
						<Plx
							tagName="img"
							parallaxData={eventImage}
							className={styles.image}
							src={image}
						/>
					</Link>
					<h4
						sx={{ textAlign: ['center', 'initial'] }}
						className={styles.pLarge}
					>
						{name}
						<span>{description}</span>
					</h4>
				</Flex>
			</Flex>
		</Plx>
	)
}

Event.propTypes = {
	image: PropTypes.object,
	month: PropTypes.string,
	startDay: PropTypes.string,
	endDay: PropTypes.string,
	name: PropTypes.string,
	details: PropTypes.string,
}

Event.defaultProps = {
	details: 'started in',
}

export default Event
