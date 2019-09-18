import { Footer, Navbar } from 'components/organisms'
import { FormNewsletter, FancyFooter } from 'components/molecules'
import React from 'react'
import { Container, Heading, Text } from 'components/atoms';

export default ({ children, section }) => (
	<>
		<Navbar section={section} />

		{children}

		<Container padding="6rem 0 0">
			<Heading align='center' color='white' level={2}>Sign up for our newsletter!</Heading>
			<Text align='center' color="lightGrey" margin='base'>No mystery meat here! Once a month we share links, articles, job listings, and more.</Text>
			<FormNewsletter placeholderText='Your Email Address' submitText='Subscribe' />
		</Container>
		<Footer />
		<FancyFooter />
	</>
)
