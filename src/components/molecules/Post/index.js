import React from 'react'
import { Avatar, Card, CardText, CardTitle, Media } from 'react-md'
import styles from './styles.module.scss'

class Post extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			thumbnailUrl: props.post.thumbnailUrl,
			detailImageUrl: props.post.detailImageUrl,
		}
	}

	render() {
		return (
			<a className={styles.externalLink} href={this.props.post.link} target="new">
				<Card className={styles.card}>
					<Media aspectRatio="4-3" className={styles.image}>
						<img src={this.state.thumbnailUrl} />
					</Media>
					<Avatar className={styles.avatar} src={this.state.detailImageUrl} />
					<div className={styles.copy}>
						<CardTitle
							className={styles.title}
							title={this.props.post.title}
						/>
						<CardText className={styles.text}>
							{this.props.post.preview}
						</CardText>
					</div>
				</Card>
			</a>
		)
	}
}

export default Post
