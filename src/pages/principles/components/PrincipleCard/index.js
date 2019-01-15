import React, { Component } from 'react'
import styles from './styles.module.scss'

function PrincipleCard(props) {

	return (
		<div className={styles.pagestyles}>
			<div className={styles.card}>
				<div className={styles.lightColorWipe}>&nbsp;</div>
				<div className={styles.cardContentPrinciple}>
					<img src={props.symbol} className={styles.shape} />
					<h3>{props.name}</h3>
					<p>
						{props.description}
					</p>
					<ul>
						<li>{props.wordOne}</li>
						<li>{props.wordTwo}</li>
						<li>{props.wordThree}</li>
					</ul>
				</div>
				<div className={styles.cardContentQuestions}>
					<img src={props.symbol} className={styles.shape} />
					<ul>
						<li>{props.questionOne}</li>
						<li>{props.questionTwo}</li>
						<li>{props.questionThree}</li>
						<li>{props.questionFour}</li>
						<li>{props.questionFive}</li>
					</ul>
				</div>
				<a className={styles.toggleButton} id="toggle">
					👉
				</a>
				<a className={styles.untoggleButton} id="untoggle">
					👈
				</a>
			</div>
		</div>
	)
}

export default PrincipleCard
