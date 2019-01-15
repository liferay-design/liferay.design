import React, { Component } from 'react'
import styles from './styles.module.scss'

const PrinciplesHeader = () => {
	return (
		<div className={styles.circleHeader}>
			<img src="/images/principles/principles-badge.svg" className={styles.headerBadge} />
			<div className={styles.headerText}>
				<h4>Liferay</h4>
				<h1>Design Principles</h1>
				<p>
					Ut facilisis, lacus non hendrerit iaculis, ipsum dolor varius ligula,
					eu lobortis orci sem accumsan justo. Proin in justo eget sem porta
					tincidunt. Maecenas sapien tellus.
				</p>
			</div>
		</div>
	)
}

export default PrinciplesHeader
