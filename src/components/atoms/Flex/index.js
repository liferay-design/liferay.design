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
	height,
	padding,
	margin,
	...props
}) => {
	const styles = {
		boxSizing: 'border-box',
		backgroundColor: colors[background],
		display: 'flex',
		flexDirection: direction,
		justifyContent: justify,
		alignItems: align,
		flexWrap,
		width,
		height,
		padding,
		margin,
	}

	return (
		<div className={className} id={name} name={name} style={styles} {...props}>
			{children && children}
		</div>
	)
}

Flexbox.defaultProps = {
	background: 'transparent',
	direction: 'row',
	flexWrap: 'nowrap',
	padding: '0',
	margin: '0',
}

Flexbox.propTypes = {
	align: PropTypes.string,
	background: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	direction: PropTypes.string,
	justify: PropTypes.string,
	flexWrap: PropTypes.string,
	name: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	padding: PropTypes.string,
	margin: PropTypes.string,
}

export default Flexbox
