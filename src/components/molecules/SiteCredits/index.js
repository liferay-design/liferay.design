import { Flex, Text, Link } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const SiteCredits = () => {
	return (
		<Flex className={styles.credits} justify="space-between" flexWrap="wrap">
			<Text size="small">
				Part of <Link to="https://liferay.com">Liferay, Inc</Link>
			</Text>
			<Text size="small">
				<Link to="https://github.com/liferay-design/liferay.design/blob/master/LICENSE">
					Code
				</Link>
				/<Link to="/resources/license">Content</Link> Licenses
			</Text>
		</Flex>
	)
}

export default SiteCredits
