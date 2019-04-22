import { Icon, Link } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const PrinciplesHeader = () => {
	return (
		<div className={styles.circleHeader}>
			<Link to="/resources">
				<Icon className={styles.headerBadge} name="liferayDesicon" width="4rem" />
			</Link>
			<div className={styles.headerText}>
				{/* is this necessary? we have the waffle above <h4>Liferay</h4> */}
				<h1>Design Principles</h1>
				{/*
				<p>
					We seek to produce good design.
				</p> */}
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
