import { Container, Flex, Icon, Text } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

export const FooterMarkdown = ({ light }) => {
	return (
		<footer className={light ? styles.light : styles.dark}>
			<Flex
				className={styles.textContainer}
				justify="space-between"
				flexWrap="wrap"
			>
				<Text>
					How can this be improved? Contribute on Github!
				</Text>

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
		</footer>
	)
}

export default FooterMarkdown
