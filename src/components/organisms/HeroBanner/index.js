import { Flex, Text } from 'components/atoms'
import { SideTab } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'
import MediaQuery from 'react-responsive'

const HeroBanner = () => (
	<Flex className={styles.container} align="center" justify="center">
		<Text width="20ch" weight="heavy" type="h1" size="xxLarge" color="white">
			We are{' '}
			<Text type="span" weight="black" size="xxLarge" color="neutral1">
				Liferayʼs global team of{' '}
			</Text>
			designers.
		</Text>
		<MediaQuery minWidth={'768px'}>
			<SideTab
				cta="We're&nbsp;Hiring"
				ctaUrl="/careers/na/senior-product-designer/"
				image="/images/components/pj-thumb.jpg"
				innerCta="See Openings"
				subtitle="Read the job descriptions and apply to be a part of the team."
			/>
		</MediaQuery>
	</Flex>
)

export default HeroBanner
