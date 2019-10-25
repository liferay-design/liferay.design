import { Icon, Text, Link, Image, AnimateIn } from 'components/atoms'
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Avatar, Card, CardText, CardTitle, Media } from 'react-md'
import styles from './styles.module.scss'

const CardDefault = ({
	delay,
	imageURL,
	icon,
	title,
	subtitle,
	link,
	avatarImage,
	avatarImageURL,
	pill,
	tag,
	...props
}) => (
	<AnimateIn delay={delay}>
		<Link className={styles.cardLink} to={link}>
			<Media
				style={{
					position: 'absolute',
					top: '0',
					bottom: '0',
					right: '0',
					left: '0',
					overflow: 'visible',
				}}
				aspectRatio="4-3"
				className={styles.sexyShadow}
				{...props}
			>
				<Image alt="shadow for image" src={imageURL} />
			</Media>
			<Card className={styles.card}>
				<Media aspectRatio="4-3" className={styles.null} {...props}>
					<Image alt={'image for ' + `${title}`} src={imageURL} />
				</Media>
				{pill ? (
					<Text className={styles.pill} weight="black">
						{tag}
					</Text>
				) : null}
				{avatarImage ? (
					<Avatar
						className={styles.avatar}
						alt={avatarImageURL}
						src={withPrefix(`${avatarImageURL}`)}
					/>
				) : (
					<Avatar
						className={styles.avatar}
						icon={
							<Icon fill="white" height="2rem" width="2rem" name={icon} />
						}
					/>
				)}
				<div className={styles.copy}>
					<CardTitle className={styles.title} title={title} />
					<CardText className={styles.text}>{subtitle}</CardText>
				</div>
			</Card>
		</Link>
	</AnimateIn>
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
