import { Container, Flex, Heading, Text } from 'components/atoms'
import { SiteCredits, SocialIcons } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'

export const Footer = ({ light, background, markdown }) => {
	return (
		<footer
			className={`${light ? styles.light : styles.dark} ${
				markdown ? styles.markdown : null
			}`}
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
							<a href="/handbook/about/contribute">Contribute today</a>!
						</Text>
					) : (
						<Heading level={3}>Liferay.Design</Heading>
					)}
					<SocialIcons
						sx={{
							justifyContent: 'space-between',
							width: ['100%', '50%', '320px'],
							margin: ['0 -.2rem 3rem -.2rem', '1rem 0', 'initial'],
							order: [-1, null, 'initial'],
							maxWidth: ['360px', null, 'initial'],
						}}
					/>
				</Flex>

				{markdown ? null : <SiteCredits />}
			</Container>
		</footer>
	)
}

export default Footer
