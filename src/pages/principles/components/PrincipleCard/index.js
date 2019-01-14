import React, { Component } from 'react'
import styles from './styles.module.scss'


// class ShowQuestions extends React.Component {
//     constructor(props) {    
//       super(props)
//       this.state = {
//         condition: false
//       }
//       this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() {
//       this.setState({
//         condition: !this.state.condition
//       })
//     }
//     render() {
//       return (
//         <ButtonChild        
//           className={ this.state.condition ? "button toggled" : "button" }
//           toggleClassName={ this.handleClick }
//         >
//           Click me if you dare!
//         </ButtonChild>
//       )
//     }
//   }

const PrincipleCard = () => {

    // function ShowQuestions() {
    //     function handleClick(e) {
    //       e.preventDefault();
    //       console.log('The link was clicked.');
    //     }
    // }

	return (
		<div className={styles.pagestyles}>
			<div className={styles.card}>
				<div className={styles.lightColorWipe}>&nbsp;</div>
				<div className={styles.cardContentPrinciple}>
					<div className={styles.shape}>&nbsp;</div>
					<h3>Principle</h3>
					<p>
						Now... who messes with the blowfish, Jesse? You're damn right. You
						are a blowfish. Say it again. Say it like you mean it.
					</p>
					<ul>
						<li>Word</li>
						<li>Werd</li>
						<li>Wurd</li>
					</ul>
				</div>
				<div className={styles.cardContentQuestions}>
					<div className={styles.shape}>&nbsp;</div>
					<ul>
						<li>This is a question?</li>
						<li>This is a longer question?</li>
						<li>
							This is the longest of all the questions in this list of
							questions?
						</li>
						<li>This is almost the longest question?</li>
						<li>This is a question?</li>
					</ul>
				</div>
				<a className={styles.toggleButton}>
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
