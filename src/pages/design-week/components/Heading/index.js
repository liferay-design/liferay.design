import { Flex, Heading, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class DWHeading extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		delay: PropTypes.string,
		bgImage: PropTypes.string,
	}

	render() {
		const { delay, title, bgImage } = this.props
		return (
			<Flex align="center" className={styles.wrapper}>
				<AnimateIn delay={delay + 's'}>
					<Heading
						className={styles.f1}
						level={1}
						additionalStyles={{
							backgroundImage: `${'-webkit-linear-gradient(30deg, rgba(255,255,255, 0.8) 40%, transparent), url("' +
								bgImage +
								'"'}`,
						}}
					>
						{title}
					</Heading>
				</AnimateIn>
			</Flex>
		)
	}
}
