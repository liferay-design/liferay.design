import { Flex, Heading, Icon, Link, Text, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const CardHidden = ({ cta, delay, icon, text, title, to }) => {
	return (
		<AnimateIn delay={delay}>
			<Link to={to} className={`${styles.cardHidden} ${styles.neumorphism}`}>
				<Flex
					className={styles.card}
					padding={icon ? '2rem 0' : '.5rem'}
					style={delay ? { animationDelay: `${delay}` } : null}
				>
					{icon ? (
						<Flex align="flex-start" justify="center" className={styles.icon}>
							<Icon
								fill="primary"
								className={styles.icon}
								name={icon}
								height="4em"
								width="4em"
								margin="0 .5rem 0 1.5rem"
							/>
						</Flex>
					) : null}
					<Flex direction="column" className={styles.copy}>
						<Heading level={icon ? 2 : 3} className={styles.title}>
							{title}
						</Heading>
						<Text
							type="p"
							size={icon ? 'medium' : 'base'}
							className={styles.text}
						>
							{text}
						</Text>
						{cta ? (
							<Text
								type="p"
								size="base"
								weight="black"
								className={styles.cta}
							>
								{cta}
							</Text>
						) : null}
					</Flex>
				</Flex>
			</Link>
		</AnimateIn>
	)
}

CardHidden.propTypes = {
	cta: PropTypes.string,
	delay: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
	to: PropTypes.string,
}

export default CardHidden
