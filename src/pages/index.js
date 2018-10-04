import React from 'react'
import { MainLayout } from 'components/templates'
import { HeroBanner, Posts } from 'components/organisms'
import { Container } from 'components/atoms'

const Home = () => (
	<MainLayout>
		<HeroBanner />
		<Container>
			<Posts />
		</Container>
	</MainLayout>
)

export default Home
