import { Image, Link, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import { Grid } from 'reakit'

const BillboardAlt = ({ image, cta, ctaUrl }) => {
	return (
		<Link to={ctaUrl} className={styles.link}>
			<Grid templateRows="10rem auto" templateColumns="1fr" className={styles.tab}>
				<Grid.Item>
					<Image src={image} className={styles.image} />
				</Grid.Item>
				<Grid.Item className={styles.button}>
					<Text color="white" size="medium" weight="black" >{cta}</Text>
				</Grid.Item>
			</Grid>
		</Link>
	)
}

BillboardAlt.propTypes = {
	image: PropTypes.string,
	heading: PropTypes.string,
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaUrl: PropTypes.string,
	background: PropTypes.string,
}

export default BillboardAlt
