import { CardGrid } from 'components/atoms'
import { Person } from 'components/molecules'
import React from 'react'
import teamMembers from './team_members'

export default function Team() {
	return (
		<CardGrid>
			{teamMembers.map(person => (
				<Person key={person.id} person={person} />
			))}
		</CardGrid>
	)
}
