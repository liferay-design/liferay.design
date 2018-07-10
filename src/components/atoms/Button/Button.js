import PropTypes from 'prop-types'
import React from 'react'
import classes from './Button.module.scss'

const Button = ({ className, children, color, disabled, onClick, type }) => (
	<button
		className={`${className} ${classes.button} ${classes[color]}`}
		disabled={disabled}
		onClick={onClick}
		type={type}
	>
		{children}
	</button>
)

Button.defaultProps = {
	color: 'primary',
	disabled: false,
}

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.string,
}

export default Button
