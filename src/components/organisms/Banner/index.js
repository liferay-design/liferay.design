import { Flex, Heading, Link, Container } from 'components/atoms'
import Navbar from 'components/organisms/Navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, Grid } from 'reakit'
import styles from './styles.module.scss'

const Banner = ({
	underlineColor,
	headline,
	subtitle,
	cta,
	ctaLink,
	section,
	background,
	textAlign
}) => (
	<Grid
		templateRows="8rem 1fr"
		className={styles.container}
		style={{ background: `${background}` }}
	>
		<Navbar underlineColor={underlineColor} white section={section} />
		<Container style={{alignSelf:'center'}}>
			<Flex
				direction="column"
				align={textAlign}
				className={styles.content}
			>
				<Heading color="white" level={1}>
					{headline}
				</Heading>
				<Heading color="white" level={2}>
					{subtitle}
				</Heading>
				{cta ? (
					<Link to={ctaLink}>
						<Button className={styles.button} raised primary>
							{cta}
						</Button>
					</Link>
				) : null}
			</Flex>
		</Container>
	</Grid>
)

Banner.propTypes = {
	headline: PropTypes.string,
	underlineColor: PropTypes.string,
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaLink: PropTypes.string,
	background: PropTypes.string,
	textAlign: PropTypes.string,
}

Banner.defaultProps = {
	textAlign: 'center',
}

export default Banner
