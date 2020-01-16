import { Flex, Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class LoadingAnimation extends React.Component {
	static propTypes = {
		duration: PropTypes.string,
	}

	render() {
		const { duration } = this.props
		return (
            <Flex align="center" justify="center" className={styles.wrapper}>
                <Icon className={styles.icon} height="8rem" width="8rem" fill="neutral7" name="liferayDesicon" />
            </Flex>
		)
	}
}
