import React, { Component } from 'react'
import styles from './styles.module.scss'

const PrinciplesHeader = () => {
	return (
		<div className={styles.circleHeader}>
			<img src="/images/logos/liferay-waffle-white.svg" className={styles.headerBadge} />
			<div className={styles.headerText}>
				{/* is this necessary? we have the waffle above <h4>Liferay</h4> */} 
				<h1>Design Principles</h1>
				
				<p>
					We seek to produce good design. 
				</p>
				<p>
					These principles guide our work, and provide standards for what good design means at Liferay.
				</p>
			</div>
		</div>
	)
}

export default PrinciplesHeader

// TODO: abstract this content out to props