import React, { Component } from 'react'
import styles from './styles.module.scss'

class PrincipleCard extends React.Component {
	constructor(props) {
	  super(props);
  
	  // Must initialize state first
	  this.state = { condition: false };
	}
  
	handleClick() {
	  // Toggle state when button is clicked
	  this.setState({
		condition: !this.state.condition
	  }, function() {
		// setState is asynchronous! This function gets called
		// when it's finished.
		console.log("buttn's clicked");
	  });
	}

	getQuestionsList(questions) {
		if (!questions || questions.length < 1) {
			return;
		}
		const listItems = questions.map((question) =>
			<li>{question}</li>
		);
		return (
			<ul>{listItems}</ul>
		);
	}
  
	render() {
		const questionsList = this.getQuestionsList(this.props.questions);
		
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
						{questionsList}
					</div>
					
					<div className={styles.toggleButton}>
						<button onClick={this.handleClick.bind(this)}>
							toggle
						</button>
					</div>
					{/* <a className={styles.untoggleButton}>
						👈
					</a> */}
				</div>
	  );
	}
  }


export default PrincipleCard



