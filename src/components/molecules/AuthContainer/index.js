import { firebase } from '@firebase/app'
import { Button } from 'components/atoms'
import { LogoutContainer } from 'components/molecules'
import 'firebase/auth'
import { navigate } from 'gatsby'
import React, { Component } from 'react'
import styles from './styles.module.scss'

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
			<Button
				backgroundColor="transparent"
				className={styles.login}
				onClick={this.login}
			>
				Sign In
			</Button>
		)
	}
}
