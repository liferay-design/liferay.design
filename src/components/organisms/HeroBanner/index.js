import React from 'react'
import styles from './styles.module.scss'

const HeroBanner = () => (
	<div className={styles.heroBanner}>
		<h1 className={styles.headline}>
			<span className={styles.line}>
				<span className={styles.word}>
					We are <span className={styles.accent}>Liferayʼs</span>
				</span>
			</span>
			<span className={styles.line}>
				<span className={styles.word}>
					<span className={styles.accent}>global team</span> of
				</span>
			</span>
			<span className={styles.line}>
				<span className={styles.word}>
					designers.
					<span className={styles.bar} />
				</span>
			</span>
		</h1>
	</div>
)

export default HeroBanner
