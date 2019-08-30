import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {colors} from 'theme'

export const Image = ({ align, caption, circle, dropShadow, rounded, src, alt, ...props }) => {
	const styles = {
		float: align,
	}
	return (
		<figure>
			<img
				{...props}
				style={{
					borderRadius: `${circle ? '50%' : null}`,
					borderRadius: `${rounded ? '.5rem' : null}`,
					boxShadow: `${
						dropShadow ? '0 0.5rem 8rem -0.5rem rgba(48, 49, 63, 0.16)' : null
					}`,
					display:'block',
					styles
				}}
				alt={alt}
				src={`${withPrefix(`${src}`)}`}
			/>
			<figcaption
				style={{
					color: colors.mainl3,
					fontStyle: 'italic',
					textAlign: 'center',
				}}
			>{caption}</figcaption>
		</figure>
	)
}

Image.propTypes = {
	align: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string.isRequired,
	caption: PropTypes.string,
	circle: PropTypes.boolean,
	dropShadow: PropTypes.boolean,
	rounded: PropTypes.boolean,
}

export default Image
