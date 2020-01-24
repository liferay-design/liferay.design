import { Footer, Navbar } from 'components/organisms'
import { FormNewsletter, FancyFooter } from 'components/molecules'
import React from 'react'
import { Link, Container, Heading, Text, Icon } from 'components/atoms'

export default ({ children, section }) => (
	<>
		<Navbar section={section} />

		{children}

		<Container padding="6rem 0 0">
			<Heading align="center" color="white" level={2}>
				Sign up for our monthly newsletter!
			</Heading>
			<Link to="/newsletter">
				<Text align="center" color="lightGrey" margin="base">
					Read past issues
					<Icon fill="lightGrey" margin='.2em 0 0 1em' name="rightArrow" />
				</Text>
			</Link>
			<FormNewsletter placeholderText="Your Email Address" submitText="Subscribe" />
		</Container>
		<Footer />
		<FancyFooter />
	</>
)
