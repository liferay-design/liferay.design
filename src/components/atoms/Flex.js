import PropTypes from 'prop-types'
import React from 'react'

const Flexbox = ({
	as,
	align,
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
	textAlign,
	width,
	style,
	...props
}) => {
	const As = as 

	const styles = {
		...style,
		alignItems: align,
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: direction,
		flexWrap,
		height,
		justifyContent: justify,
		margin,
		padding,
		position,
		textAlign,
		width,
	}

	return (
		<As className={className} id={name} name={name} style={styles} {...props}>
			{children && children}
		</As>
	)
}

Flexbox.defaultProps = {
	direction: 'row',
	flexWrap: 'nowrap',
	as: 'div',
}

Flexbox.propTypes = {
	align: PropTypes.string,
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
	position: PropTypes.string,
	style: PropTypes.object,
	textAlign: PropTypes.string,
	width: PropTypes.string,
}

export default Flexbox
