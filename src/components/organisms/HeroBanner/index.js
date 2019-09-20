import { Flex, Text } from 'components/atoms'
import { SideTab } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'

const HeroBanner = () => (
	<Flex className={styles.container} align="center" justify="center">
		<Text width="20ch" weight="heavy" type="h1" size="xxLarge" color="white">
			We are{' '}
			<Text type="span" weight="black" size="xxLarge" color="neutral1">
				Liferayʼs global team of{' '}
			</Text>
			designers.
		</Text>
		<SideTab cta="Join Us" ctaUrl="/careers" image="/images/components/pj-thumb.jpg" />
	</Flex>
)

export default HeroBanner
