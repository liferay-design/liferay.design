import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {colors, fontSizes } from 'theme'
import { Button } from 'components/atoms'
import styles from './styles.module.scss'

const Image = ({ align, caption, circle, dropShadow, rounded, margin, size, src, alt, external, expandable, expandedSrc, ...props }) => {

	const [ open, setOpen ] = useState(false)

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
		...(circle ? { position: 'relative', paddingTop:'100%' } : {} ),
		...(margin ? { margin: [margin] } : {margin: 0} ),
		...(align ? alignments[align] : { marginLeft:'auto', marginRight:'auto' }), // center images by default
	}

	const imgStyles = {
		...(circle ? { borderRadius: '50%', position: 'absolute', top:'0', height:'100%' } : {}),
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
			className={expandable ? styles.expandable : ""}
		>
			<img
				onClick={() => setOpen(!open)}
				{...props}
				style={{
					...imgStyles,
					display: 'block',
				}}
				alt={alt ? alt : caption}
				src={external ? `${src}` : withPrefix(`${src}`)}
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
			{expandable ? (
				<div
					className={open === true ? [styles.expandedImageContainer, styles.open].join(' ') : styles.expandedImageContainer}
					>
					<div
						className={styles.overlay}
						onClick={ () => setOpen(!open)}/>
					<Button
						onClick={ () => setOpen(!open)}
						textColor="primary"
						backgroundColor="white"
						size="medium"
						weight="heavy"
						>
							Close
					</Button>
					<img
						className={styles.expandedImg}
						alt={alt ? alt : caption}
						src={external ? `${expandedSrc}` : withPrefix(`${expandedSrc}`)}
						loading="lazy"
						/>
				</div>
			) : null}
		</figure>
	)
}

Image.propTypes = {
	align: PropTypes.string,
	alt: PropTypes.string,
	caption: PropTypes.object,
	circle: PropTypes.bool,
	external: PropTypes.bool,
	dropShadow: PropTypes.bool,
	margin: PropTypes.string,
	rounded: PropTypes.bool,
	size: PropTypes.string,
	src: PropTypes.string,
	expandable: PropTypes.bool,
	expandedSrc: PropTypes.string,
}

export default Image