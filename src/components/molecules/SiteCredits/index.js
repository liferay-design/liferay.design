import React from 'react'
import { Flex, Text } from 'components/atoms'
import styles from './styles.module.scss'

const SiteCredits = () => {

	return (
		<Flex className={styles.credits} justify="space-between" flexWrap="wrap">
			<Text size="0.8rem">
				Part of <a target="_blank" href="https://liferay.com">
					Liferay, Inc
						</a>
			</Text>
			<Text size="0.8rem">
				Powered by <a target="_blank" href="http://gatsbyjs.org/">
					Gatsby
						</a> and <a href="https://wedeploy.com">WeDeploy™</a>
			</Text>
		</Flex>
	)
}

export default SiteCredits
