import { Flex, Text } from 'components/atoms'
import { SideTab } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'
import MediaQuery from 'react-responsive'
import {sizes } from 'theme'

const HeroBanner = () => (
	<Flex className={styles.container} align="center" justify="center">
		<Text width="20ch" weight="heavy" type="h1" size="xxLarge" color="white">
			We are{' '}
			<Text type="span" weight="black" size="xxLarge" color="neutral1">
				Liferayʼs global team of{' '}
			</Text>
			designers.
		</Text>
		<MediaQuery minWidth={sizes.medium}>
			<SideTab
				cta="2019&nbsp;Report"
				ctaUrl="/2019"
				image="/images/components/2019.svg"
				innerCta="Reminisce with us"
				subtitle="Every year we take some time to reflect and highlight some of the amazing work by our team."
			/>
		</MediaQuery>
	</Flex>
)

export default HeroBanner
