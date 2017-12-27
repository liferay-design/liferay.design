import { Header, HeroBanner } from 'components/organisms'

import React from 'react'
import { Venue } from 'components/molecules'
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
	</div>
)

export default Events
