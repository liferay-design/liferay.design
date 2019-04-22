import { Container, Flex, Heading } from 'components/atoms'
import { SiteCredits, SocialIcons } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'

export const Footer = ({ light }) => {
	return (
		<footer className={light ? styles.light : styles.dark}>
			<Container>
				<Flex
					className={styles.textContainer}
					justify="space-between"
					padding="0 0 10vh"
					flexWrap="wrap"
				>
					<Heading level={3}>Liferay.Design</Heading>

					<SocialIcons />
				</Flex>

				<SiteCredits />
			</Container>
		</footer>
	)
}

export default Footer
