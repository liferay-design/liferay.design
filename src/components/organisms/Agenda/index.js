import { Flex, Heading, Text } from 'components/atoms'
import moment from 'moment'
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Day from './Day'
import scheduleArray from './scheduleData'
import styles from './styles.module.scss'
import Talk from './Talk'

export class Agenda extends Component {
	constructor() {
		super()

		this.state = {
			currentAgenda: scheduleArray[4],
			currentDay: this.getDate(scheduleArray[4].day),
			//nextDay: this.getDate(scheduleArray[0].day),
			previousDay: this.getDate(scheduleArray[3].day),
		}

		this.toggleDay = this.toggleDay.bind(this)
	}
	getDate(date) {
		return moment(date, 'MM-DD-YYYY')
	}
	getNextDay(index) {
		if (index < scheduleArray.length - 1) {
			const nextIndex = index + 1
			return this.getDate(scheduleArray[nextIndex].day)
		}
		return null
	}
	getPreviousDay(index) {
		if (index > 0) {
			const previousIndex = index - 1
			return this.getDate(scheduleArray[previousIndex].day)
		}
		return null
	}
	toggleDay(toggleDirection) {
		const currentIndex = this.state.currentAgenda.id
		const scheduleLength = scheduleArray.length - 1

		let updatedIndex

		if (toggleDirection === 'previous') {
			updatedIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex
		} else {
			updatedIndex = currentIndex < scheduleLength ? currentIndex + 1 : currentIndex
		}

		this.setState({
			currentAgenda: scheduleArray[updatedIndex],
			currentDay: this.getDate(scheduleArray[updatedIndex].day),
			nextDay: this.getNextDay(updatedIndex),
			previousDay: this.getPreviousDay(updatedIndex),
		})
	}
	render() {
		const { currentDay, nextDay, previousDay } = this.state

		return (
			<div className={styles.agendaContainer} id="agenda">
				<Flex
					className={styles.heading}
					justify="flex-start"
					flexWrap="wrap"
					width="100%"
				>
					<Heading level={2} bottomBorder>
						Agenda
					</Heading>

					<Text type="p" color="grey">
						The first Design Week at Liferay features a variety of sessions
						that will give insights into what the teams in each region are
						working on, as well as provide a foundation for increased
						collaboration.
					</Text>
				</Flex>
				<MediaQuery minWidth={800}>
					<Flex justify="space-between">
						<Day
							day={previousDay}
							onClick={() => this.toggleDay('previous')}
							previous
						/>

						<div className={styles.schedule}>
							<Day current day={currentDay} />

							{this.state.currentAgenda.talks.map((data, i) => (
								<Talk data={data} key={i} />
							))}
						</div>

						<Day day={nextDay} onClick={() => this.toggleDay('next')} />
					</Flex>
				</MediaQuery>
				<MediaQuery maxWidth={799}>
					<div className={styles.mobileAgenda}>
						<Flex className={styles.mobileToggles}>
							<Day
								day={previousDay}
								onClick={() => this.toggleDay('previous')}
								previous
							/>
							<Day day={nextDay} onClick={() => this.toggleDay('next')} />
						</Flex>
						<div className={styles.schedule}>
							<Day current day={currentDay} />

							{this.state.currentAgenda.talks.map((data, i) => (
								<Talk data={data} key={i} />
							))}
						</div>
					</div>
				</MediaQuery>
			</div>
		)
	}
}

export default Agenda
