import { Flex, Text } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const SiteCredits = () => {
	return (
		<Flex className={styles.credits} justify="space-between" flexWrap="wrap">
			<Text size="small">
				Part of{' '}
				<a target="_blank" rel="noopener" href="https://liferay.com">
					Liferay, Inc
				</a>
			</Text>
			<Text size="small">
				Powered by{' '}
				<a target="_blank" rel="noopener" href="http://gatsbyjs.org/">
					Gatsby
				</a>{' '}
				and <a href="https://netlify.com">Netlify</a>
			</Text>
		</Flex>
	)
}

export default SiteCredits
