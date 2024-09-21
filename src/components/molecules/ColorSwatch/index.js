import { Flex, Text } from 'components/atoms'
import { ColorField } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import { colors } from 'theme'

export default function ColorSwatch({
	hex,
	rgb,
	hsl,
	title,
	smallText,
	name,
	cmyk,
	pms,
	contrasted,
}) {
	const ContrastedElement = () => {
		switch (contrasted) {
			case 'white':
				return <div className="contrastCircle" />
			case 'black':
				return <div className="contrastCircle black" />
			case 'both':
				return (
					<>
						<div className="contrastCircle" />
						<div className="contrastCircle black" />
					</>
				)
			default:
				return null
		}
	}

	return (
		<Flex className={styles.container} direction="column" width="100%">
			<Flex
				style={{ background: `${colors[name]}` }}
				height="0"
				padding="0 0 56.25%"
				width="100%"
			>
				<ContrastedElement />
			</Flex>

			<Flex direction="column" padding="1rem">
				<Text type="p" weight="heavy" margin="micro" size="base">
					{title}
					{smallText ? <small className="d-block">{smallText}</small> : null}
				</Text>

				{hex ? (
					<>
						<ColorField title="HEX" label="HEX" value={hex} />
						<ColorField title="Red Green Blue" label="RGB" value={rgb} />
						<ColorField
							title="Hue Saturation Lightness"
							label="HSL"
							value={hsl}
						/>{' '}
					</>
				) : null}

				{cmyk ? (
					<>
						<ColorField
							title="Cyan, Magenta, Yellow, Key"
							label="CMYK"
							value={cmyk}
						/>
						<ColorField
							title="Pantone Matching System"
							label="PMS"
							value={pms}
						/>{' '}
					</>
				) : null}
			</Flex>
		</Flex>
	)
}

ColorSwatch.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	hex: PropTypes.string,
	rgb: PropTypes.string,
	hsl: PropTypes.string,
	cmyk: PropTypes.string,
	pms: PropTypes.string,
}
