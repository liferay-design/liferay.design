import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {colors, fontSizes } from 'theme'

export const Image = ({ align, caption, circle, dropShadow, rounded, margin, size, src, alt, ...props }) => {

	const sizes = {
		small: '50%',
		medium: '100%',
		large: '120%',
		xLarge: '160%',
	}

	const alignments = {
		left: {
			float: 'left',
			marginLeft: '-8%',
		},
		right: {
			float: 'right',
			marginRight: '-8%',
		},
	}
	
	const figureStyles = {
		...(size ? { width: sizes[size] } : {} ),
		...(margin ? { margin: [margin] } : { margin:`${fontSizes.xLarge}` } ),
		...(align ? alignments[align] : { marginLeft:'auto', marginRight:'auto' }), // center images by default
	}

	const imgStyles = {
		...(circle ? { borderRadius: '50%' } : {}),
		...(rounded ? { borderRadius: `${fontSizes.micro}` } : {}),
		...(dropShadow
			? { boxShadow: '0 0.5rem 8rem -0.5rem rgba(48, 49, 63, 0.16)' }
			: {}),
	}
	
	return (
		<figure
			style={{
				...figureStyles,
			}}
		>
			<img
				{...props}
				style={{
					...imgStyles,
					display: 'block',
				}}
				alt={alt}
				src={`${withPrefix(`${src}`)}`}
				loading="lazy"
			/>
			{caption ? (
				<figcaption
					style={{
						color: colors.mainl3,
						fontStyle: 'italic',
						textAlign: 'center',
					}}
				>
					{caption}
				</figcaption>
			) : null}
		</figure>
	)
}

Image.propTypes = {
	align: PropTypes.string,
	alt: PropTypes.string.isRequired,
	caption: PropTypes.string,
	circle: PropTypes.boolean,
	dropShadow: PropTypes.boolean,
	margin: PropTypes.string,
	rounded: PropTypes.boolean,
	size: PropTypes.string,
	src: PropTypes.string,
}

export default Image
