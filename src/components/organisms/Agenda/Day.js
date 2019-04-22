import { Icon, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export const Day = ({ current, day, onClick, previous }) => {
	function renderDayToggler() {
		if (day) {
			return (
				<div className={styles.dayToggle} onClick={onClick}>
					<Icon name={`${previous ? 'leftArrowTrailing' : null}`} />

					<Text>
						{day.format('dddd')}
						<span> {day.format('MMM')}</span>
						<span> {day.format('DD')}</span>
					</Text>

					<Icon name={`${previous ? null : 'rightArrowTrailing'}`} />
				</div>
			)
		}

		return <div className={styles.noDay} />
	}
	return (
		<>
			{current ? (
				<div className={styles.currentDay}>
					{day.format('dddd')}
					&nbsp;
					<span>
						{day.format('MMM')} {day.format('DD')}
					</span>
				</div>
			) : (
				renderDayToggler()
			)}
		</>
	)
}

Day.propTypes = {
	className: PropTypes.string,
	current: PropTypes.bool,
	day: PropTypes.object,
	onClick: PropTypes.func,
	previous: PropTypes.bool,
}

export default Day
