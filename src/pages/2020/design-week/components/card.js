/** @jsx jsx */

import { jsx, Button, Flex, Text } from 'theme-ui'
import { Heading, Link, AnimateIn, Icon } from 'components/atoms'
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

		const flags = [
			'flags_de_DE',
			'flags_en_US',
			'flags_es_ES',
			'flags_it_IT',
			'flags_pt_BR',
		]

		const smoothTransition =
			'background 0.2s ease-in-out, opacity 0.2s ease-in-out, transform 0.2s ease-in-out'

		return (
			<Flex
				sx={{
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
					p: [3, null, 4],
					pb: [3, null, 5],
					minWidth: '300px',
				}}
			>
				<Flex
					sx={{
						alignContent: 'center',
						width: '100%',
						justifyContent: 'space-between',
						mb: 3,
					}}
				>
					{flags.map((item, index) => (
						<AnimateIn key={index} delay={index * 0.1 + +delay - 0.1 + 's'}>
							<Icon name={item} sx={{ height: '2rem', width: '2rem' }} />
						</AnimateIn>
					))}
				</Flex>
				<AnimateIn delay={delay + 's'}>
					<AnimateIn delay={delay * 1.05 + 's'}>
						<Link to="/">
							<Icon
								name="liferayDesicon"
								sx={{
									height: '2.2rem',
									width: '2.2rem',
									m: '0 0 1rem -.2rem',
									fill: 'mainL5',
									display: ['none', null, 'inline'],
								}}
							/>
						</Link>
					</AnimateIn>
					<AnimateIn delay={delay * 1.2 + 's'}>
						<Heading
							sx={{
								color: 'mainL2',
								fontWeight: 'heading',
								fontSize: 6,
								ml: '-.1ch',
								variant: 'text.caps',
							}}
							level={2}
						>
							{' '}
							Design Week{' '}
							<span sx={{ color: 'mainL5' }}>From&nbsp;Home</span>
						</Heading>
					</AnimateIn>
					<AnimateIn delay={delay * 1.24 + 's'}>
						<Heading
							sx={{
								color: `${color}`,
								filter: 'brightness(.95)',
								variant: 'text.caps',
								fontSize: 3,
								mb: 2,
							}}
							level={2}
						>
							{date}
						</Heading>
					</AnimateIn>
					<AnimateIn delay={delay * 1.2 + 's'}>
						<Heading sx={{ color: 'mainL3', fontSize: 3 }} level={2}>
							<Text sx={{ mb: 2 }}>We're going virtual!</Text>
							<Text>
								<ul>
									<li>6+ Talks</li>
									<li>2+ Workshops</li>
									<li>Time to connect and play together!</li>
								</ul>
							</Text>
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
