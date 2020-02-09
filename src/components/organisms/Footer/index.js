import { Container, Flex, Heading, Text } from 'components/atoms'
import { SiteCredits, SocialIcons } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'

export const Footer = ({ light, background, markdown }) => {
	return (
		<footer
			className={`${light ? styles.light : styles.dark} ${markdown ? styles.markdown : null}`}
			style={{ background: `${background}` }}
		>
			<Container>
				<Flex
					className={styles.textContainer}
					justify="space-between"
					padding="0 0 10vh"
					flexWrap="wrap"
				>
					{' '}
					{markdown ? (
						<Text width="50%">
							How can this be improved?{' '}
							<a href="https://github.com/liferay-design/liferay.design/issues">
								Create an issue
							</a>
							!
						</Text>
					) : (
						<Heading level={3}>Liferay.Design</Heading>
					)}
					<SocialIcons />
				</Flex>

				{ markdown ? null :<SiteCredits />}
			</Container>
		</footer>
	)
}

export default Footer
