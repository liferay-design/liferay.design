import { Heading } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

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
			<a className={styles.linkContainer} href={this.props.post.link} target="new">
				<figure className={styles.postContainer}>
					<div className={styles.imgOverlay}>
						<img className={styles.postHero} src={this.state.heroUrl} />
					</div>

					<div className={styles.postData}>
						<Heading level={1}>{this.props.post.title}</Heading>

						<img
							className={styles.headshot}
							src={this.state.detailImageUrl}
						/>
						<figcaption>{this.props.post.category}</figcaption>
					</div>
				</figure>
			</a>
		)
	}
}

export default HeroPost
