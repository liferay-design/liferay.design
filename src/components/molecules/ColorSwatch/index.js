import { Flex, Text } from 'components/atoms'
import { ColorField } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default function ColorSwatch({ hex, title, name, cmyk, pms }) {
	return (
		<Flex className={styles.container} direction="column" width="100%">
			<Flex background={name} height="0" padding="0 0 56.25%" width="100%" />

			<Flex direction="column" padding="1rem">
				<Text type="p" weight="heavy" margin="micro" size="base">
					{title}
				</Text>

				<ColorField
					title="Cyan, Magenta, Yellow, Key"
					label="CMYK"
					value={cmyk}
				/>
				<ColorField title="Pantone Matching System" label="PMS" value={pms} />
			</Flex>
		</Flex>
	)
}

ColorSwatch.propTypes = {
	hex: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cmyk: PropTypes.string.isRequired,
	pms: PropTypes.string.isRequired,
}
