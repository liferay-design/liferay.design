import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Grid } from 'reakit'
import { SiteName } from 'components/atoms'
import { Accordion, SiteCredits } from 'components/molecules'
import map from 'lodash/map'
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

export default function SidebarWrapper({ path, tree, isMobile, showSidebar }) {
	return (
		<Grid
			columns="1fr"
			rows={`${isMobile ? '8rem' : '12rem auto 8rem'}`}
			className={`${styles.sidebar} ${
				isMobile && showSidebar ? styles.onScreen : ''
			} ${isMobile && !showSidebar ? styles.offScreen : ''}`}
		>
			{!isMobile && (
				<Grid.Item>
					<SiteName section="Blueprints" dark />
				</Grid.Item>
			)}

			<Grid.Item className={styles.sidebarContentWrapper}>
				<SidebarContent path={path} tree={tree} />
			</Grid.Item>

			{!isMobile && (
				<Grid.Item className={styles.credits}>
					<SiteCredits />
				</Grid.Item>
			)}
		</Grid>
	)
}
