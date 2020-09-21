/** @jsx jsx */

import React from 'react'
import { jsx, Styled } from 'theme-ui'
import styles from '../styles.module.scss'
import { AssetsAccordion, AssetDownload } from 'components/molecules'
import { Link } from 'components/atoms'

const { kebabCase } = require(`lodash`)

const H2 = Styled.h2
const H3 = Styled.h3

const ProductScreens = ({ data }) => {
	console.log(data, 'data')
	return (
		<>
			{data.map(node => (
				<>
					<H2 id={kebabCase(node.productName)}>
						<Link
							target='_self'
							to={'#' + kebabCase(node.productName)}
							sx={{ position: 'relative' }}
							aria-label={node.productName + ' permalink'}
							className={'nice-anchor before'}
						>
							<svg
								aria-hidden="true"
								focusable="false"
								height="16"
								version="1.1"
								viewBox="0 0 16 16"
								width="16"
							>
								<path
									fill-rule="evenodd"
									d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
								></path>
							</svg>
						</Link>
						{node.productName}
					</H2>
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
