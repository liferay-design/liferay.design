import { Flex, Text } from 'components/atoms'
import { SocialIcons } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'

export const FooterMarkdown = ({ light }) => {
	return (
		<footer className={light ? styles.light : styles.dark}>
			<Flex
				className={styles.textContainer}
				justify="space-between"
				flexWrap="wrap"
				align="center"
			>
				<Text>
					How can this be improved? <a href="https://github.com/liferay-design/liferay.design/issues">Create an issue</a>!
				</Text>
				 {/* TODO — create a "Contribute on Github!" component */}
				<SocialIcons />
			</Flex>
		</footer>
	)
}

export default FooterMarkdown
