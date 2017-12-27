import { Header, HeroBanner } from 'components/organisms'

import React from 'react'
import { navKeys } from 'components/organisms/Header'

class Events extends React.Component {
	render() {
		return (
			<div>
				<Header selected={navKeys.events} />

				<HeroBanner
					label={'event'}
					primaryHeader={'Design Week'}
					secondaryHeader={'Los Angeles, CA'}
					tertiaryHeader={'2018'}
				/>

				{'Hello World'}
			</div>
		)
	}
}

export default Events
