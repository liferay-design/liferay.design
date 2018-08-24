import React from 'react'
import { MainLayout } from 'components/templates'
import { Agenda, HeroBanner, Team, Venue } from 'components/organisms'

const Events = () => (
	<MainLayout section="Events">
		<HeroBanner
			label="event"
			primaryHeader="Design Week"
			secondaryHeader="Los Angeles, CA"
			date="Jan 22 — 26"
			tertiaryHeader="2018"
		/>

		<Venue />

		<Agenda />

		<Team />
	</MainLayout>
)

export default Events
