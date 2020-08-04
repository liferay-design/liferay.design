/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, Text, Flex, Icon } from 'components/atoms'
import { Component } from 'react'
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
						sx={{
							height: '2.4rem',
							width: '3rem',
							transition: 'transform 0.4s',
							transform: `${this.state.showChildren ? 'rotate(90deg)' : 'rotate(0deg)'}`,
							fill: `${this.state.showChildren ? 'primary' : ''}`,
						}}
						className={styles.leafLink}
						name="keyboardArrowRight"
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
