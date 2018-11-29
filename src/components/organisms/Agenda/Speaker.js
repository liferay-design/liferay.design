import { Flex, Heading } from 'components/atoms'
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export const Speaker = props => {
	const { photo, name, title } = props.data

	return (
		<Flex justify="flex-start">
			<img
				src={withPrefix(`/static/images/headshots/${photo}.jpg`)}
				alt={photo}
				width="130px"
				height="130px"
			/>

			<Flex justify="center" direction="column" className={styles.speakerHeading}>
				<Heading level={4}>{name}</Heading>
				<Heading level={5}>{title}</Heading>
			</Flex>
		</Flex>
	)
}

Speaker.propTypes = {
	data: PropTypes.shape({
		photo: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}),
}

export default Speaker
