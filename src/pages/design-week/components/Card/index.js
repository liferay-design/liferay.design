import { Text, Link, AnimateIn, Flex, Button } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const Card = ({ location, date, ctaUrl, cta }) => (
	<AnimateIn delay='.4s'>
		<Flex>
			<div>
				<AnimateIn>
					<Text>{location}</Text>
				</AnimateIn>
				<AnimateIn>
					<Text>{date}</Text>
				</AnimateIn>
			</div>
			<AnimateIn>
				<Link to={ctaUrl}>
					<Button>{cta}</Button>
				</Link>
			</AnimateIn>
		</Flex>
	</AnimateIn>
)

Card.propTypes = {
	location: PropTypes.string,
	date: PropTypes.string,
	ctaUrl: PropTypes.string,
	cta: PropTypes.string,
}

export default Card
