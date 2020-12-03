import { Link } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import Plx from 'react-plx'
import styles from './styles.module.scss'
import { Flex } from 'theme-ui'

const Event = ({
	profileUrl,
	month,
	startDay,
	endDay,
	headshot,
	name,
	detail,
	location,
	promotion,
	birthRay,
}) => {
	const detailMap = {
		firstDay: ' started in',
		birthRay: "'s first birth-ray",
		promoted: ' promoted to',
	}

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
	const designerHeadshot = [
		{
			start: 'self',
			duration: '40vh',
			startOffset: '40vh',
			properties: [],
		},
	]

	return (
		<Plx parallaxData={designerHired} className={styles.hired}>
			<div className={`${birthRay ? styles.birthRay : styles.date}`}>
				<div className={styles.month}>{month}</div>
				<Flex
					sx={{
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<div className={styles.day}>{startDay}</div>
					{endDay ? ' – ' : null}
					<div className={styles.day}>{endDay ? endDay : null}</div>
				</Flex>
			</div>
			<Link to={profileUrl}>
				<Plx
					tagName="img"
					parallaxData={designerHeadshot}
					className={styles.designerHeadshot}
					src={headshot}
				/>
			</Link>
			<h4 className={styles.pLarge}>
				{name}
				<span>
					{detailMap[detail]}  {location ? location : null} {promotion ? promotion : null}
				</span>
			</h4>
		</Plx>
	)
}

Event.propTypes = {
	profileUrl: PropTypes.string,
	month: PropTypes.string,
	day: PropTypes.string,
	name: PropTypes.string,
	details: PropTypes.string,
}

Event.defaultProps = {
	details: 'started in',
}

export default Event
