/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import IconsObject from './icons'

const Icon = ({ className, name, ...props }) => {
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
}

export default Icon
