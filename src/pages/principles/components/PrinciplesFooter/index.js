import React, { Component } from 'react'
import styles from './styles.module.scss'

const PrinciplesFooter = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerBadgeOuterCircle}>
				<div className={styles.footerBadgeCircle}>
					<img src="/images/principles/principles-badge-words.svg" className={styles.footerBadge} />
				</div>
			</div>
			<div className={styles.footerLowerCircle}></div>
		</div>
	)
}

export default PrinciplesFooter
