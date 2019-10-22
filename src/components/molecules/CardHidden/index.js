import { Flex, Heading, Icon, Link, Text, Image } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import {colors } from 'theme'

const CardHidden = ({
	cta,
	delay,
	icon,
	text,
	title,
	to,
}) => {
	return (
		<Link to={to} className={styles.cardHidden}>
			<Flex
				className={styles.card}
				padding="2rem"
				style={delay ? { animationDelay: `${delay}` } : null}
			>
				<Flex
					align="flex-start"
					justify="center"
					className={styles.icon}
				>
					<Icon
						fill={colors.secondary}
						className={styles.icon}
						name={icon}
						height='4em'
						width='4em'
						margin="0 .5rem 0 1.5rem"
					/>
				</Flex>
				<Flex direction="column" className={styles.copy} >
					<Heading level={2} className={styles.title}>
						{title}
					</Heading>
					<Text type="p" size="medium" className={styles.text}>
						{text}
					</Text>
					<Text type="p" size="base" weight="black" className={styles.cta}>
						{cta}
					</Text>
				</Flex>
			</Flex>
		</Link>
	)
}

CardHidden.propTypes = {
	cta: PropTypes.string,
	direction: PropTypes.string,
	icon: PropTypes.string,
	imageUrl: PropTypes.string,
	iconWidth: PropTypes.string,
	iconHeight: PropTypes.string,
	styles: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
	to: PropTypes.string,
	delay: PropTypes.string,
	handbook: PropTypes.bool,
}

CardHidden.defaultProps = {
	direction: 'vertical',
	iconWidth: '6rem',
	iconHeight: '6rem',
}

export default CardHidden
