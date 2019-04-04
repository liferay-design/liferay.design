import React from 'react'
import styles from './styles.module.scss'
import { Flex, Text } from 'components/atoms'

const HeroBanner = () => (
	<Flex className={styles.container} align="center" justify="center">
		<Text width="20ch" weight="heavy" type="h1" size="xxLarge" color="white">
			We are{' '}
			<Text type="span" weight="black" size="xxLarge" color="neutral1">
				Liferayʼs global team of{' '}
			</Text>
			designers.
		</Text>
	</Flex>
)

export default HeroBanner
