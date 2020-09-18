/** @jsx jsx */

import React from 'react'
import { jsx, Styled } from 'theme-ui'
import styles from '../styles.module.scss'
import { AssetsAccordion, AssetDownload } from 'components/molecules'

const H2 = Styled.h2
const H3 = Styled.h3

const ProductScreens = ({ data }) => {
	console.log(data, 'data')
	return (
		<>
			{data.map(node => (
				<>
					<H2>{node.productName}</H2>
					{node.release.map(releases => (
						<AssetsAccordion
							title={<H3>{releases.name}</H3>}
							className={styles.blueprintsAccordion}
						>
							{releases.assets.map(asset => (
								<AssetDownload
									type="Product Screenshot"
									title={asset.title}
									source={asset.src}
								/>
							))}
						</AssetsAccordion>
					))}
				</>
			))}
		</>
	)
}

export default ProductScreens
