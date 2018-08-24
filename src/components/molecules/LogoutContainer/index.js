import React, { Component } from 'react'
import { Button, Image, Transition } from 'semantic-ui-react'
import styles from './styles.module.scss'

export default class LogoutContainer extends Component {
	state = {
		dropdownOpen: false,
	}

	toggleDropdown = () => this.setState({ dropdownOpen: !this.state.dropdownOpen })

	render() {
		return (
			<div className={styles.logoutContainer} onClick={this.toggleDropdown}>
				<Image src={this.props.user.avatar} avatar />

				<Transition visible={this.state.dropdownOpen} animation="scale">
					<div>
						<div className={styles.profile}>
							<Image src={this.props.user.avatar} avatar size="tiny" />

							<div>
								<span>{this.props.user.name}</span>
								<span>{this.props.user.email}</span>

								<Button primary onClick={this.props.onClick}>
									Sign Out
								</Button>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		)
	}
}
