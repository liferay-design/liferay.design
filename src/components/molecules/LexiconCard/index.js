import { withPrefix, Link } from 'gatsby'
import React from 'react'
import styles from './styles.module.scss'
import { Avatar, Card, CardTitle, CardText, Media, FontIcon } from 'react-md'

class LexiconCard extends React.Component {

	render() {
		return (
			<Link className={styles.cardLink} to="/">
				<Card className={styles.card} >
					<Media aspectRatio="4-3" className={styles.image}><img src={withPrefix(this.state.imageUrl)} /></Media>
					<Avatar className={styles.avatar} icon={<FontIcon iconClassName={this.props.person.icon} />} />
					<div className={styles.copy}>
						<CardTitle className={styles.title} >{this.props.person.name}</CardTitle>
						<CardText className={styles.text} >{this.props.person.title}</CardText>
					</div>
				</Card>
			</Link>
		)
	}
}

export default LexiconCard
