import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { Flex, Heading, Text, Icon } from 'components/atoms'

const LexiconCard = ({ title, text, cta, to, icon, dark, wide }) => {
	return (
		<Link to={to}>
			<Flex
				direction="column"
				className={`${styles.card} ${dark ? styles.dark : styles.light} ${
					wide ? styles.wide : ''
				}`}
			>
				<div className={styles.content}>
					<Flex align="center" justify="center" className={styles.iconWrapper}>
						<Icon
							name={icon}
							width="6rem"
							height="6rem"
							margin="1rem 0 2rem"
						/>
					</Flex>
					<div className={styles.copy}>
						<Heading level={2} className={styles.title}>
							{title}
						</Heading>
						<Text type="p" size="medium" className={styles.text}>
							{text}
						</Text>
						<Text type="p" size="base" weight="black" className={styles.cta}>
							{cta}
						</Text>
					</div>
				</div>
			</Flex>
		</Link>
	)
}

LexiconCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	cta: PropTypes.string,
	to: PropTypes.string,
	styles: PropTypes.string,
	icon: PropTypes.string,
}

export default LexiconCard
