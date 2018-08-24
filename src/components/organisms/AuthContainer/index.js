import React, { Component } from 'react'
import { LogoutContainer } from 'components/molecules'
import { navigate } from 'gatsby'
import styles from './styles.module.scss'

export default class AuthContainer extends Component {
	state = { user: null }

	componentDidMount() {
		// Because wedeploy references `window` we have to load auth in componentDidMount where it has access to `window`
		// https://next.gatsbyjs.org/docs/debugging-html-builds/#debugging-html-builds
		var { auth } = require('utils')

		this.auth = auth

		const user = auth.currentUser

		if (user) {
			this.setUser(user)
		}

		console.log('auth', auth)

		auth.onSignIn(user => {
			console.log('user', user)
			console.log('this', this)
			this.setUser(user)
		})
	}

	login = () => {
		var provider = new this.auth.provider.Google()

		provider.setProviderScope('email')

		this.auth.signInWithRedirect(provider)
	}

	setUser = user => {
		console.log('user', user)

		if (user) {
			this.setState({
				user: { email: user.email, avatar: user.photoUrl, name: user.name },
			})
		} else {
			this.setState({ user: null })
		}
	}

	logout = async () => {
		try {
			await this.auth.signOut()
			this.setUser(null)

			navigate('/')
		} catch (e) {
			console.log(`Error logging out ===> ${e}`)
		}
	}

	render() {
		return this.state.user ? (
			<LogoutContainer user={this.state.user} onClick={this.logout} />
		) : (
			<span className={styles.login} onClick={this.login}>
				Sign In
			</span>
		)
	}
}
