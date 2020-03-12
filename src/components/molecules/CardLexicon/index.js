import { Flex, Heading, Icon, Link, Text, Image, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import { useMediaQuery } from 'react-responsive'

const CardLexicon = ({
	cta,
	dark,
	delay,
	direction,
	handbook,
	icon,
	iconHeight,
	iconWidth,
	image,
	imageUrl,
	preTitle,
	text,
	title,
	to,
	wide,
	className,
}) => {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
		<AnimateIn delay={delay}>
			<Link
				to={to}
				className={`${styles.link} ${handbook ? styles.handbook : null}`}
			>
				<Flex
					direction={isMobile ? directionMap.vertical : directionMap[direction]}
					className={`${styles.card} ${className} ${dark ? styles.dark : styles.light} ${
						wide ? styles.wide : 'null'
					} `}
					padding="0"
				>
					{image ? (
						<Flex
							className={styles.image}
							align={wide ? 'stretch' : 'center'}
							justify="center"
						>
							<Image src={imageUrl} />
						</Flex>
					) : <div className={styles.spacer}/>}
					{icon ? (
						<Flex
							align="center"
							justify="center"
							className={styles.icon}
							width={isMobile ? iconWidthMap.vertical : iconWidthMap[direction]}
						>
							<Icon
								name={icon}
								width={iconWidth}
								height={iconHeight}
								margin="1rem 0 2rem"
								fill="white"
							/>
						</Flex>
					) : null}
					<div
						className={styles.copy}
						style={{
							flexBasis: '50%',
							textAlign: isMobile ? textAlignmentMap.vertical : textAlignmentMap[direction],
							alignSelf: 'center',
						}}
					>
						{preTitle ? (
							<Heading className={styles.preTitle}>{preTitle}</Heading>
						) : null}
						<Heading level={2} className={styles.title}>
							{title}
						</Heading>
						<Text type="p" size="medium" className={styles.text}>
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
					</div>
				</Flex>
			</Link>
		</AnimateIn>
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
	delay: PropTypes.string,
	handbook: PropTypes.bool,
}

CardLexicon.defaultProps = {
	direction: 'vertical',
	iconWidth: '6rem',
	iconHeight: '6rem',
}

export default CardLexicon
