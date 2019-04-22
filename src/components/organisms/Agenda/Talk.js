import { Flex, Heading, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import Speaker from './Speaker'
import styles from './styles.module.scss'

export const Talk = props => {
	const { time, title, subtitle, speaker } = props.data

	function renderSpeakers(speaker) {
		if (speaker) {
			if (speaker.length > 1) {
				return speaker.map(data => <Speaker data={data} key={data.photo} />)
			} else {
				return <Speaker data={speaker[0]} />
			}
		}
		return ''
	}
	return (
		<Flex className={styles.talkContainer}>
			<Text>{time}</Text>

			<div className={styles.sessionHeading}>
				<Heading level={3}>{title}</Heading>

				<Heading level={4}>{subtitle}</Heading>

				{renderSpeakers(speaker)}
			</div>
		</Flex>
	)
}

Talk.propTypes = {
	data: PropTypes.object.isRequired,
}

export default Talk
