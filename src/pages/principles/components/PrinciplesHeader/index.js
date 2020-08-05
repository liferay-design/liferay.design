import { Icon, Link } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const PrinciplesHeader = () => {
	return (
		<div className={styles.circleHeader}>
			<Link to="/resources">
				<Icon
					className={styles.headerBadge}
					sx={{ fill: 'white' }}
					name="liferayDesicon"
				/>
			</Link>
			<div className={styles.headerText}>
				<h1>Design Principles</h1>
				<p>
					These principles guide our work, and provide standards for what good
					design means at Liferay.
				</p>
			</div>
		</div>
	)
}

export default PrinciplesHeader

// TODO: abstract this content out to props
