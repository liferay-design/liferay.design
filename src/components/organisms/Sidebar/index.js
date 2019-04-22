import { Link, SiteName } from 'components/atoms'
import { Accordion, SiteCredits } from 'components/molecules'
import { map, orderBy } from 'lodash'
import React from 'react'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const SidebarContent = ({ path, tree }) => {
	const unorderedTree = map(tree, node => {
		const className = `${styles.leafLink} ${
			node.slug === path ? styles.active : ''
		} ${node.firstLevel ? styles.firstLevelNode : ''}`

		if (node.hasOwnProperty('children')) {
			return (
				<Accordion
					className={className}
					key={node.order}
					open={path.includes(node.title)}
					title={node.title}
				>
					<SidebarContent path={path} tree={node.children} />
				</Accordion>
			)
		}

		return (
			<Link className={className} key={node.order} to={node.slug}>
				{node.title}
			</Link>
		)
	})

	return orderBy(unorderedTree, 'key', 'asc')
}

export default function SidebarWrapper({
	path,
	tree,
	isMobile,
	showSidebar,
	section,
	lexicon,
}) {
	return (
		<Grid
			columns="1fr"
			rows={`${isMobile ? '8rem' : '12rem auto 8rem'}`}
			className={`${styles.sidebar} ${
				isMobile && showSidebar ? styles.onScreen : ''
			} ${isMobile && !showSidebar ? styles.offScreen : ''} ${
				lexicon ? styles.lexicon : styles.sidebar
			}`}
		>
			{!isMobile && (
				<Grid.Item className={styles.section}>
					<SiteName section={section} dark />
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
