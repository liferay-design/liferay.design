import { Flex, Text } from 'components/atoms'
import { ColorField } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default function ColorSwatchDigital({ hex, rgb, hsl, title, name }) {
	return (
		<Flex className={styles.container} direction="column" width="100%">
			<Flex background={name} height="0" padding="0 0 56.25%" width="100%" />

			<Flex direction="column" padding="1rem">
				<Text type="p" weight="heavy" margin="micro" size="base">
					{title}
				</Text>

				<ColorField title="HEX" label="HEX" value={hex} />
				<ColorField title="Red Green Blue" label="RGB" value={rgb} />
				<ColorField title="Hue Saturation Lightness" label="HSL" value={hsl} />
			</Flex>
		</Flex>
	)
}

ColorSwatchDigital.propTypes = {
	hex: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	rgb: PropTypes.string.isRequired,
	hsl: PropTypes.string.isRequired,
}
