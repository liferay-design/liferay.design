/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Link } from 'components/atoms'
import PropTypes from 'prop-types'

const SiteName = ({ dark, section, underlineColor }) => {
	var str = section
	if (str !== undefined) {
		var lowerCaseSection = str.toLowerCase()
	}

	return (
		<div
			sx={{
				fontSize: 3,
				paddingBottom: 0,
				lineHeight: '1.6',
				position: 'relative',
				'> a': {
					color: `${dark ? 'black' : 'white'}`,
					'&:hover': {
						color: `${dark ? 'primary' : 'primaryl2'}`,
					},
				},
			}}
		>
			<Link to="/">Liferay.Design</Link>
			{section && <Link to={'/' + `${lowerCaseSection}`}> / {section}</Link>}
			<span
				sx={{
					position: 'absolute',
					width: 4,
					height: '3px',
					bg: `${underlineColor ? underlineColor : 'primary'}`,
					display: 'block',
					mt: '1rem',
				}}
			/>
		</div>
	)
}

SiteName.propTypes = {
	dark: PropTypes.bool,
	section: PropTypes.string,
	underlineColor: PropTypes.string,
}

export default SiteName
