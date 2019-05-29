import { Footer, Navbar } from 'components/organisms'
import { FormNewsletter } from 'components/molecules'
import React from 'react'
import { Container, Heading } from 'components/atoms';

export default ({ children, section }) => (
	<>
		<Navbar section={section} />

		{children}

		<Container>
			<Heading align='center' color='white' level={2}>Sign up for our newsletter!</Heading>
			<FormNewsletter placeholderText='Your Email Address' submitText='Subscribe Now!' />
		</Container>
		<Footer />
	</>
)
