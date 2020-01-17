import { Heading, Link, AnimateIn, Flex, Button, Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Card extends Component {
	static propTypes = {
		place: PropTypes.string,
		date: PropTypes.string,
		ctaUrl: PropTypes.string,
		cta: PropTypes.string,
		delay: PropTypes.string,
	}

	render() {
		const { delay, place, date, ctaUrl, cta } = this.props

		return (
			<Flex direction="column" justify="flex-end" className={styles.wrapper}>
				<AnimateIn delay={delay * 1.1 + 's'}>
					<AnimateIn delay={delay * 1.05 + 's'}>
						<Link to="/">
							<Icon
								name="liferayDesicon"
								height="3rem"
								width="3rem"
								fill="neutral7"
								margin="0 0 2rem -.2rem"
								className={styles.icon}
							/>
						</Link>
					</AnimateIn>
					<div className={styles.details}>
						<AnimateIn delay={delay * 1.2 + 's'}>
							<Heading color="mainl2" className={styles.heading} level={2}>
								{place}
							</Heading>
						</AnimateIn>
						<AnimateIn delay={delay * 1.24 + 's'}>
							<Heading color="mainl5" className={styles.heading} level={2}>
								{date}
							</Heading>
						</AnimateIn>
					</div>
					<AnimateIn delay={delay * 1.3 + 's'}>
						<Link to={ctaUrl}>
							<Button
								padding="medium"
								className={styles.button}
								size="initial"
							>
								{cta}
							</Button>
						</Link>
					</AnimateIn>
				</AnimateIn>
			</Flex>
		)
	}
}

export default Card
