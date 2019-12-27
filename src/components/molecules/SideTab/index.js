import { Image, Link, Text } from 'components/atoms'
import { BillboardAlt } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import { Grid } from 'reakit'
import { useMediaQuery} from 'react-responsive'
import MediaQuery from 'react-responsive'
import {sizes, colors} from 'theme'

const SideTab = ({ image, cta, ctaUrl, innerCta, subtitle }) => {
	const gridTemplate = `"link banner" auto / 8rem 1fr`
	const gridTemplateSmall = `"link banner" auto / 5rem 1fr`

	const isLarge = useMediaQuery({ query: '(min-width: 1280px)' })

	return (
		<div className={styles.joinUs}>
			<Grid template={isLarge ? gridTemplate : gridTemplateSmall}>
				<Link to={ctaUrl}>
					<Grid
						className={styles.tab}
						templateRows="10rem auto"
					>
						<Grid.Item className={styles.imageWrapper}>
							<Image src={image} className={styles.image} />
						</Grid.Item>
						<Grid.Item className={styles.button}>
							<Text color="white" size="medium" weight="black">
								{cta}
							</Text>
						</Grid.Item>
					</Grid>
				</Link>
				<MediaQuery minWidth={sizes.large}>
					<BillboardAlt
						heading={cta}
						subtitle={subtitle}
						cta={innerCta}
						ctaUrl={ctaUrl}
						background={colors.main}
						style={{ maxWidth: '34ch' }}
					/>
				</MediaQuery>
			</Grid>
		</div>
	)
}

SideTab.propTypes = {
	image: PropTypes.string,
	heading: PropTypes.string,
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaUrl: PropTypes.string,
	background: PropTypes.string,
}

export default SideTab
