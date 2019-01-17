import React, { Component } from 'react'
import styles from './styles.module.scss'

class PrincipleCard extends React.Component {
	constructor(props) {
	  super(props);
  
	  // Must initialize state first
	  this.state = { condition: false };
	}
  
	handleClick() {
	  // Increment the count when the button is clicked
	  this.setState({
		condition: !this.state.condition
	  }, function() {
		// setState is asynchronous! This function gets called
		// when it's finished.
		console.log("buttn's clicked");
	  });
	}
  
	render() {
	  return (
		<div className={this.state.condition ? ([styles.card, styles.showQuestions].join(' ')) : (styles.card)}>
					<div className={styles.lightColorWipe}>&nbsp;</div>
					<div className={styles.cardContentPrinciple}>
						<img src={this.props.symbol} className={styles.shape} />
						<h3>{this.props.name}</h3>
						<p>
							{this.props.description}
						</p>
						<ul>
							<li>{this.props.wordOne}</li>
							<li>{this.props.wordTwo}</li>
							<li>{this.props.wordThree}</li>
						</ul>
					</div>
					<div className={styles.cardContentQuestions}>
						<img src={this.props.symbol} className={styles.shape} />
						<ul>
							<li>{this.props.questionOne}</li>
							<li>{this.props.questionTwo}</li>
							<li>{this.props.questionThree}</li>
							<li>{this.props.questionFour}</li>
							<li>{this.props.questionFive}</li>
						</ul>
					</div>
					
					<div className={styles.toggleButton} id="toggle">
						<button onClick={this.handleClick.bind(this)}>
							toggle
						</button>
					</div>
					<a className={styles.untoggleButton} id="untoggle">
						👈
					</a>
				</div>
	  );
	}
  }


export default PrincipleCard



