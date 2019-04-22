import React from 'react'
import Plx from 'react-plx'
import styles from './styles.module.scss'

class PrincipleCard extends React.Component {
	constructor(props) {
		super(props)

		// Must initialize state first
		this.state = { condition: false }
	}

	handleClick() {
		// Toggle state when button is clicked
		this.setState({
			condition: !this.state.condition,
		})
	}

	getDescriptorsList(descriptors) {
		if (!descriptors || descriptors.length < 1) {
			return
		}
		const listItems = descriptors.map(descriptor => <li>{descriptor}</li>)
		return <ul>{listItems}</ul>
	}

	getQuestionsList(questions) {
		if (!questions || questions.length < 1) {
			return
		}
		const listItems = questions.map(question => <li>{question}</li>)
		return <ul>{listItems}</ul>
	}

	render() {
		const questionsList = this.getQuestionsList(this.props.questions)
		const descriptorsList = this.getDescriptorsList(this.props.descriptors)

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
				<div
					className={
						this.state.condition
							? [styles.card, styles.showQuestions].join(' ')
							: styles.card
					}
				>
					<div className={styles.lightColorWipe}>&nbsp;</div>
					<div className={styles.cardContentPrinciple}>
						<img src={this.props.symbol} className={styles.shape} />
						<h3>{this.props.name}</h3>
						<p>{this.props.description}</p>
						{descriptorsList}
					</div>
					<div className={styles.cardContentQuestions}>
						<img src={this.props.symbol} className={styles.shape} />
						{questionsList}
					</div>

					<div className={styles.toggleButton}>
						<button onClick={this.handleClick.bind(this)}>
							<svg
								className={styles.downArrow}
								width="39"
								height="48"
								viewBox="0 0 39 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21.5587 1.03906C21.5587 0.470534 21.0978 0.00965071 20.5293 0.00965071C19.9608 0.00965071 19.4999 0.470534 19.4999 1.03906H21.5587ZM20.5293 44.9606H19.4999V47.4459L21.2572 45.6885L20.5293 44.9606ZM37.7278 29.2179C38.1298 28.8159 38.1298 28.1642 37.7278 27.7621C37.3258 27.3601 36.674 27.3601 36.272 27.7621L37.7278 29.2179ZM19.4999 1.03906V44.9606H21.5587V1.03906H19.4999ZM21.2572 45.6885L37.7278 29.2179L36.272 27.7621L19.8014 44.2327L21.2572 45.6885Z"
									fill="#0B63CE"
								/>
								<path
									d="M14.7576 40.8219C15.1483 41.2349 15.1302 41.8865 14.7172 42.2772C14.3042 42.6679 13.6526 42.6498 13.2619 42.2367L14.7576 40.8219ZM1.25213 29.5407C0.861434 29.1276 0.879532 28.4761 1.29255 28.0854C1.70557 27.6947 2.3571 27.7128 2.7478 28.1258L1.25213 29.5407ZM13.2619 42.2367L1.25213 29.5407L2.7478 28.1258L14.7576 40.8219L13.2619 42.2367Z"
									fill="#3B3945"
								/>
							</svg>
						</button>
					</div>
				</div>

				<Plx className={this.props.plxSide} parallaxData={PlxUp3}>
					<img src={this.props.plxElement} />
				</Plx>
			</section>
		)
	}
}

export default PrincipleCard
