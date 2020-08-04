/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import IconsObject from './icons'

const Icon = ({ className, name, rotate, ...props }) => {
	if (rotate) {
		styles.transform = `rotate(${rotate}deg)`
		styles.transition = 'transform 0.4s'
	}

	const DynamicIcon = IconsObject[name]

	if (!DynamicIcon) {
		console.log(`${name} icon not found`)
	}

	return DynamicIcon ? (
		<DynamicIcon className={className} name={name} {...props} />
	) : (
		<span />
	)
}

Icon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	rotate: PropTypes.number,
}

export default Icon
