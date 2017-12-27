import { Header, HeroBanner } from 'components/organisms'

import React from 'react'
import { Venue } from 'components/molecules'
import classes from './Events.scss'
import { navKeys } from 'components/organisms/Header'

class Events extends React.Component {
	render() {
		return (
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
	}
}

export default Events
