import { Flex, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class ColorField extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	}

	fieldFocus = function(onClick) {
		onClick.target.select() && onClick.target.focus()
	}

	render() {
		const { title, value, label } = this.props
		return (
			<Flex className={styles.colorField} title={title} padding="0 0 0.25rem">
				<Text size="small" weight="heavy" color="grey">
					{label}
				</Text>
				<input onFocus={this.fieldFocus} rows="1" value={value} readOnly />
			</Flex>
		)
	}
}
