import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import { FontIcon, ListItem, Menu } from 'react-md'

export default class Accordion extends Component {
	state = {
		showChildren: false,
	}

	toggleVisibility = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}

	render() {
		// const FontIconRotatedProp = this.state.showChildren ? { rotated: 'clockwise' } : {}

		return (
			<ul className={styles.accordion}>
				<Link to={this.props.slug}>
					<ListItem
						active={this.props.slug === this.props.path}
						as="section"
						onClick={this.toggleVisibility}
						primaryText={this.props.title}
					>
						{/* <FontIcon {...FontIconRotatedProp} >keyboard_arrow_down</FontIcon> */}
					</ListItem>
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
