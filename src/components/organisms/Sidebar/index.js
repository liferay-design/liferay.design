import React, { Component } from 'react'
import styles from './styles.module.scss'
import { SiteName } from 'components/atoms'
import { Accordion } from 'components/molecules'
import { map } from 'lodash'
import { Link } from 'gatsby'

const SidebarContent = ({ path, tree }) => {
	return map(tree, node => {
		const className = `${styles.leafLink} ${
			node.slug === path ? styles.active : ''
		} ${node.firstLevel ? styles.firstLevelNode : ''}`

		if (node.hasOwnProperty('children')) {
			return (
				<Accordion
					className={className}
					key={node.title}
					link={node.slug}
					open={path.includes(node.title.toLowerCase())}
					title={node.title}
				>
					<SidebarContent path={path} tree={node.children} />
				</Accordion>
			)
		}

		return (
			<Link className={className} key={node.title} to={node.slug}>
				{node.title}
			</Link>
		)
	})
}

export default class SidebarWrapper extends Component {
	render() {
		return (
			<div className={styles.sidebar}>
				<div>
					<SiteName section="Blueprints" dark />
				</div>

				<div className={styles.sidebarContentWrapper}>
					<SidebarContent path={this.props.path} tree={this.props.tree} />
				</div>
			</div>
		)
	}
}
