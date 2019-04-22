import { Icon, Text } from 'components/atoms'
import { Link, withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Avatar, Card, CardText, CardTitle, Media } from 'react-md'
import styles from './styles.module.scss'

const CardDefault = ({
	imageURL,
	icon,
	title,
	subtitle,
	link,
	avatarImage,
	avatarImageURL,
	pill,
	tag,
}) => (
	<Link className={styles.cardLink} to={link}>
		<Card className={styles.card}>
			<Media aspectRatio="4-3" className={styles.null}>
				<img src={withPrefix(`${imageURL}`)} />
			</Media>
			{pill ? (
				<Text className={styles.pill} weight="black">
					{tag}
				</Text>
			) : null}
			{avatarImage ? (
				<Avatar className={styles.avatar} src={withPrefix(`${avatarImageURL}`)} />
			) : (
				<Avatar
					className={styles.avatar}
					icon={<Icon fill="white" height="2rem" width="2rem" name={icon} />}
				/>
			)}
			<div className={styles.copy}>
				<CardTitle className={styles.title} title={title} />
				<CardText className={styles.text}>{subtitle}</CardText>
			</div>
		</Card>
	</Link>
)

CardDefault.propTypes = {
	imageURL: PropTypes.string,
	avatarImageURL: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	link: PropTypes.string,
	pill: PropTypes.string,
	tag: PropTypes.string,
}

export default CardDefault
