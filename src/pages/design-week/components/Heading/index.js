import { Flex, Heading } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class DWHeading extends React.Component {
	static propTypes = {
		title: PropTypes.string,
	}

	render() {
		const { title } = this.props
		return (
            <Flex align="center" className={styles.wrapper}>
                <Heading className={styles.f1} level={1}>
                    {title}
                </Heading>
            </Flex>
		)
	}
}
