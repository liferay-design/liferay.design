import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'
import { Icon } from 'components/atoms'

export default class Accordion extends Component {
	state = {
		showChildren: false,
	}

	toggleVisibility = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}

	render() {
		const FontIconRotatedProp = this.state.showChildren
			? { rotated: 'clockwise' }
			: {}

		return (
			<ul className={styles.accordion}>
				<Link to={this.props.slug}>
					<span
						className="sidebar-item"
						onClick={this.toggleVisibility}
						style={{
							background:
								this.props.slug === this.props.path
									? '#E8E8E7'
									: 'transparent',
						}}
					>
						{this.props.title}

						<Icon name="keyboardArrowRight" />
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
