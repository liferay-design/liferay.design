import React from 'react'
import { Heading, Container, Flex, Text, Button, Link } from 'components/atoms'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

const BillboardAlt = ({ image, heading, subtitle, cta, background, ctaUrl }) => {
	return (
		<Flex className={styles.wrapper} background={background}>
			<Container>
				<Flex>
					<Flex
						margin="-3rem 0 3rem"
						height="20rem"
						width="20rem"
						backgroundImage={image}
					/>
					<Flex 
						margin="2rem 1rem 3rem 6rem" 
						direction="column" align="flex-start"
						justify="space-between"
						width="60ch"
						>
						<Heading className={styles.headline} level="2">{heading}</Heading>
						<Text margin="xxLarge">{subtitle}</Text>
						<Link to={ctaUrl}>
							<Button 
								size="medium"
								weight="heavy"
								className={styles.button}>{cta}</Button>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}

BillboardAlt.propTypes = {
	image: PropTypes.string,
	heading: PropTypes.string,
	subtitle: PropTypes.element,
	cta: PropTypes.element,
	ctaUrl: PropTypes.element,
	background: PropTypes.string,
}

export default BillboardAlt