import { Heading, Text, Flex } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const Content = ({ pretitle, title, copy, align, justify, inverted, textAlign }) => {
	return (
		<Flex
			padding="0 0 120px 0"
			align={align}
			justify={justify}
			direction="column"
			textAlign={textAlign}
		>
			<Text weight="regular" color="primary" className={styles.preHeader}>
				{pretitle}
			</Text>
			<Heading
				className={styles.f2}
				sx={inverted ? { color: '#1f2123' } : { color: '#93A7DB' }}
				level={2}
			>
				{title}
			</Heading>
			{copy &&
				copy.split('\n\n').map((paragraph, i) => (
					<Text
						type="p"
						key={i}
						align={align}
						size="medium"
						className={styles.p}
					>
						{paragraph}
					</Text>
				))}
		</Flex>
	)
}

export default Content
