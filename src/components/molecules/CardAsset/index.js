import { Flex, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default function CardAsset({ asset, title, preview, link, cta, letter }) {
	return (
		<Flex className={styles.container} direction="column" width="100%">
			<Flex
				backgroundImage={preview}
				height="0"
				padding={letter ? '0 0 129%' : '0 0 56.25%'}
				width="100%"
			/>

			<Flex direction="column" padding="1rem">
				<Text type="p" weight="heavy" margin="micro" size="medium">
					{title}
				</Text>

				<a
					className={styles.primaryAction}
					href={link}
					target="_blank"
					rel="noopener"
				>
					{cta}
				</a>
			</Flex>
		</Flex>
	)
}

CardAsset.propTypes = {
	preview: PropTypes.string.isRequired,
	asset: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	cta: PropTypes.string.isRequired,
}
