import {List, Map} from 'immutable';
import React from 'react';

import HeroBanner from 'components/banner/HeroBanner';
import Header, {navKeys} from 'components/header/Header';

class Events extends React.Component {
	render() {
		return (
			<div>
				<Header
					selected={navKeys.events}
				/>

				<HeroBanner
					label={'event'}
					primaryHeader={'Design Week'}
					secondaryHeader={'Los Angeles, CA'}
					tertiaryHeader={'2018'}
				/>

				{"Hello World"}
			</div>
		)
	}
}

export default Events;