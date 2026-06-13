import React from 'react'
import styles from './styles.module.scss'

const HeroBanner = () => (
	<div className={styles.heroBanner}>
		<h1 className={styles.headline}>
			<span className={styles.line}>
				<span className={styles.word}>We are </span>
			</span>
			<span className={styles.line}>
				<span className={`${styles.word} ${styles.accent}`}>
					Liferayʼs global team{' '}
				</span>
			</span>
			<span className={styles.line}>
				<span className={styles.word}>
					of designers.
					<span className={styles.bar} />
				</span>
			</span>
		</h1>
	</div>
)

export default HeroBanner
