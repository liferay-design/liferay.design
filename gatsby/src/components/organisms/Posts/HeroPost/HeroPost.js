import { Heading } from 'components/atoms'

import React from 'react'
import classes from './HeroPost.module.scss'

class HeroPost extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			heroUrl: props.post.heroUrl,
			detailImageUrl: props.post.detailImageUrl,
		}
	}

	render() {
		return (
			<a className={classes.linkContainer} href={this.props.post.link} target="new">
				<figure className={classes.postContainer}>
					<div>
						<img className={classes.postHero} src={this.state.heroUrl} />
					</div>
					<div className={classes.postData}>
						<Heading level={1}>{this.props.post.title}</Heading>
						<img className={classes.headshot} src={this.state.detailImageUrl} />
						<figcaption>{this.props.post.category}</figcaption>
					</div>
				</figure>
			</a>
		)
	}
}

export default HeroPost
