/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'

import { Heading, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class DWHeading extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		delay: PropTypes.string,
		bgImage: PropTypes.string,
	}

	componentDidMount() {
		let page = document.documentElement
		page.addEventListener('mousemove', e => {
			let ow = page.offsetWidth
			let oh = page.offsetHeight
			page.style.setProperty('--mouseX', 16 + (e.clientX * 16) / ow + '%')
			page.style.setProperty('--mouseY', 48 + (e.clientY * 10) / oh + '%')
		})
	}

	render() {
		const { delay, title, bgImage } = this.props

		return (
			<AnimateIn
				delay={delay + 's'}
				sx={{
					position: 'relative',
					width: '100%',
					height: ['100%', null, '100vh'],
					'> span': {
						position: 'absolute',
						fontSize: '20vmin',
						fontWeight: 'heading',
						color: 'white',
					},
				}}
			>
				<span sx={{ top: '0%', left: '4%' }}>D</span>
				<span sx={{ top: '8%', left: '36%' }}>E</span>
				<span sx={{ top: '4%', left: '76%' }}>S</span>
				<span sx={{ top: '32%', left: '20%' }}>I</span>
				<span sx={{ top: '28%', left: '48%' }}>G</span>
				<span sx={{ top: '34%', left: '84%' }}>N</span>
				<span sx={{ top: '56%', left: '4%' }}>W</span>
				<span sx={{ top: '64%', left: '24%' }}>E</span>
				<span sx={{ top: '48%', left: '58%' }}>E</span>
				<span sx={{ top: '74%', left: '80%' }}>K</span>
			</AnimateIn>
		)
	}
}
