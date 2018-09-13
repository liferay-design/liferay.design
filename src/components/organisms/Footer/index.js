import { Flex, Heading, Icon, Text } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

export const Footer = ({ light }) => {
	return (
		<footer className={light ? styles.light : styles.dark}>
			<Flex className={styles.footer} direction="column">
				<Flex
					className={styles.textContainer}
					justify="space-between"
					flexWrap="wrap"
				>
					<Heading level={3}>
						Liferay.Design
					</Heading>

					<Flex className={styles.social} justify="space-between">
						<a target="_blank" href="https://www.dribbble.com/liferay">
							<Icon name="dribbble" />
						</a>
						<a target="_blank" href="https://github.com/liferay-design/liferay.design">
							<Icon name="github" />
						</a>
						<a target="_blank" href="https://www.instagram.com/liferay_ux/">
							<Icon name="instagram" />
						</a>
						<a target="_blank" href="https://www.linkedin.com/company/83609">
							<Icon name="linkedin" />
						</a>
						<a target="_blank" href="https://www.medium.com/liferaydesign">
							<Icon name="medium" />
						</a>
						<a target="_blank" href="https://twitter.com/liferaydesign">
							<Icon name="twitter" />
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

export default Footer
