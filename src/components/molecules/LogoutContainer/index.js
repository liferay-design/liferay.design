import React, { Component } from 'react'
import { Avatar, Collapse } from 'react-md'
import styles from './styles.module.scss'
import { Button, Flex, Text } from 'components/atoms'

export default class LogoutContainer extends Component {
	state = { collapsed: true, panel: [] }

	componentWillMount() {
		this.setState({
			collapsed: true,
			panel: [],
		})
	}

	toggle = () => {
		this.setState({ collapsed: !this.state.collapsed })
	}

	render() {
		const { collapsed, panel } = this.state

		return (
			<div className={styles.relative}>
				<div className={styles.logoutContainer} onClick={this.toggle}>
					<Avatar src={this.props.user.avatar} role="presentation" />
				</div>
				<Collapse animate={false} collapsed={collapsed}>
					<div className={styles.wrapper}>
						<div className={styles.caret} />
						<div className={styles.caretOverlay} />
						<Flex position="relative" className={styles.container}>
							<img src={this.props.user.avatar} />
							<Flex direction="column" padding="1rem">
								<Text
									type="span"
									color="black"
									size="base"
									weight="black"
								>
									{this.props.user.name}
								</Text>
								<Text
									type="span"
									color="neutral4"
									weight="heavy"
									size="xSmall"
									margin="1rem"
								>
									{this.props.user.email}
								</Text>
								<Button
									weight="heavy"
									renderAs="button"
									onClick={this.props.onClick}
								>
									Sign Out
								</Button>
							</Flex>
						</Flex>
					</div>
				</Collapse>
			</div>
		)
	}
}
