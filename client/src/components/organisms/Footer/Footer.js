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
					<img src="/public/images/footer_tweet.jpg" />
				</Flex>
				<Flex
					className={classes.mediaText}
					align="center"
					direction="column"
					justify="center"
				>
					<Flex justify="flex-end">
						<Icon name="twitter" />
					</Flex>
					<Text color="grey">Tweet your experience</Text>
					<Heading level={2}>#DesignBar2018</Heading>
				</Flex>
			</div>

			<Flex align="center" className={classes.textContainer} justify="space-around">
				<Heading level={3}>Liferay.Design</Heading>

				<Flex>
					<Icon name="facebook" />
					<Icon name="github" />
					<Icon name="twitter" />
					<Icon name="instagram" />
					<Icon name="linkedin" />
				</Flex>
			</Flex>

			<Flex className={classes.credits} justify="space-between">
				<Text>Brought to you by Liferay, Inc</Text>
				<Text>Powered by WeDeploy™</Text>
			</Flex>
		</div>
	)
}

Footer.propTypes = {}

export default Footer
