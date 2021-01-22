/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Footer, Navbar } from 'components/organisms'
import { FormNewsletter, FancyFooter } from 'components/molecules'
import { Link, Container, Heading, Text, Icon } from 'components/atoms'
import LogRocket from 'utils/logRocket'

export default ({ children, section }) => (
	<div
		sx={{
			backgroundAttachment: 'fixed',
			backgroundColor: 'background',
			backgroundImage: 'url(/images/diamond-bar-topography.png)',
			backgroundRepeat: 'no-repeat repeat',
			backgroundSize: '100%',
			position: 'relative',
		}}
	>
		<LogRocket />
		<Navbar section={section} />

		{children}

		<Container padding="6rem 0 0">
			<Heading sx={{ textAlign: 'center', color: 'white' }} level={2}>
				Sign up for our monthly newsletter!
			</Heading>
			<Link to="/newsletter">
				<Text align="center" color="lightGrey" margin="base">
					Read past issues
					<Icon
						sx={{ fill: 'lightGrey', margin: '.2em 0 0 1em' }}
						name="rightArrow"
					/>
				</Text>
			</Link>
			<FormNewsletter placeholderText="Your Email Address" submitText="Subscribe" />
		</Container>
		<Footer />
		<FancyFooter />
	</div>
)
