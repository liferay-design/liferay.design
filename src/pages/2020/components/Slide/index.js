/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import { Link, Icon } from 'components/atoms'
import styles from '../../styles.module.scss'

const Slide = ({ title, image, icon, url, linkText, description, type }) => {
	return (
		<div sx={{ height: '100%' }}>
			{type === 'card' ? (
				<div
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						background: theme => `${theme.gradients.backgroundGradient}`,
					}}
				>
					<Flex
						sx={{
							alignItems: ['center', 'center', 'flex-start'],
							flexDirection: ['column', 'column', 'row'],
							flexGrow: '1',
							maxWidth: '1200px',
							overflow: 'hidden',
							p: ['2rem', '4rem'],
							width: ['90vw', '80vw'],
						}}
					>
						<div
							sx={{
								bg: `darkBlack`,
								borderRadius: ['0.5em'],
								flexShrink: ['0'],
								p: '1rem',
							}}
						>
							<Icon
								name={icon}
								sx={{ color: 'primary', height: '3rem', width: '3rem' }}
							/>
						</div>
						<div
							sx={{
								padding: ['2rem 0', '1.5rem'],
							}}
						>
							<h2
								className={styles.f2}
								sx={{
									textAlign: ['center', 'center', 'left'],
								}}
							>
								{title}
							</h2>
							<p
								className={styles.pLarge}
								sx={{
									textAlign: 'justify',
								}}
							>
								{description}
							</p>
							<Link to={url}>{linkText}</Link>
						</div>
					</Flex>
					<div
						sx={{
							height: '0',
							pb: '40%',
							position: 'relative',
							width: '100%',
						}}
					>
						<img
							sx={{
								objectPosition: 'top',
								height: '100%',
								position: 'absolute',
								width: '100%',
							}}
							src={`${withPrefix(`${image}`)}`}
						/>
					</div>
				</div>
			) : (
				<Flex
					sx={{
						height: ['50.625vw', '45vw'], // 3:2 ratio
						objectFit: 'contain',
						position: 'relative',
						width: ['90vw', '80vw'],
					}}
				>
					<img
						sx={{
							objectPosition: 'top',
							margin: '0',
							minHeight: '100%',
							minWidth: '100%',
						}}
						src={`${withPrefix(`${image}`)}`}
					/>
				</Flex>
			)}
		</div>
	)
}

Slide.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	icon: PropTypes.string,
	url: PropTypes.string,
	linkText: PropTypes.string,
	description: PropTypes.string,
	type: PropTypes.string,
}

export default Slide
