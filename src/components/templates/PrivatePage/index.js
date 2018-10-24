import React, { Component } from 'react'
import { Media, Paper } from 'react-md'
import { AuthContainer } from 'components/molecules'
import { Button, Flex, Heading } from 'components/atoms'
import styles from './styles.module.scss'

export default class PrivatePage extends Component {
	state = {
		authLoaded: false,
	}

	componentDidMount() {
		const { auth } = require('utils')

		this.auth = auth

		this.setState({ authLoaded: true })
	}

	renderPrivateContent() {
		// if (this.auth.currentUser) {
		// 	return this.props.children
		// }

		const authenticatedUsers = ['liferay.com', 'triblio.com']
		const currentUser = this.auth.currentUser

		const isUserAuthenticated =
			currentUser &&
			authenticatedUsers.some(user => {
				return currentUser.email.includes(user)
			})

		if (isUserAuthenticated) {
			return this.props.children
		}

		return (
			<Flex
				className={styles.wrapper}
				height="100vh"
				width="100vw"
				justify="center"
				align="center"
			>
				<Flex
					className={styles.card}
					margin="0 0 2rem"
					padding="2rem 2rem 2.4rem"
					justify="center"
					align="center"
				>
					<Flex direction="column">
						<Heading margin="2rem">{this.props.message}</Heading>
						<Button className={styles.loginButton}>
							<AuthContainer />
						</Button>
					</Flex>
				</Flex>
			</Flex>
		)
	}

	render() {
		return (
			<div>
				{this.state.authLoaded ? (
					this.renderPrivateContent()
				) : (
					<Paper>
						<Media src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
					</Paper>
				)}
			</div>
		)
	}
}
