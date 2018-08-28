import React from 'react'
import { MainLayout } from 'components/templates'
import { HeroBanner, Posts } from 'components/organisms'

const Home = () => (
	<MainLayout>
		<HeroBanner />

		<Posts />
	</MainLayout>
)

export default Home
