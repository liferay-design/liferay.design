import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

import { colors } from 'theme'

const Heading = ({ align, bottomBorder, className, color, children, level, padding }) => {
	const Header = `h${level}`
	const borderClass = bottomBorder ? styles.bottomBorder : ''

	var style = {
		color: colors[color],
		textAlign: align,
	}

	if (padding) {
		style = { ...style, paddingBottom: padding }
	}

	return (
		<Header className={`${className} ${styles[Header]} ${borderClass}`} style={style}>
			{children}
		</Header>
	)
}

Heading.propTypes = {
	align: PropTypes.string,
	bottomBorder: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.node,
	level: PropTypes.number.isRequired,
	padding: PropTypes.string,
}

Heading.defaultProps = {
	className: '',
	level: 3,
	textAlign: 'left',
}

export default Heading
