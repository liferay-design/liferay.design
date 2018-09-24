import React, { Component } from 'react'
import { CardGrid } from 'components/atoms'
import { Person } from 'components/molecules'
import styles from './styles.module.scss'
import teamMembers from './team_members'

class Team extends Component {
	state = {
		teamMembers,
	}

	render() {
		return (
			<CardGrid className={styles.wrapper}>
				{this.state.teamMembers.map(person => (
					<Person key={person.id} person={person} />
				))}
			</CardGrid>
		)
	}
}

export default Team