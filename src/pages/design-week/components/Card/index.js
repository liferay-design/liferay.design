import { Heading, Link, AnimateIn, Flex, Button } from 'components/atoms'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Card extends Component {
	static propTypes = {
		location: PropTypes.string,
		date: PropTypes.string,
		ctaUrl: PropTypes.string,
		cta: PropTypes.string,
	}

	render() {
		const { location, date, ctaUrl, cta } = this.props

		const baseDelay = '.2'

		return (
			<Flex direction="column" justify="flex-end" className={styles.wrapper}>
				<AnimateIn delay={`${baseDelay}` + 's'}>
					<div className={styles.details}>
						<AnimateIn delay={`${baseDelay}` * 2 + 's'}>
							<Heading color="mainl2" className={styles.heading} level={2}>{location}</Heading>
						</AnimateIn>
						<AnimateIn delay={`${baseDelay}` * 3 + 's'}>
							<Heading color='mainl5' className={styles.heading}  level={2}>{date}</Heading>
						</AnimateIn>
					</div>
					<AnimateIn delay={`${baseDelay}` * 4 + 's'}>
						<Link to={ctaUrl}>
							<Button padding="base" className={styles.button} size="initial">{cta}</Button>
						</Link>
					</AnimateIn>
				</AnimateIn>
			</Flex>
		)
	}
}

export default Card
