import React, { Component } from 'react'
import { Flex, Heading, Text } from 'components/atoms'
import { Person } from 'components/molecules'
import classes from './Team.module.scss'
import teamMembers from './team_members'

class Team extends Component {
	constructor(props) {
		super(props)

		this.state = {
			teamMembers,
		}
	}
	render() {
		return (
			<div className={classes.teamContainer} id="team">
				{/* <Flex className={classes.heading} justify="flex-start" width="100%">
					<Heading level={2} bottomBorder>
						Team
					</Heading>

					<Text color="black" type="p" width="60vw">
						We are 30+ designers from Brazil, Germany, Italy, Spain, and the US ✌️
					</Text>
				</Flex> */}

				<Flex justify="flex-start" flexWrap="wrap">
					{this.state.teamMembers.map(person => {
						return <Person key={person.id} person={person} />
					})}
				</Flex>
			</div>
		)
	}
}

export default Team
