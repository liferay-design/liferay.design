/** @jsx jsx */

import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Heading = ({ additionalStyles, align, bottomBorder, className, children, level, padding, ...props }) => {
	const Header = `h${level}`
	const borderClass = bottomBorder ? styles.bottomBorder : ''

	var style = {
		...additionalStyles,
		textAlign: align,
	}

	if (padding) {
		style = { ...style, paddingBottom: padding }
	}

	return (
		<Header className={`${className} ${styles[Header]} ${borderClass}`} style={style} {...props} >
			{children}
		</Header>
	)
}

Heading.propTypes = {
	align: PropTypes.string,
	bottomBorder: PropTypes.bool,
	className: PropTypes.string,
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
