import React from 'react'

import { Agenda, Footer, Header, HeroBanner, Team, Venue } from 'components/organisms'

const Events = () => (
	<div>
		<Header />

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

		<Footer />
	</div>
)

export default Events
