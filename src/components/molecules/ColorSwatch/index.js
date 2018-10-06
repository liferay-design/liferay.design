import React from 'react'
import { Flex } from 'components/atoms'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function ColorSwatch({ hex, title, name, cmyk, pms }) {
	return (
		<Flex className={styles.container} direction="column" width="150px">
			<Flex background={name} height="150px" width="100%" />

			<Flex direction="column" padding="0.5rem">
				<h5 style={{ margin: '0 0 0.5rem' }}>{title}</h5>

				<Flex direction="column" title="CMYK" padding="0 0 0.25rem">
					<span>CMYK</span>
					<input rows="1" value={cmyk} readOnly />
				</Flex>

				<Flex direction="column" title="Pantone Matching System">
					<span>PMS</span>
					<input rows="1" value={pms} readOnly />
				</Flex>
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
