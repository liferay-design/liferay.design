import { Heading, Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import { Grid } from 'reakit'
import styles from './styles.module.scss'
import {useMediaQuery} from 'react-responsive'

const Billboard = ({ image, heading, Subtitle, background }) => {
	const gridTemplate = `"gutterL icon copy gutterR" auto / 1fr 20rem 30rem 1fr`
	const gridTemplateMobile = `"icon" auto
								 "copy" auto / 1fr`

	const isMobile = useMediaQuery({query: '(max-width: 768px)'})

	return (
		<section className={styles.wrapper} style={{ background: `${background}` }}>
			<Grid template={isMobile ? gridTemplateMobile : gridTemplate }>
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
