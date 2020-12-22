/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { withPrefix } from 'gatsby'
import PropTypes from 'prop-types'
import { NiceLink, Icon } from 'components/atoms'

const Slide = ({ title, image, icon, url, linkText, description, type }) => {
	return (
		<div
			sx={{
				height: '100%',
			}}
		>
			{type === 'card' ? (
				<div
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						background: theme => `${theme.gradients.backgroundGradient}`,
						borderRadius: '1rem',
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
								variant: 'boxes.icon',
								flexShrink: ['0'],
							}}
						>
							<Icon name={icon} />
						</div>
						<div
							sx={{
								padding: ['2rem 0', '1rem 1.5rem'],
							}}
						>
							<h2
								sx={{
									fontSize: 5,
									textAlign: ['center', 'center', 'left'],
								}}
							>
								{title}
							</h2>
							<p
								sx={{
									textAlign: 'justify',
									fontSize: 3,
								}}
							>
								{description}
							</p>
							{url ? <NiceLink to={url}>{linkText}</NiceLink> : null}
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
								borderRadius: '0 0 1rem 1rem',
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
							borderRadius: '1rem',
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
