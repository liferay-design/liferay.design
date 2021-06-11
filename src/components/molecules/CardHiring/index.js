/** @jsx jsx */

import { jsx, Flex, Text } from 'theme-ui'
import { Link, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'

const CardHiring = ({
	// Should probably merge this component w/CardDefault, just too lazy rn
	dark,
	delay,
	topLeft,
	topRight,
	content,
	title,
	subtitle,
	checklist,
	to,
	...props
}) => {
	return (
		<AnimateIn delay={delay} {...props}>
			<Link to={to} sx={{ textDecoration: 'none !important' }}>
				<Flex
					as="section"
					sx={{
						flexDirection: 'column',
						variant: 'cards.default',
						height: '100%',
					}}
				>
					<Flex
						as="label"
						sx={{ justifyContent: 'space-between', p: 2, m: -2 }}
					>
						<Text sx={{ variant: 'text.caps', color: 'mainL4', fontSize: 1 }}>
							{topLeft}
						</Text>
						<Text sx={{ variant: 'text.caps', color: 'mainL4', fontSize: 1 }}>
							{topRight}
						</Text>
						<input
							sx={{
								variant: 'inputs.checkbox',
								fontSize: 2,
								ml: '6ch',
							}}
							type="checkbox"
						/>
					</Flex>
					<Text as="h2" sx={{ fontSize: 4, mt: '.2em !important' }}>
						{title}
					</Text>
					<Text sx={{ fontStyle: 'italic', my: 1 }} level={3}>
						{subtitle}
					</Text>
					{checklist ? (
						<ul
							sx={{ listStyleType: 'none', m: 0, p: 0, pl: '0 !important' }}
						>
							{content.map((item, index) => (
								<AnimateIn key={index} delay={index * 0.1 + 's'}>
									<li sx={{ my: 1 }}>
										<label>
											<Text sx={{ display: 'inline' }}>{item}</Text>
										</label>
									</li>
								</AnimateIn>
							))}
						</ul>
					) : null}
				</Flex>
			</Link>
		</AnimateIn>
	)
}

CardHiring.propTypes = {
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

export default CardHiring
