import { Aux, Icon, Text } from 'components/atoms'

import PropTypes from 'prop-types'
import React from 'react'
import classes from './Agenda.module.scss'

export const Day = ({ current, day, onClick, previous }) => {
	function renderDayToggler() {
		if (day) {
			return (
				<div className={classes.dayToggle} onClick={onClick}>
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

		return <div className={classes.noDay} />
	}
	return (
		<Aux>
			{current ? (
				<div className={classes.currentDay}>
					{day.format('dddd')}&nbsp;
					<span>
						{day.format('MMM')} {day.format('DD')}
					</span>
				</div>
			) : (
				renderDayToggler()
			)}
		</Aux>
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
