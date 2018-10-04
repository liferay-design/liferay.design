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
	}

	return (
		<div className={className} id={name} name={name} style={styles}>
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
	height: PropTypes.string,
}

export default Flexbox
