/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import PropTypes from 'prop-types'

const AnimateIn = ({ delay, children, ...props }) => {
	return (
		<Box
			{...props}
			sx={{
				transition: 'transform 0.4s',
				animation: 'animateIn 0.5s cubic-bezier(0.5, 1.35, 0.5, 1) forwards',
				opacity: 0,
				transform: 'translateY(5rem)',
				'@keyframes animateIn': {
					'0%': {
						transform: 'translateY(5rem)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: 1,
					},
				},
				animationDelay: `${delay ? delay : null}`,
			}}
		>
			{children}
		</Box>
	)
}

AnimateIn.propTypes = {
	delay: PropTypes.any,
}

export default AnimateIn
