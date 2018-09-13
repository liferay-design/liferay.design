import React, { Component } from 'react'
import { Flex, Heading } from 'components/atoms'
import { Person } from 'components/molecules'
import styles from './styles.module.scss'
import teamMembers from './team_members'

class Team extends Component {
	state = {
		teamMembers,
	}

	render() {
		return (
			<div className={styles.teamContainer} id="team">
				<Heading level={1} color="white">
					The Squad
				</Heading>

				<Flex className={styles.wrapper} justify="space-between" flexWrap="wrap">
					{this.state.teamMembers.map(person => (
						<Person key={person.id} person={person} />
					))}
				</Flex>
			</div>
		)
	}
}

export default Team
