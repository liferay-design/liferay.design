import { Link, Text, Flex, Icon } from 'components/atoms'
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
					onClick={this.toggleVisibility}
					justify="space-between"
				>
					{this.props.parentLink ? (
						<Link className={this.props.className} to={this.props.parentLink}>
							{this.props.title}
						</Link>
					) : (
						<Text>{this.props.title}</Text>
					)}
					<Icon
						height="2.4rem"
						width="3rem"
						className={styles.leafLink}
						name="keyboardArrowRight"
						rotate={`${this.state.showChildren ? 90 : 0}`}
						fill={`${this.state.showChildren ? 'primary' : ''}`}
					/>
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
