import { Footer, Navbar } from 'components/organisms'
import { FormNewsletter } from 'components/molecules'
import React from 'react'
import { Container } from 'components/atoms';

export default ({ children, section }) => (
	<>
		<Navbar section={section} />

		{children}

		<Container>
			<FormNewsletter />
		</Container>
		<Footer />
	</>
)
