import { Heading, Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const Billboard = ({ image, heading, Subtitle, background }) => {
	return (
		<section className={styles.wrapper} style={{ background: `${background}` }}>
			<Grid columns="1fr 20rem 30rem 1fr" areas="'gutterL icon copy gutterR'">
				<Icon className={styles.icon} name={image} />

				<div className={styles.copy}>
					<Heading level={2}>{heading}</Heading>

					<Subtitle />
				</div>
			</Grid>
		</section>
	)
}

Billboard.propTypes = {
	image: PropTypes.string,
	heading: PropTypes.string,
	subtitle: PropTypes.element,
	background: PropTypes.string,
}

export default Billboard
