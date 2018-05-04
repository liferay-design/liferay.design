import { Flex, Heading, Icon, Text } from 'components/atoms'

import React from 'react'
import classes from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className={classes.container}>
			<Flex className={classes.footer} direction="column">
				<Flex className={classes.textContainer} justify="space-between" flexWrap="wrap">
					<Heading color="white" level={3}>
						Liferay.Design
					</Heading>

					<Flex className={classes.social} justify="space-between">
						<a href="https://www.facebook.com/hashtag/liferaydesign">
							<Icon fill="white" name="facebook" />
						</a>
						<a href="https://github.com/liferay-design/liferay.design">
							<Icon fill="white" name="github" />
						</a>
						<a href="https://www.instagram.com/liferay_ux/">
							<Icon fill="white" name="instagram" />
						</a>
						<a href="https://www.linkedin.com/company/83609">
							<Icon fill="white" name="linkedin" />
						</a>
						<a href="https://twitter.com/liferaydesign">
							<Icon fill="white" name="twitter" />
						</a>
					</Flex>
				</Flex>

				<Flex className={classes.credits} justify="space-between" flexWrap="wrap">
					<Text weight="light" color="white">
						Part of <a href="https://liferay.com">Liferay, Inc</a>
					</Text>
					<Text weight="light" color="white">
						Powered by <a href="https://wedeploy.com">WeDeploy™</a>
					</Text>
				</Flex>
			</Flex>
		</div>
	)
}

Footer.propTypes = {}

export default Footer
