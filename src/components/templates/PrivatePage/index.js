import { firebase } from '@firebase/app'
import { Button, Flex, Heading } from 'components/atoms'
import { AuthContainer } from 'components/molecules'
import React, { Component } from 'react'
import { Media, Paper } from 'react-md'
import styles from './styles.module.scss'

export default class PrivatePage extends Component {
	state = {
		user: null,
	}

	componentDidMount() {
		this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setUser(user)
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	setUser = user => {
		this.setState({
			user: user
				? { email: user.email, avatar: user.photoURL, name: user.displayName }
				: null,
		})
	}

	renderPrivateContent() {
		const authenticatedUsers = ['liferay.com', 'triblio.com', 'kyrodigital.com']
		const currentUser = this.state.user

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
				{this.state.user ? (
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
