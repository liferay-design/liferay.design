import React, { Component } from 'react'
import styles from './styles.module.scss'
import { ListItem } from 'react-md'
import { Accordion } from 'components/molecules'
import { map } from 'lodash'
import { Link } from 'gatsby'

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
				<ListItem
					active={node.slug === path}
					as="section"
					primaryText={node.title}
				/>
			</Link>
		)
	})
}

export default class SidebarWrapper extends Component {
	render() {
		return (
			<div className={styles.sidebarWrapper}>
				<SidebarContent path={this.props.path} tree={this.props.tree} />
			</div>
		)
	}
}
