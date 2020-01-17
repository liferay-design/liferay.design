import { Flex, Heading, AnimateIn } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class DWHeading extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		delay: PropTypes.string,
		bgImage: PropTypes.string,
	}

	render() {
		const { delay, title, bgImage } = this.props

		let page = document.documentElement
		page.addEventListener('mousemove', e => {
			let ow = page.offsetWidth
			let oh = page.offsetHeight
			page.style.setProperty('--mouseX', 16 + ((e.clientX * 16) / ( ow * 1)) + '%')
			page.style.setProperty('--mouseY', 48 + ((e.clientY * 10) / ( oh * 1)) + '%')
		})


		return (
			<Flex align="center" className={styles.wrapper}>
				<AnimateIn delay={delay + 's'}>
					<Heading
						className={styles.f1}
						level={1}
						additionalStyles={{
							backgroundImage: `${'-webkit-linear-gradient(30deg, rgba(255,255,255, 0.8) 40%, transparent), url("' +
								bgImage +
								'"'}`,
						}}
					>
						{title}
					</Heading>
				</AnimateIn>
			</Flex>
		)
	}
}
