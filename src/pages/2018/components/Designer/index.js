import { Link } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import Plx from 'react-plx'
import styles from './styles.module.scss'

const Designer = ({
	profileUrl,
	month,
	day,
	headshot,
	name,
	detail,
	country,
	birthRay,
}) => {
	const detailMap = {
		firstDay: ' started in',
		birthRay: "'s first birth-ray",
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
				<div className={styles.day}>{day}</div>
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
					{detailMap[detail]} {country}
				</span>
			</h4>
		</Plx>
	)
}

Designer.propTypes = {
	profileUrl: PropTypes.string,
	month: PropTypes.string,
	day: PropTypes.string,
	name: PropTypes.string,
	details: PropTypes.string,
}

Designer.defaultProps = {
	details: 'started in',
}

export default Designer
