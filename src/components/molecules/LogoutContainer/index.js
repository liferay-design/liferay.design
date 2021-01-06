import { Button, Flex, Text, Image } from 'components/atoms'
import React, { Component } from 'react'
import { Avatar } from 'theme-ui'
import styles from './styles.module.scss'

export default class LogoutContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showChildren: props.open,
		}
	}

	toggle = () => {
		this.setState({ showChildren: !this.state.showChildren })
	}

	render() {
		return (
			<div className={styles.relative}>
				<div className={styles.logoutContainer} onClick={this.toggle}>
					<Avatar
						src={this.props.user.avatar}
						sx={{ variant: 'images.avatar.small' }}
					/>
				</div>
				<div className={this.state.showChildren ? styles.visible : styles.hidden}>
					<div className={styles.wrapper}>
						<div className={styles.caret} />
						<div className={styles.caretOverlay} />
						<Flex position="relative" className={styles.container}>
							<Image
								sx={{ height: '100%', width: '100%' }}
								alt={this.props.user.name}
								external
								src={this.props.user.avatar}
							/>
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
									textColor="black"
									weight="heavy"
									renderAs="button"
									onClick={this.props.onClick}
								>
									Sign Out
								</Button>
							</Flex>
						</Flex>
					</div>
				</div>
			</div>
		)
	}
}
