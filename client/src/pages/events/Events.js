import { Agenda, Footer, Header, HeroBanner, Team, Venue } from 'components/organisms'

import React from 'react'
import { navKeys } from 'components/organisms/Header'

const Events = () => (
	<div>
		<Header selected={navKeys.events} />

		<HeroBanner
			label="event"
			primaryHeader="Design Week"
			secondaryHeader="Los Angeles, CA"
			tertiaryHeader="2018"
		/>

		<Venue />

		<Agenda />

		<Footer />

		<Team />
	</div>
)

export default Events
