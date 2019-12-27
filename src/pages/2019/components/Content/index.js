import { Heading, Text, Flex } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const Content = ({ pretitle, title, copy, align, justify }) => {
	return (
		<Flex align={align} justify={justify} direction="column">
			<Text weight="black" color="primary" className={styles.preHeader}>
				{pretitle}
			</Text>
			<Heading className={styles.f2} color="white" level={2}>
				{title}
			</Heading>
			{copy && copy.split("\n\n").map((paragraph, i) => (
				<Text type="p" key={i} align={align} size="medium" className={styles.p}>{paragraph}</Text>
                ))}
		</Flex>
	)
}

export default Content
