import React from 'react'
import { Heading, Container, Flex, Text, Button, Link } from 'components/atoms'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'

const BillboardAlt = ({ image, heading, subtitle, cta, background, ctaUrl }) => {
	return (
		<Flex className={styles.wrapper} background={background}>
			<Container>
				<Flex className={styles.container}>
					<Flex
						className={styles.image}
						backgroundImage={image}
					/>
					<Flex
						className={styles.text}
						direction="column"
						align="flex-start"
						justify="space-between"
					>
						<Heading className={styles.headline} level="2">
							{heading}
						</Heading>
						<Text margin="xxLarge">{subtitle}</Text>
						<Link to={ctaUrl}>
							<Button
								size="medium"
								weight="heavy"
								className={styles.button}
							>
								{cta}
							</Button>
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