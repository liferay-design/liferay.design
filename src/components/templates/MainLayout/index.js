import React from 'react'
import { Footer, Navbar } from 'components/organisms'

export default ({ children, section }) => (
	<>
		<Navbar section={section} />

		{children}

		<Footer />
	</>
)
