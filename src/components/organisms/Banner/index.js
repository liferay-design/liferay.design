import { Link } from '@reach/router'
import { Flex, Heading } from 'components/atoms'
import Navbar from 'components/organisms/Navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Grid } from 'reakit'
import styles from './styles.module.scss'

const Banner = ({ underlineColor, headline, subtitle, cta, ctaLink, section, background }) => (
	<Grid templateRows="8rem 1fr" className={styles.container} style={{ background: `${background}` }}>
		<Navbar underlineColor={underlineColor} white section={section} />
		<Flex direction="column" align="center" style={{alignSelf:"center", marginBottom:"8rem"}} className={styles.content}>
			<Heading color="white" level={1}>
				{headline}
			</Heading>
			<Heading color="white" level={2}>
				{subtitle}
			</Heading>
			<Link to={ctaLink}>
				<Button className={styles.button} raised primary>
					{cta}
				</Button>
			</Link>
		</Flex>
	</Grid>
)

Banner.propTypes = {
	headline: PropTypes.string,
	underlineColor: PropTypes.string,
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaLink: PropTypes.string,
	background: PropTypes.string,
}

export default Banner
