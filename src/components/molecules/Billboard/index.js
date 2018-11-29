import React from 'react'
import { Icon, Heading } from 'components/atoms'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Grid } from 'reakit'

const Billboard = ({ image, heading, Subtitle, background }) => {
	return (
		<section
			className={styles.wrapper}
			style={{ background: `${background}` }}
		>
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
