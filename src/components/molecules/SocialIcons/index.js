import React from 'react'
import { Flex, Icon } from 'components/atoms'
import styles from './styles.module.scss'

const SocialIcons = () => {
			
	return (
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
	)
}

export default SocialIcons
