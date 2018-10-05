import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'

const Flexbox = ({
	align,
	background,
	children,
	className,
	direction,
	flexWrap,
	height,
	justify,
	name,
	padding,
	width,
	...props
}) => {
	const styles = {
		alignItems: align,
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: direction,
		flexWrap,
		height,
		justifyContent: justify,
		padding,
		width,
	}

	if (background) {
		styles.backgroundColor = colors[background] || background
	}

	return (
		<div className={className} id={name} name={name} style={styles} {...props}>
			{children}
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
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	direction: PropTypes.string,
	flexWrap: PropTypes.string,
	height: PropTypes.string,
	justify: PropTypes.string,
	name: PropTypes.string,
	padding: PropTypes.string,
	width: PropTypes.string,
}

export default Flexbox
