import { Heading } from 'components/atoms'

import React from 'react'
import classes from './Post.module.scss'

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
			<a className={classes.linkContainer} href={this.props.post.link} target="new">
				<figure className={classes.postContainer}>
					<div className={classes.postThumbnail}>
						<img src={this.state.thumbnailUrl} />
					</div>
					<div className={classes.postData}>
						<img src={this.state.detailImageUrl} />
						<Heading level={2}>{this.props.post.title}</Heading>
						<figcaption>{this.props.post.preview}</figcaption>
					</div>
				</figure>
			</a>
		)
	}
}

export default Post
