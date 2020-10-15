/** @jsx jsx */

import { jsx, Button } from 'theme-ui'
import { Heading, Link, AnimateIn, Flex, Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import { Component } from 'react'

export class Card extends Component {
	static propTypes = {
		place: PropTypes.string,
		date: PropTypes.string,
		ctaUrl: PropTypes.string,
		cta: PropTypes.string,
		delay: PropTypes.string,
	}

	render() {
		const { delay, place, date, ctaUrl, cta, color } = this.props

		const smoothTransition =
			'background 0.2s ease-in-out, opacity 0.2s ease-in-out, transform 0.2s ease-in-out'

		return (
			<Flex
				direction="column"
				justify="flex-end"
				sx={{ height: '100%', p: [3, null, 4], pb:[3, null, 5],  minWidth: '300px' }}
			>
				<AnimateIn delay={delay * 1.1 + 's'}>
					<AnimateIn delay={delay * 1.05 + 's'}>
						<Link to="/">
							<Icon
								name="liferayDesicon"
								sx={{
									height: '2.5rem',
									width: '2.5rem',
									m: '0 0 2rem -.2rem',
									fill: 'mainL5',
									display: ['none', null, 'inline'],
								}}
							/>
						</Link>
					</AnimateIn>
					<AnimateIn delay={delay * 1.2 + 's'}>
						<Heading
							sx={{ color: 'mainL5', fontSize: 3 }}
							level={2}
						>
							{place}
						</Heading>
					</AnimateIn>
					<AnimateIn delay={delay * 1.24 + 's'}>
						<Heading
							sx={{ color: 'mainL2', variant: 'text.caps', fontSize: 3 }}
							level={2}
						>
							{date}
						</Heading>
					</AnimateIn>
					<AnimateIn delay={delay * 1.3 + 's'}>
						<Link
							to={ctaUrl}
							sx={{
								display: 'block',
								transform: 'translateY(0)',
								position: 'relative',
								'&:before': {
									transition: `${smoothTransition}`,
									content: '""',
									position: 'absolute',
									bg: `${color}`,
									filter: 'blur(1rem) brightness(.8)',
									width: '80%',
									height: '80%',
									left: '10%',
									top: '1rem',
									zIndex: -1,
									opacity: '0.8',
								},
								'&:hover': {
									transition: `${smoothTransition}`,
									filter: 'brightness(.95)',
									transform: 'translateY(.2rem)',
									'&:after': {
										transition: `${smoothTransition}`,
										opacity: 1,
										top: '1.2rem',
									},
								},
							}}
						>
							<Button
								sx={{
									transition: `${smoothTransition}`,
									bg: `${color}`,
									width: '100%',
									cursor: 'pointer',
									color: 'white',
								}}
							>
								{cta}
							</Button>
						</Link>
					</AnimateIn>
				</AnimateIn>
			</Flex>
		)
	}
}

export default Card
