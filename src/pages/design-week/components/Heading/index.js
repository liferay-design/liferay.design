/** @jsx jsx */

import { jsx } from 'theme-ui'

import { AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'

export default class DWHeading extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		delay: PropTypes.string,
	}

	render() {
		const { delay } = this.props

		const title = "Design Week"

		const titleArray = [...title]

		const top = [
			'0%', // D
			'32%', // E
			'8%', // S
			'24%', // I
			'4%', // G
			'34%', // N
			'0%', // ""
			'56%', // W
			'64%', // E
			'48%', // E
			'74%', // K
		]
		const left = [
			'4%', // D
			'20%', // E
			'36%', // S
			'52%', // I
			'70%', // G
			'84%', // N
			'0%', // ""
			'4%', // W
			'24%', // E
			'58%', // E
			'80%', // K
		]

		return (
			<AnimateIn
				delay={delay + 's'}
				sx={{
					position: 'relative',
					width: '100%',
					height: ['100%', null, '100vh'],
				}}
			>
				{titleArray.map((item, index) => (
					<AnimateIn
						key={index}
						sx={{
							top: `${top[index]}`,
							left: `${left[index]}`,
							position: 'absolute',
						}}
						delay={index * 0.1 + +delay - 0.1 + 's'}
					>
						<span
							sx={{
								variant: 'text.caps',
								fontSize: '20vmin',
								fontWeight: 'heading',
								color: 'white',
							}}
						>
							{item}
						</span>
					</AnimateIn>
				))}
			</AnimateIn>
		)
	}
}
