import { Flex, Text, Image } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default function DoDont({ good, avoid, bad }) {
	return (
		<Flex
			className={styles.container}
			padding="2rem 0 4rem"
			justify="space-between"
			width="100%"
		>
			{good && (
			<Flex direction="column" width="40%">
				<Image src={good} />
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
			)}

			{bad && (
			<Flex direction="column" width="40%">
				<Image src={bad} />
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
			)}

			{avoid && (
			<Flex direction="column" width="40%">
				<Image src={avoid} />
				<Text
					className={styles.avoid}
					type="p"
					weight="black"
					size="medium"
					color="warning"
				>
					Avoid
				</Text>
			</Flex>
			)}
		</Flex>
	)
}

DoDont.propTypes = {
	good: PropTypes.string,
	bad: PropTypes.string,
	avoid: PropTypes.string,
}
