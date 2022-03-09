/** @jsx jsx */

import { jsx, NavLink } from 'theme-ui'
import { firebase } from '@firebase/app'
import { LogoutContainer } from 'components/molecules'
import 'firebase/auth'
import { navigate } from 'gatsby'
import { Component } from 'react'

// Not a security risk to expose key because we are not storing user data
// https://stackoverflow.com/a/37484053/6502003
const firebaseConfig = {
	apiKey: 'AIzaSyCfdCUvteXD-3XPbDVOgj9FYbN-GNLTjk0',
	authDomain: 'blueprints-5d81d.firebaseapp.com',
	databaseURL: 'https://blueprints-5d81d.firebaseio.com',
	projectId: 'blueprints-5d81d',
	storageBucket: 'blueprints-5d81d.appspot.com',
	messagingSenderId: '1001957931462',
}

firebase.initializeApp(firebaseConfig)

export default class AuthContainer extends Component {
	state = { user: null }

	componentDidMount() {
		this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setUser(firebase.auth().currentUser)
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	login = () => {
		const provider = new firebase.auth.GoogleAuthProvider()

		provider.setCustomParameters({
			prompt: 'select_account',
		})

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				this.setUser(result.user)
			})
			.catch(error => {
				console.error('error', error)
			})
	}

	setUser = user => {
		this.setState({
			user: user
				? { email: user.email, avatar: user.photoURL, name: user.displayName }
				: null,
		})
	}

	logout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				this.setUser(null)
				navigate('/')
			})
			.catch(error => {
				console.error('Sign out error', error)
			})
	}

	render() {
		return this.state.user ? (
			<LogoutContainer user={this.state.user} onClick={this.logout} />
		) : (
			<span onClick={this.login}>
				{this.props.children ? (
					this.props.children
				) : (
					<NavLink
						sx={{
							pr: 0,
							p: [1, null, 2],
							'&::after': { right: 0, bg: 'primary' },
						}}
						onClick={this.login}
					>
						Sign In
					</NavLink>
				)}
			</span>
		)
	}
}

// TODO clean up this component and make it more useful
// 1. Could probably use the isAuthenticated hook? or at least rewrite as a functional component https://johnwcassidy.medium.com/firebase-authentication-hooks-and-context-d0e47395f402
// 2. Abstract the styles — currently its styled so it fits into the nav, but it should be more generic so we can reuse it in more places
