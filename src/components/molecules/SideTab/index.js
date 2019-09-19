import { Image, Link, Text } from 'components/atoms'
import { BillboardAlt } from 'components/molecules'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import { Grid } from 'reakit'

const SideTab = ({ image, cta, ctaUrl }) => {
	const gridTemplate = `"link banner" auto / 8rem 1fr`
	return (
		<div className={styles.joinUs}>
			<Grid template={gridTemplate}>
				<Link to={ctaUrl}>
					<Grid
						className={styles.tab}
						templateRows="10rem auto"
						// templateColumns="1fr 10fr"
					>
						<Grid.Item>
							<Image src={image} className={styles.image} />
						</Grid.Item>
						<Grid.Item className={styles.button}>
							<Text color="white" size="medium" weight="black">
								{cta}
							</Text>
						</Grid.Item>
					</Grid>
				</Link>
				<BillboardAlt
					heading="We're Hiring!"
					subtitle="Read the job descriptions and apply to be a part of the team."
					cta="See Openings"
					ctaUrl={ctaUrl}
					background="white"
					style={{ maxWidth: '34ch' }}
				/>
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
