import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import { Icon } from 'components/atoms'

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
				<Link onClick={this.toggleVisibility} to={this.props.link}>
					<span className={`${this.props.className}`}>
						{this.props.title}

						{this.state.showChildren ? (
							<Icon name="keyboardArrowRight" rotate={90} />
						) : (
							<Icon name="keyboardArrowRight" />
						)}
					</span>
				</Link>

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
