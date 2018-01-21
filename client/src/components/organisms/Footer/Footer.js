import { Flex, Heading, Icon, Text } from 'components/atoms'

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
					align="flex-start"
					direction="column"
					justify="center"
				>
					<Flex className={classes.tweetIcon}>
						<Icon fill="lightestGrey" name="twitter" />
					</Flex>
					<Text className={classes.tweetCTA} color="grey">
						<a href="https://twitter.com/hashtag/designbar2018">Tweet</a> your
						experience
					</Text>
					<Text className={classes.tweetHashtag}>
						<a href="https://twitter.com/hashtag/designbar2018">#DesignBar2018</a>
					</Text>
				</Flex>
			</div>

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
						<a href="https://www.instagram.com/liferay_uxd/">
							<Icon fill="white" name="instagram" />
						</a>
						<a href="https://www.linkedin.com/company/liferay-inc">
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
