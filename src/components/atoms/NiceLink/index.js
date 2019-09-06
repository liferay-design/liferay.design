import { Link, Icon, Flex } from 'components/atoms'
import React from 'react'
import { colors, fontWeights } from 'theme/'
import styles from './styles.module.scss'

export default ({ children, ...props }) => (
	<Link 
		className={styles.niceLink}
		style={{
			color: `${colors.primary}`,
			fontWeight: `${fontWeights.heavy}`,
		}}
		{...props}
	>
		<Flex align="center">
			{children}
			<Icon height="1.4rem" name="arrow" stroke={colors.primary} />
		</Flex>
	</Link>
)
