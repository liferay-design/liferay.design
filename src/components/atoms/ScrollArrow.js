/** @jsx jsx */

import { jsx, Text } from 'theme-ui'
import { Component } from 'react'
import Plx from 'react-plx'
import Icon from './Icon'

const scrollArrow = [
	{
		start: 50,
		duration: 200,
		properties: [
			{
				startValue: 1,
				endValue: 0,
				property: 'opacity',
			},
		],
	},
	{
		start: 250,
		duration: 1,
		properties: [
			{
				startValue: 1,
				endValue: 0,
				property: 'scale',
			},
		],
	},
]

export default class ScrollArrow extends Component {
	state = {
		isTop: true,
	}

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < 800
			if (isTop !== this.state.isTop) {
				this.setState({ isTop })
			}
		})
	}

	render() {
		var onClick = function() {
			window.scroll({
				top: `${window.scrollY < 800 ? window.innerHeight : 0}`,
				left: 0,
				behavior: 'smooth',
			})
		}.bind(this)
		return (
			<Plx
				parallaxData={scrollArrow}
				tagName="button"
				onClick={onClick}
				sx={{
					position: 'fixed',
					bottom: '4rem',
					left: '2rem',
					p: 1,
					width: 4,
					height: 6,
					zIndex: 999,
					stroke: 'primary',
					cursor: 'pointer',
					opacity: 0,
					animation: 'animateIn 1s 2s forwards',
					transform: 'translateY(-3rem)',
					'@keyframes animateIn': {
						to: {
							opacity: 1,
							transform: 'translateY(0)',
						},
					},
					'&:focus, &:hover': {
						'> svg': { color: 'primaryd1' },
						'> span': {
							opacity: 1,
							color: 'primaryd1',
							transform: 'rotate(-90deg) translate(8px, -25%)',
						},
					},
				}}
				{...this.props}
			>
				<Text
					as="span"
					sx={{
						position: 'absolute',
						fontSize: ' 12px',
						color: '$primary !important',
						textTransform: ' uppercase',
						letterSpacing: ' 0.15em',
						transformOrigin: ' top left',
						transform: 'rotate(-90deg) translate(0, -25%)',
						opacity: 0,
						transition: '0.15s',
						p: 1,
					}}
				>
					scroll
				</Text>
				<Icon
					name="scrollArrow"
					sx={{
						color: 'primary',
						width: '100%',
						height: '100%',
						transition: '0.3s ease-in-outerHeight',
						transform: `${this.state.isTop ? '' : 'rotate(180deg)'}`,
						transition: '0.3s ease-in-out',
					}}
				/>
			</Plx>
		)
	}
}
