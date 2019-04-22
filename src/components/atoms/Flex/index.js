import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'

const Flexbox = ({
	align,
	background,
	backgroundImage,
	children,
	className,
	direction,
	flexWrap,
	height,
	justify,
	margin,
	name,
	padding,
	position,
	width,
	...props
}) => {
	const styles = {
		alignItems: align,
		background: background,
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: direction,
		flexWrap,
		height,
		justifyContent: justify,
		margin,
		padding,
		position,
		width,
	}

	if (background) {
		styles.backgroundColor = colors[background] || background
	}

	if (backgroundImage) {
		styles.background = `url(${backgroundImage}) center/cover` || background
	}

	return (
		<div className={className} id={name} name={name} style={styles} {...props}>
			{children && children}
		</div>
	)
}

Flexbox.defaultProps = {
	direction: 'row',
	flexWrap: 'nowrap',
}

Flexbox.propTypes = {
	align: PropTypes.string,
	background: PropTypes.string,
	backgroundImage: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	direction: PropTypes.string,
	flexWrap: PropTypes.string,
	height: PropTypes.string,
	height: PropTypes.string,
	justify: PropTypes.string,
	margin: PropTypes.string,
	name: PropTypes.string,
	padding: PropTypes.string,
	padding: PropTypes.string,
	position: PropTypes.string,
	width: PropTypes.string,
}

export default Flexbox
