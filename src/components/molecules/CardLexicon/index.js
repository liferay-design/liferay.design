import { Flex, Heading, Icon, Link, Text } from 'components/atoms'
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const CardLexicon = ({
	title,
	text,
	cta,
	to,
	icon,
	image,
	imageUrl,
	dark,
	direction,
	iconWidth,
	iconHeight,
	wide,
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
		<Link to={to} className={styles.link}>
			<Flex
				direction={directionMap[direction]}
				className={`${styles.card} ${dark ? styles.dark : styles.light} ${
					wide ? styles.wide : 'null'
				} `}
				padding="0"
			>
				{image ? (
					<Flex className={styles.image} align="center" justify="center">
						<img src={withPrefix(`${imageUrl}`)} />
					</Flex>
				) : (
					<Flex
						align="center"
						justify="center"
						className={styles.icon}
						width={iconWidthMap[direction]}
					>
						<Icon
							name={icon}
							width={iconWidth}
							height={iconHeight}
							margin="1rem 0 2rem"
							fill="white"
						/>
					</Flex>
				)}
				<div
					className={styles.copy}
					style={{
						flexBasis: '50%',
						textAlign: textAlignmentMap[direction],
						alignSelf: 'center',
					}}
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

CardLexicon.propTypes = {
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
}

CardLexicon.defaultProps = {
	direction: 'vertical',
	iconWidth: '6rem',
	iconHeight: '6rem',
}

export default CardLexicon
