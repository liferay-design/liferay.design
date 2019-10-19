import { Flex, Text, Link } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const SiteCredits = () => {
	return (
		<Flex className={styles.credits} justify="space-between" flexWrap="wrap">
			<Text size="small">
				Part of{' '}
				<Link to="https://liferay.com">
					Liferay, Inc
				</Link>
			</Text>
			<Text size="small">
				Powered by{' '}
				<Link to="http://gatsbyjs.org/">
					Gatsby
				</Link>{' '}
				and <Link to="https://netlify.com">Netlify</Link>
			</Text>
		</Flex>
	)
}

export default SiteCredits
