import { Button, Container, Flex, Heading, Link, Text } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const BillboardAlt = ({ image, heading, subtitle, cta, background, ctaUrl }) => {
	return (
		<Flex className={styles.wrapper} background={background}>
			<Container>
				<Flex className={styles.container}>
					<Flex className={styles.image} backgroundImage={image} />
					<Flex
						className={styles.text}
						direction="column"
						align="flex-start"
						justify="space-between"
					>
						<Heading className={styles.headline} level={2}>
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
	subtitle: PropTypes.string,
	cta: PropTypes.string,
	ctaUrl: PropTypes.string,
	background: PropTypes.string,
}

export default BillboardAlt
