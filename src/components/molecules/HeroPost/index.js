import { Flex, Heading } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

class HeroPost extends React.Component {
	render() {
		return (
			<Flex justify="center" align="center" className={styles.banner}>
				<a href={this.props.post.link}>
					<Heading color="white" level={1}>
						{this.props.post.title}
						<img
							className={styles.headshot}
							src={this.props.post.detailImageUrl}
						/>
					</Heading>
					<img className={styles.postHero} src={this.props.post.heroUrl} />
					<div className={styles.postData}>
						<figcaption>{this.props.post.category}</figcaption>
					</div>
				</a>
			</Flex>
		)
	}
}

export default HeroPost
