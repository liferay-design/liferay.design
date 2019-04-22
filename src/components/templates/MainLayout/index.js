import { Footer, Navbar } from 'components/organisms'
import React from 'react'

export default ({ children, section }) => (
	<>
		<Navbar section={section} />

		{children}

		<Footer />
	</>
)
