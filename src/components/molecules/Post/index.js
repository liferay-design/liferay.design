import React from 'react'
import styles from './styles.module.scss'
import { Avatar, Card, CardTitle, CardText, Media } from 'react-md'
import { Link } from 'gatsby'

class Post extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			thumbnailUrl: props.post.thumbnailUrl,
			detailImageUrl: props.post.detailImageUrl,
		}
	}

	render() {
		return <Link className={styles.cardLink} to={this.props.post.link} target="new">
				<Card className={styles.card}>
					<Media aspectRatio="4-3" className={styles.image}>
						<img src={this.state.thumbnailUrl} />
					</Media>
					<Avatar className={styles.avatar} src={this.state.detailImageUrl} />
					<div className={styles.copy}>
						<CardTitle className={styles.title} title={this.props.post.title} />
						<CardText className={styles.text}>
							{this.props.post.preview}
						</CardText>
					</div>
				</Card>
			</Link>
	}
}

export default Post
