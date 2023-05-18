/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Flex, Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

export default class LoadingAnimation extends React.Component {
	static propTypes = {
		size: PropTypes.string,
	}

	render() {
		const { size } = this.props
		return (
			<Flex align="center" justify="center" className={styles.wrapper}>
				<div
					style={{
						width: `${size}`,
						height: `${size}`,
						position: 'relative',
						marginBottom: '2%',
					}}
				>
					<Icon
						sx={{
							marginBottom: '4vh',
							height: '60%',
							width: '60%',
							margin: '20%',
							fill: 'neutral7',
						}}
						name="liferayDesicon"
					/>
					<svg
						viewBox="0 0 100 100"
						width="100%"
						height="100%"
						className={styles.spinningDot}
					>
						<circle cx="50" cy="2" r="2" sx={{ fill: 'primary' }} />
					</svg>
				</div>
			</Flex>
		)
	}
}
