import { Text, Link, AnimateIn, Flex, Button } from 'components/atoms'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
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
			<AnimateIn delay={`${baseDelay}` + 's'}>
				<Flex className={styles.wrapper}>
					<div>
						<AnimateIn  delay={`${baseDelay}` * 2 + 's'}>
							<Text>{location}</Text>
						</AnimateIn>
						<AnimateIn delay={`${baseDelay}` * 3 + 's'}>
							<Text>{date}</Text>
						</AnimateIn>
					</div>
					<AnimateIn delay={`${baseDelay}` * 4 + 's'}>
						<Link to={ctaUrl}>
							<Button>{cta}</Button>
						</Link>
					</AnimateIn>
				</Flex>
			</AnimateIn>
		)
	}
}

export default Card
