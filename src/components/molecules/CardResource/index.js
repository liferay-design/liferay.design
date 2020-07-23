import { Flex, Heading, AnimateIn, Icon } from 'components/atoms'
import React, { Component } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from './styles.module.scss'
import { colors, fontSizes } from 'theme/'

export class CardResource extends Component {
	render() {
		const randomBackgroundPosition = Math.floor(Math.random() * 100) + 1 + '%'
        const { delay, key, title, icon, subtitle, body } = this.props
		return (
			<AnimateIn key={key} delay={delay}>
				<article>
					<Flex
						style={{
							background:
								'center ' +
								randomBackgroundPosition +
								'/50% url(/images/resources/random-bg.svg) repeat-y, linear-gradient(to right,' +
								colors.primary +
								',' +
								colors.primaryd2 +
								')',
						}}
						as="header"
						justify="space-between"
						align="center"
					>
						<Heading
							level={1}
							additionalStyles={{
								fontSize: fontSizes.medium,
								paddingBottom: '0',
								width: '16ch',
							}}
						>
							{title}
						</Heading>
						<Icon name={icon} color="white" width="64px" height="64px" />
					</Flex>
					<section>
						<Heading
							level={2}
							additionalStyles={{ fontSize: fontSizes.base }}
						>
							{subtitle}
						</Heading>
						<MDXRenderer>{body}</MDXRenderer>
					</section>
				</article>
			</AnimateIn>
		)
	}
}

export default CardResource
