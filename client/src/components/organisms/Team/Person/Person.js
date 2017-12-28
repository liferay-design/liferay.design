import React from 'react'
import classes from './Person.scss'

class Person extends React.Component {
	constructor(props) {
		super(props)
	}

	onPersonMouseOver(e) {}

	render() {
		return (
			<figure onMouseOver={this.onPersonMouseOver} className={classes.personContainer}>
				<img src={this.props.person.imageUrl} />
				<figcaption>{this.props.person.name}</figcaption>
			</figure>
		)
	}
}

export default Person
