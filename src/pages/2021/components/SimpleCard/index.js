import { withPrefix } from 'gatsby'
import { Flex, Heading, Link, Image } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from '../../styles.module.scss'

const SimpleCard = ({ image, title, subtitle, description, link, url, avatarImage }) => {
	return (
		<Flex
			direction="column"
			justify="flex-start"
			align="center"
			className={styles.simpleCard}
		>
			{avatarImage ? (
				<Image
					className={styles.avatar}
					alt={subtitle}
					src={withPrefix(`${image}`)}
				/>
			) : (
				<img src={`${withPrefix(`${image}`)}`} className={styles.cardImage} />
			)}
			<Heading level={3} className={styles.f3}>
				{title}
			</Heading>
			<span className={styles.pSmall}>{subtitle}</span>
			<div className={styles.p}>
				{description}
				{link ? <Link className={styles.link} to={url}>{link}</Link> : null}
			</div>
		</Flex>
	)
}

SimpleCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
	description: PropTypes.string,
}

export default SimpleCard
