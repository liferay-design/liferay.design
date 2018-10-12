import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { Flex, Heading, Text, Icon } from 'components/atoms'

const LexiconCard = ({
	title,
	text,
	cta,
	to,
	icon,
	dark,
	direction,
	iconWidth,
	iconHeight,
}) => {
	const directionMap = {
		vertical: 'column',
		horizontal: 'row',
	}

	const textAlignmentMap = {
		vertical: 'center',
		horizontal: 'left',
	}

	const iconWidthMap = {
		vertical: '100%',
		horizontal: '50%',
	}

	return (
		<Link to={to}>
			<Flex
				direction={directionMap[direction]}
				className={`${styles.card} ${dark ? styles.dark : styles.light}`}
			>
				<Flex align="center" justify="center" width={iconWidthMap[direction]}>
					<Icon
						name={icon}
						width={iconWidth}
						height={iconHeight}
						margin="1rem 0 2rem"
					/>
				</Flex>
				<div
					className={styles.copy}
					style={{ flexBasis: '50%', textAlign: textAlignmentMap[direction] }}
				>
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
			</Flex>
		</Link>
	)
}

LexiconCard.propTypes = {
	cta: PropTypes.string,
	direction: PropTypes.string,
	icon: PropTypes.string,
	iconWidth: PropTypes.string,
	iconHeight: PropTypes.string,
	styles: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
	to: PropTypes.string,
}

LexiconCard.defaultProps = {
	direction: 'vertical',
	iconWidth: '6rem',
	iconHeight: '6rem',
}

export default LexiconCard
