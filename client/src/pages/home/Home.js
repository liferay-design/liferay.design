import { Agenda, Footer, Header, HeroBanner, Posts, Venue } from 'components/organisms'

import React from 'react'
import { navKeys } from 'components/organisms/Header'

const Home = () => (
	<div>
		<Header selected={navKeys.null} />

		<HeroBanner primaryHeader="Create Useful & Effective Personas" tertiaryHeader="4 mins" />

		<Posts />

		<Footer />
	</div>
)

export default Home
