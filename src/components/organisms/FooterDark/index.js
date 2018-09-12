import { Flex, Heading, Icon, Text } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

export const FooterDark = () => {
	return (
		<footer className={styles.container}>
			<Flex className={styles.footer} direction="column">
				<Flex
					className={styles.textContainer}
					justify="space-between"
					flexWrap="wrap"
				>
					<Heading color="black" level={3}>
						Liferay.Design
					</Heading>

					<Flex className={styles.social} justify="space-between">
						<a target="_blank" href="https://www.dribbble.com/liferay">
							<Icon fill="black" name="dribbble" />
						</a>
						<a target="_blank" href="https://github.com/liferay-design/liferay.design">
							<Icon fill="black" name="github" />
						</a>
						<a target="_blank" href="https://www.instagram.com/liferay_ux/">
							<Icon fill="black" name="instagram" />
						</a>
						<a target="_blank" href="https://www.linkedin.com/company/83609">
							<Icon fill="black" name="linkedin" />
						</a>
						<a target="_blank" href="https://www.medium.com/liferaydesign">
							<Icon fill="black" name="medium" />
						</a>
						<a target="_blank" href="https://twitter.com/liferaydesign">
							<Icon fill="black" name="twitter" />
						</a>
					</Flex>
				</Flex>

				<Flex className={styles.credits} justify="space-between" flexWrap="wrap">
					<Text size="0.8rem">
						Part of <a target="_blank" href="https://liferay.com">Liferay, Inc</a>
					</Text>
					<Text size="0.8rem">
						Powered by  <a target="_blank" href="http://gatsbyjs.org/">Gatsby</a> and <a href="https://wedeploy.com">WeDeploy™</a>
					</Text>
				</Flex>
			</Flex>
		</footer>
	)
}

export default FooterDark