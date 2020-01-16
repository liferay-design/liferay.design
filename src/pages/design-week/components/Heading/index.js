import { Flex, Heading, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class DWHeading extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		delay: PropTypes.string,
	}

	render() {
		const { delay, title } = this.props
		return (
            <Flex align="center" className={styles.wrapper}>
				<AnimateIn delay={delay + 's'}>
					<Heading className={styles.f1} level={1}>
						{title}
					</Heading>
				</AnimateIn>
            </Flex>
		)
	}
}
