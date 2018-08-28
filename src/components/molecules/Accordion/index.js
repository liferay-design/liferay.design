import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import { Icon, Menu, Transition } from 'semantic-ui-react'

export default class Accordion extends Component {
	state = {
		showChildren: false,
	}

	toggleVisibility = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}

	render() {
		const IconRotatedProp = this.state.showChildren ? { rotated: 'clockwise' } : {}

		return (
			<div className={styles.accordion}>
				<Link to={this.props.slug}>
					<Menu.Item
						active={this.props.slug === this.props.path}
						as="section"
						onClick={this.toggleVisibility}
					>
						{this.props.title}

						<Icon name="triangle right" {...IconRotatedProp} />
					</Menu.Item>
				</Link>

				<Transition
					animation="slide down"
					duration={200}
					visible={this.state.showChildren}
				>
					<div className={styles.childrenContainer}>{this.props.children}</div>
				</Transition>
			</div>
		)
	}
}
