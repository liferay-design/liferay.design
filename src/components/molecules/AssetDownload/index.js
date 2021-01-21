/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Icon, Text, Link, Image } from 'components/atoms'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function AssetDownload({
	source,
	type,
	kind,
	title,
	width,
	assetWidth,
	link,
}) {
	const altText = `${title + ' ' + type}`
	const downloadName = `${title}`

	return (
		<Flex
			className={styles.container}
			sx={{
				flexDirection: 'column',
				alignItems: 'center',
				padding: '3rem 0',
				width: width,
				justifyContent: 'space-between',
			}}
		>
			{kind === 'video' ? (
				<video controls src={source} alt={altText} width={assetWidth} />
			) : (
				<Image src={source} alt={altText} width={assetWidth} />
			)}
			<div className={styles.caption}>
				<Text type="p" color="grey" weight="regular" size="base">
					{title}
				</Text>
				<Link
					className={styles.download}
					href={link ? link : source}
					download={downloadName}
				>
					<Text weight="heavy">Download</Text>
					<Icon name="download" sx={{ width: '1em', height: '1em' }} />
				</Link>
			</div>
		</Flex>
	)
}

AssetDownload.defaultProps = {
	type: 'Image',
}

AssetDownload.propTypes = {
	source: PropTypes.string.isRequired,
	title: PropTypes.string,
	type: PropTypes.string,
	imageWidth: PropTypes.string,
	width: PropTypes.string,
	kind: PropTypes.string,
}
