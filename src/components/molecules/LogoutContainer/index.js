import React, { Component } from 'react'
import { Button, Avatar, Collapse, Paper } from 'react-md'
import styles from './styles.module.scss'

export default class LogoutContainer extends Component {
	state = { collapsed: true, panel: [] }

	componentWillMount() {
		this.setState({
		  collapsed: true,
		  panel: [],
		});
	  }
	
	  toggle = () => {
		this.setState({ collapsed: !this.state.collapsed });
	  };
	
	  render() {
		const { collapsed, panel } = this.state;
	
		return (
		  <div>
			<div className={styles.logoutContainer} onClick={this.toggle}>
				<Avatar src={this.props.user.avatar} role="presentation" />
			</div>
			<Collapse collapsed={collapsed}>
					<Paper className={styles.profile}>
						<div>
							<span>{this.props.user.name}</span>
							<span>{this.props.user.email}</span>

							<Button flat onClick={this.props.onClick}>
								Sign Out
							</Button>
						</div>
					</Paper>
				</Collapse>
		  </div>
		);
	  }
	}