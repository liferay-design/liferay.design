import React, { Component } from 'react'
import styles from './styles.module.scss'
import { Link } from 'gatsby'

const PrinciplesFooter = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerBadgeOuterCircle}>
				<Link to="/">
					<div className={styles.footerBadgeCircle}>
						<img
							src="/images/principles/principles-waffle-badge.svg"
							className={styles.footerBadge}
						/>
					</div>
				</Link>
			</div>
			<div className={styles.footerLowerCircle} />
		</div>
	)
}

export default PrinciplesFooter
