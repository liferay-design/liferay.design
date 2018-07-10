import { StyleSheet, css } from 'aphrodite'

import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'

const Flexbox = ({
	align,
	background,
	className,
	direction,
	justify,
	flexWrap,
	children,
	name,
	width,
}) => {
	const styles = StyleSheet.create({
		flex: {
			boxSizing: 'border-box',
			backgroundColor: colors[background],
			display: 'flex',
			flexDirection: direction,
			justifyContent: justify,
			alignItems: align,
			flexWrap,
			width,
		},
	})
	return (
		<div id={name} name={name} className={`${css(styles.flex)} ${className || ''}`}>
			{children}
		</div>
	)
}

Flexbox.defaultProps = {
	background: 'transparent',
	direction: 'row',
	flexWrap: 'nowrap',
}

Flexbox.propTypes = {
	align: PropTypes.string,
	background: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	direction: PropTypes.string,
	justify: PropTypes.string,
	flexWrap: PropTypes.string,
	name: PropTypes.string,
	width: PropTypes.string,
}

export default Flexbox
