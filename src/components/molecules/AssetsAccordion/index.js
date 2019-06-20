import { Flex, Icon } from 'components/atoms'
import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class AssetsAccordion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showChildren: props.open,
			listView: props.list,
		}
	}

	toggleVisibility = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}
	toggleView = () => {
		this.setState({ listView: !this.state.listView })
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
				<div className={`
						${styles.toggleControlls}
						${this.state.showChildren ? styles.visible : styles.hidden}
						${this.state.listView ? styles.gridView : styles.listView}`}>
					<button 
						onClick={this.toggleView}
						className={styles.toggleIcon}
						>
						<div className={styles.listViewIcon}>
							<span>List View</span>
							<Icon name="listView" />
						</div>
						<div className={styles.gridViewIcon}>
							<span>Grid View</span>
							<Icon name="grid" />
						</div>
					</button>
				</div>
				<div
					className={`
						${styles.childrenContainer}
						${ this.state.showChildren ? styles.visible : styles.hidden}
						${ this.state.listView ? styles.listView : styles.gridView} `}
				>
					{this.props.children}
				</div>
			</ul>
		)
	}
}
