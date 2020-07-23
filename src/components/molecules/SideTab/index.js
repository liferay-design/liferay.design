/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { Image, Link, Text } from 'components/atoms'
import { BillboardAlt } from 'components/molecules'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import MediaQuery from 'react-responsive'
import { sizes, colors } from 'theme'

const SideTab = ({ image, cta, ctaUrl, innerCta, subtitle }) => {
	return (
		<div className={styles.joinUs}>
			<Grid
				sx={{
					gap: 0,
					gridTemplate: [
						'"link banner" auto / 5rem 1fr',
						null,
						'"link banner" auto / 8rem 1fr',
					],
				}}
			>
				<Link to={ctaUrl}>
					<Grid
						className={styles.tab}
						sx={{ gap: 0, gridTemplateRows: '10rem auto' }}
					>
						<div className={styles.imageWrapper}>
							<Image src={image} className={styles.image} />
						</div>
						<div className={styles.button}>
							<Text color="white" size="medium" weight="black">
								{cta}
							</Text>
						</div>
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
