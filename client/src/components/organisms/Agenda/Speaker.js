import { Flex, Text } from 'components/atoms'

import PropTypes from 'prop-types'
import React from 'react'

export const Speaker = props => {
	const { photo, name, title } = props.data

	return (
		<Flex justify="flex-start">
			<img
				src={`/public/images/speakers/${photo}.jpg`}
				alt={photo}
				width="100px"
				height="100px"
				object-fit="cover"
			/>

			<Flex justify="center" direction="column">
				<Text>{name}</Text>
				<Text>{title}</Text>
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
