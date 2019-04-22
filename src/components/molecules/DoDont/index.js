import { Flex, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default function DoDont({ good, bad }) {
	return (
		<Flex
			className={styles.container}
			padding="2rem 0 4rem"
			justify="space-between"
			width="100%"
		>
			<Flex direction="column" width="40%">
				<img src={good} />
				<Text
					className={styles.do}
					type="p"
					weight="black"
					size="medium"
					color="success"
				>
					Do
				</Text>
			</Flex>
			<Flex direction="column" width="40%">
				<img src={bad} />
				<Text
					className={styles.dont}
					type="p"
					weight="black"
					size="medium"
					color="error"
				>
					Don't
				</Text>
			</Flex>
		</Flex>
	)
}

DoDont.propTypes = {
	good: PropTypes.string.isRequired,
	bad: PropTypes.string.isRequired,
}
