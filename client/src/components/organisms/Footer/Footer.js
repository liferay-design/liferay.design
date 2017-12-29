import { Flex, Heading, Icon, Text } from 'components/atoms'

import PropTypes from 'prop-types'
import React from 'react'
import classes from './Footer.scss'

export const Footer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.whiteSeparator} />

			<div className={classes.mediaWrapper}>
				<Flex className={classes.mediaContainer} justify="flex-end">
					<img src="/public/images/new-year.jpg" />

					<div className={classes.rightWhiteBox} />

					<Flex
						className={classes.mediaText}
						align="center"
						direction="column"
						justify="center"
					>
						<Flex justify="flex-end">
							<Icon name="twitter" />
						</Flex>

						<Text>Tweet</Text>
						<Text color="grey">your experience</Text>
					</Flex>
				</Flex>
			</div>

			<Flex align="center" className={classes.textContainer} justify="space-around">
				<Heading level={3}>Liferay.Design</Heading>

				<ul>
					<li>
						<Heading level={4}>Column One</Heading>
					</li>
					<li>Subnav one</li>
					<li>Subnav two</li>
					<li>Subnav three</li>
				</ul>

				<ul>
					<li>
						<Heading level={4}>Column Two</Heading>
					</li>
					<li>Subnav one</li>
					<li>Subnav two</li>
					<li>Subnav three</li>
				</ul>

				<Flex>
					<Icon name="facebook" />
					<Icon name="twitter" />
					<Icon name="instagram" />
					<Icon name="linkedin" />
				</Flex>
			</Flex>

			<Flex className={classes.credits} justify="space-between">
				<Text>Brought to you by Liferay, Inc</Text>
				<Text>Powered by WeDeploy tm</Text>
			</Flex>
		</div>
	)
}

Footer.propTypes = {}

export default Footer
