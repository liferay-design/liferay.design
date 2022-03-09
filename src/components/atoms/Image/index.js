/** @jsx jsx */

import { jsx, Button } from 'theme-ui'
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { colors, fontSizes } from 'theme'
import { Hotkey } from 'components/atoms'
import styles from './styles.module.scss'
import { useHotkeys } from 'react-hotkeys-hook'

const Image = ({
	align,
	caption,
	circle,
	dropShadow,
	rounded,
	margin,
	size,
	src,
	alt,
	external,
	expandable,
	expandedSrc,
	clear,
	...props
}) => {
	const [open, setOpen] = useState(false)

	const bigPic = expandedSrc ? expandedSrc : src

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
			clear: 'left'
		},
		right: {
			float: 'right',
			marginRight: '-8%',
			clear: 'right'
		},
	}

	const figureStyles = {
		...(size ? { width: sizes[size] } : {}),
		...(circle ? { position: 'relative', paddingTop: '100%' } : {}),
		...(margin ? { margin: [margin] } : { margin: 0 }),
		...(align ? alignments[align] : { marginLeft: 'auto', marginRight: 'auto' }), // center images by default
	}

	const imgStyles = {
		...(circle
			? { borderRadius: '50%', position: 'absolute', top: '0', height: '100%' }
			: {}),
		...(rounded ? { borderRadius: `${fontSizes.micro}` } : {}),
		...(dropShadow
			? { boxShadow: '0 0.5rem 8rem -0.5rem rgba(48, 49, 63, 0.16)' }
			: {}),
	}

	const hotkeys = 'esc'

	useHotkeys(hotkeys, () => setOpen(open ? !open : null), {
		keydown: false,
		keyup: true,
	})

	return (
		<figure
			style={{
				...figureStyles,
			}}
			className={expandable ? styles.expandable : ''}
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
					className={
						open === true
							? [styles.expandedImageContainer, styles.open].join(' ')
							: styles.expandedImageContainer
					}
				>
					<div className={styles.overlay} onClick={() => setOpen(!open)} />
					<Button
						onClick={() => setOpen(!open)}
						sx={{
							position: 'fixed',
							top: ['unset', '1rem', null],
							right: ['unset', '0', null],
							bottom: ['6rem', 'unset', null],
							alignItems: 'baseline',
							cursor: 'pointer',
							display: 'flex',
							background: 'transparent',
							fontWeight: 'heading',
							fontFamily: 'monospace',
							transition: 'color .2s ease-in-out',
							color: 'mainL6',
							'&:hover': {
								color: 'white',
							},
						}}
					>
						Close
						<Hotkey
							sx={{ ml: 2, display: ['none', 'initial', null] }}
							keys={[hotkeys]}
						/>
					</Button>
					<img
						className={styles.expandedImg}
						alt={alt ? alt : caption}
						src={external ? `${bigPic}` : withPrefix(`${bigPic}`)}
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
