/** @jsx jsx */

import { AnimateIn, Icon, Link } from 'components/atoms'
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import { jsx, Avatar, Box, Card, Flex, Heading, Image, Text } from 'theme-ui'
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
	aspectRatio,
	...props
}) => {
	const aspectRatioMap = {
		'4:3': 'cards.4:3',
		'16:9': 'cards.16:9',
	}

	return (
		<AnimateIn delay={delay}>
			<Link
				className={styles.cardLink}
				to={link}
				sx={{
					'&:hover > div > div > img:nth-of-type(2)': {
						filter: 'grayscale(0)',
					},
					'&:hover > div > div': {
						bg: 'mainL2',
					},
				}}
			>
				<Card
					sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}
					className={styles.card}
				>
					<Box
						sx={{
							overflow: 'visible',
							position: 'relative',
							zIndex: -1,
							variant: `${aspectRatioMap[aspectRatio]}`,
						}}
					>
						<Image
							sx={{
								position: 'absolute',
								top: '0',
								bottom: '0',
								right: '0',
								left: '0',
								height: '100%',
								width: '100%',
								overflow: 'visible',
								variant: 'images.grey',
							}}
							className={styles.sexyShadow}
							alt=""
							{...props}
							src={imageURL}
						/>
						<Image
							sx={{
								height: '100%',
								width: '100%',
								variant: 'images.grey',
								position: 'absolute',
								top: '0',
								bottom: '0',
								right: '0',
								left: '0',
							}}
							{...props}
							alt={'image for ' + `${title}`}
							src={imageURL}
						/>
						{pill && tag ? (
							<Text
								sx={{
									position: 'absolute',
									top: -2,
									left: 2,
									backgroundColor: 'primary',
									color: 'white',
									fontWeight: 'bold',
									variant: 'text.caps',
									py: 1,
									px: 2,
									borderRadius: '2em',
								}}
							>
								{tag}
							</Text>
						) : null}
					</Box>
					<Box pt={2} px={3} pb={4} sx={{ bg: 'mainL1', flexGrow: 1 }}>
						<Flex
							sx={{
								mt: -48,
								ml: '-.2rem',
								mb: 2,
								variant: 'images.avatar',
							}}
						>
							{avatarImage ? (
								<Avatar
									sx={{}}
									alt={avatarImageURL}
									src={withPrefix(`${avatarImageURL}`)}
								/>
							) : (
								<Icon
									sx={{
										color: 'white',
										height: '2rem',
										width: '2rem',
									}}
									name={icon}
								/>
							)}
						</Flex>
						<Heading sx={{ mb: 3, lineHeight: '1.3', fontSize: '1.5rem' }}>
							{title}
						</Heading>
						<Text sx={{ color: 'mainL5', fontSize: '3' }}>{subtitle}</Text>
					</Box>
				</Card>
			</Link>
		</AnimateIn>
	)
}
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

CardDefault.defaultProps = {
	aspectRatio: '4:3',
}

export default CardDefault
