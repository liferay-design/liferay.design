import PropTypes from 'prop-types'
import React from 'react'
import { Flex, Text } from 'components/atoms'
import styles from './styles.module.scss'

const Date = ({ month, day, size, dark, className, large, style, color, ...props }) => {
	return (
		<div style={{ fontSize: `${size}` }}>
			<Flex
				className={`${className} ${styles.wrapper} ${large ? styles.large : ''} ${
					dark ? styles.dark : ''
				}`}
				style={{ ...style, color: `${color}` }}
				justify="center"
				align="center"
				direction="column"
				{...props}
			>
				{' '}
				<Text color={color} className={styles.month} size="base" weight="black">
					{month}
				</Text>
				<Text
					className={styles.day}
					color={dark ? 'white' : `${color}`}
					size="inherit"
					weight='black'
				>
					{day}
				</Text>
			</Flex>
		</div>
	)
}

Date.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string, // use the color names from /theme
	dark: PropTypes.bool,
	day: PropTypes.string,
	large: PropTypes.bool,
	month: PropTypes.string,
	size: PropTypes.string,
	style: PropTypes.object,
}

export default Date
