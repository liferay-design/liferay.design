import { Container, Flex, Heading, Text } from 'components/atoms'
import { SocialIcons, SiteCredits } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'

export const Footer = ({ light }) => {
	return <footer className={light ? styles.light : styles.dark}>
			<Container>
				<Flex className={styles.textContainer} justify="space-between" flexWrap="wrap">
					<Heading level={3}>Liferay.Design</Heading>

					<SocialIcons />
				</Flex>

				<SiteCredits />
			</Container>
		</footer>
}

export default Footer
