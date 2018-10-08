import React from 'react'
import { Flex, Text } from 'components/atoms'
import { ColorField } from 'components/molecules'
import { Button } from 'reakit'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function AssetCardSingle({ asset, title, preview, link }) {
	return (
		<Flex className={styles.container} direction="column" width="100%">
			<Flex background={name} height="0" padding="0 0 56.25%" width="100%" />

			<Flex direction="column" padding="1rem">
				<Text type="p" weight="heavy" margin="micro" size="base">
					{title}
				</Text>

				<Button href={asset} download={title} />

				<a href={link} target="_blank">
					Add to Google Drive
				</a>
			</Flex>
		</Flex>
	)
}

AssetCardSingle.propTypes = {
	preview: PropTypes.string.isRequired,
	asset: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}
