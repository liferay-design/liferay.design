import React, { Component } from 'react'
import Plx from 'react-plx'
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
	  });
	}

	getDescriptorsList(descriptors) {
		if (!descriptors || descriptors.length < 1) {
			return;
		}
		const listItems = descriptors.map((descriptor) =>
			<li>{descriptor}</li>
		);
		return (
			<ul>{listItems}</ul>
		);
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
		const descriptorsList = this.getDescriptorsList(this.props.descriptors);

//parallax variables
	const PlxUp1 = [
		{
			start: 'self',
			duration: '200vh',
			properties: [
				{
					startValue: 50,
					endValue: -50,
					property: 'translateY',
				},
			],
		},
	]
	const PlxUp2 = [
		{
			start: 'self',
			duration: '200vh',
			properties: [
				{
					startValue: 100,
					endValue: -100,
					property: 'translateY',
				},
			],
		},
	]
	const PlxUp3 = [
		{
			start: 'self',
			duration: '200vh',
			properties: [
				{
					startValue: 150,
					endValue: -150,
					property: 'translateY',
				},
			],
		},
	]
	const PlxDown1 = [
		{
			start: 'self',
			duration: '200vh',
			properties: [
				{
					startValue: -50,
					endValue: 50,
					property: 'translateY',
				},
			],
		},
	]
	const PlxDown2 = [
		{
			start: 'self',
			duration: '200vh',
			properties: [
				{
					startValue: -100,
					endValue: 100,
					property: 'translateY',
				},
			],
		},
	]
	const PlxDown3 = [
		{
			start: 'self',
			duration: '200vh',
			properties: [
				{
					startValue: -150,
					endValue: 150,
					property: 'translateY',
				},
			],
		},
	]
		
	  return (
		<section className={styles.cardSection}>
			<div className={this.state.condition ? ([styles.card, styles.showQuestions].join(' ')) : (styles.card)}>
					<div className={styles.lightColorWipe}>&nbsp;</div>
					<div className={styles.cardContentPrinciple}>
						<img src={this.props.symbol} className={styles.shape} />
						<h3>{this.props.name}</h3>
						<p>
							{this.props.description}
						</p>
						{descriptorsList}
					</div>
					<div className={styles.cardContentQuestions}>
						<img src={this.props.symbol} className={styles.shape} />
						{questionsList}
					</div>
					
					<div className={styles.toggleButton}>
						<button onClick={this.handleClick.bind(this)}>
						<svg width="49" height="20" viewBox="0 0 49 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 17.4412C1.43147 17.4412 0.970588 17.9021 0.970588 18.4706C0.970588 19.0391 1.43147 19.5 2 19.5L2 17.4412ZM45.9216 18.4706L45.9216 19.5L48.4068 19.5L46.6495 17.7427L45.9216 18.4706ZM30.1789 1.27209C29.7769 0.870077 29.1251 0.870077 28.7231 1.27209C28.3211 1.6741 28.3211 2.32588 28.7231 2.7279L30.1789 1.27209ZM2 19.5L45.9216 19.5L45.9216 17.4412L2 17.4412L2 19.5ZM46.6495 17.7427L30.1789 1.27209L28.7231 2.7279L45.1937 19.1985L46.6495 17.7427Z" fill="#0B63CE"/>
						</svg>

						</button>
					</div>
				</div>

				<Plx className={this.props.plxSide} parallaxData={PlxUp3}>
					<img src={this.props.plxElement} />
				</Plx>

			</section>	
	  );
	}
  }


export default PrincipleCard



