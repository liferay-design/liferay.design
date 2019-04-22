import { Icon } from 'components/atoms'
import { Link, withPrefix } from 'gatsby'
import React from 'react'
import { Avatar, Card, CardText, CardTitle, Media } from 'react-md'
import styles from './styles.module.scss'

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
			<Link className={styles.cardLink} to={this.props.person.page}>
				<Card
					onMouseEnter={this.onPersonMouseEnter.bind(this)}
					onMouseLeave={this.onPersonMouseLeave.bind(this)}
					className={styles.card}
				>
					<Media aspectRatio="4-3" className={styles[this.props.person.page]}>
						<img src={withPrefix(this.state.imageUrl)} />
					</Media>
					<Avatar
						className={styles.avatar}
						icon={
							<Icon
								fill="white"
								height="2rem"
								width="2rem"
								name={this.props.person.icon}
							/>
						}
					/>
					<div className={styles.copy}>
						<CardTitle
							className={styles.title}
							title={this.props.person.name}
						/>
						<CardText className={styles.text}>
							{this.props.person.title}
						</CardText>
					</div>
				</Card>
			</Link>
		)
	}
}

export default Person
