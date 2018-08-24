import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Menu } from 'semantic-ui-react'
import { Accordion } from 'components/molecules'
import { map } from 'lodash'
import { Link } from 'gatsby'
import Sidebar from 'react-sidebar'

const SidebarContent = ({ path, tree }) => {
	return map(tree, node => {
		if (node.hasOwnProperty('children')) {
			return (
				<Accordion
					key={node.title}
					slug={node.slug}
					path={path}
					title={node.title}
				>
					<SidebarContent path={path} tree={node.children} />
				</Accordion>
			)
		}

		return (
			<Link key={node.title} to={node.slug}>
				<Menu.Item active={node.slug === path} as="section" name={node.title} />
			</Link>
		)
	})
}

export default class SidebarWrapper extends Component {
	state = {
		sidebarDocked: false,
		sidebarOpen: false,
	}

	componentDidMount() {
		this.mql = window.matchMedia(`(min-width: 800px)`)

		this.mql.addListener(this.mediaQueryChanged)

		this.setState({ sidebarDocked: this.mql.matches })
	}

	componentWillUnmount() {
		this.mql.removeListener(this.mediaQueryChanged)
	}

	onSetSidebarOpen = open => {
		this.setState({ sidebarOpen: open })
	}

	mediaQueryChanged = () => {
		this.setState({ sidebarDocked: this.mql.matches, sidebarOpen: false })
	}

	render() {
		return (
			<Sidebar
				sidebar={
					<Menu as="aside" secondary vertical size="large">
						<SidebarContent path={this.props.path} tree={this.props.tree} />
					</Menu>
				}
				contentClassName={styles.sidebarContent}
				sidebarClassName={styles.sidebar}
				open={this.state.sidebarOpen}
				docked={this.state.sidebarDocked}
				onSetOpen={this.onSetSidebarOpen}
			>
				{this.props.children}
			</Sidebar>
		)
	}
}
