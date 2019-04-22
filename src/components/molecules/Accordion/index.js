import { Flex, Icon } from 'components/atoms'
import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class Accordion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showChildren: props.open,
		}
	}

	toggleVisibility = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}

	render() {
		return (
			<ul className={styles.accordion}>
				<Flex
					align="center"
					className={`${this.props.className}`}
					onClick={this.toggleVisibility}
					justify="space-between"
					padding="0.55rem 1rem"
				>
					<span>{this.props.title}</span>

					{this.state.showChildren ? (
						<Icon name="keyboardArrowRight" rotate={90} />
					) : (
						<Icon name="keyboardArrowRight" />
					)}
				</Flex>

				<div
					className={`${styles.childrenContainer} ${
						this.state.showChildren ? styles.visible : styles.hidden
					}`}
				>
					{this.props.children}
				</div>
			</ul>
		)
	}
}
