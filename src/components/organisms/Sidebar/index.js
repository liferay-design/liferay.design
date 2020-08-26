/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { Link, SiteName } from 'components/atoms'
import { Accordion, SiteCredits, SearchInput } from 'components/molecules'
import { map, orderBy } from 'lodash'
import styles from './styles.module.scss'

const SidebarContent = ({ path, tree }) => {
	const unorderedTree = map(tree, node => {
		const className = `
		${styles.leafLink}
		${node.slug === path ? styles.active : ''} ${
			node.firstLevel ? styles.firstLevelNode : ''
		}`

		if (node.hasOwnProperty('children')) {
			return (
				<Accordion
					className={className}
					key={node.order}
					open={path
						.toLowerCase()
						.includes(node.title.toLowerCase().replace(/ /g, '-'))}
					title={node.title}
					parentLink={node.slug}
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
	const className = `
		${styles.sidebar} 
		${isMobile && showSidebar ? styles.onScreen : ''} 
		${isMobile && !showSidebar ? styles.offScreen : ''} 
		${lexicon ? styles.lexicon : styles.sidebar}
		${section === 'Handbook' ? styles.handbook : ''}
	`

	return (
		<Grid
			sx={{
				gridTemplateColumns: '1fr',
				gridTemplateRows: ['8rem', null, '12rem auto 8rem'],
				gap: 0,
			}}
			className={className}
		>
			{!isMobile && (
				<div className={styles.section}>
					<SiteName section={section} dark />
				</div>
			)}

			<div className={styles.sidebarContentWrapper}>
				{lexicon && (
					<SearchInput id='lexicon_search' />
				)}
				<SidebarContent path={path} tree={tree} />
			</div>

			{!isMobile && (
				<div className={styles.credits}>
					<SiteCredits />
				</div>
			)}
		</Grid>
	)
}
