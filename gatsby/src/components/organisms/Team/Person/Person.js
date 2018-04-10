import { withPrefix } from 'gatsby-link'

import { Flex } from 'components/atoms'

import React from 'react'
import classes from './Person.module.scss'

class Person extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			imageUrl: props.person.imageUrl,
		}
	}

	onPersonMouseEnter(e) {
		this.setState({ imageUrl: this.props.person.imageHoverUrl })
	}

	onPersonMouseLeave(e) {
		this.setState({ imageUrl: this.props.person.imageUrl })
	}

	render() {
		return (
			<figure
				onMouseEnter={this.onPersonMouseEnter.bind(this)}
				onMouseLeave={this.onPersonMouseLeave.bind(this)}
				className={classes.personContainer}
			>
				<Flex className={classes.headshotContainer} direction="column" align="center">
					<img src={withPrefix(this.state.imageUrl)} />
					<figcaption>{this.props.person.name}</figcaption>
				</Flex>
			</figure>
		)
	}
}

export default Person
