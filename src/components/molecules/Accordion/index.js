import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import { FontIcon, Menu } from 'react-md'

export default class Accordion extends Component {
	state = {
		showChildren: false,
	}

	toggleVisibility = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}

	render() {
		const FontIconRotatedProp = this.state.showChildren ? { rotated: 'clockwise' } : {}

		return (
			<div className={styles.accordion}>
				<Link to={this.props.slug}>
					<Menu.Item
						active={this.props.slug === this.props.path}
						as="section"
						onClick={this.toggleVisibility}
					>
						{this.props.title}

						<FontIcon {...FontIconRotatedProp} >keyboard_arrow_down</FontIcon>
					</Menu.Item>
				</Link>

					<div className={styles.childrenContainer}>{this.props.children}</div>
			</div>
		)
	}
}
