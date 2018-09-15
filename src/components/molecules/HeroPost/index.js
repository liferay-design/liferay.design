import { Heading } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

class HeroPost extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			postLink: props.post.link,
			heroUrl: props.post.heroUrl,
			heroTitle: props.post.title,
			detailImageUrl: props.post.detailImageUrl,
			heroCategory: props.post.category,
		}
	}

	render() {
		return (
			<a className={styles.linkContainer} href={this.state.postLink} target="new">
				<figure className={styles.postContainer}>
					<div className={styles.imgOverlay}>
						<img className={styles.postHero} src={this.state.heroUrl} />
					</div>

					<div className={styles.postData}>
						<Heading level={1}>{this.state.heroTitle}</Heading>

						<img
							className={styles.headshot}
							src={this.state.detailImageUrl}
						/>
						<figcaption>{this.state.heroCategory}</figcaption>
					</div>
				</figure>
			</a>
		)
	}
}

export default HeroPost
