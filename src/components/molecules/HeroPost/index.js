import { Heading } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'
import { Flex } from 'components/atoms'

class HeroPost extends React.Component {

	render() {
		return <a href={this.props.post.link} target="new">
				<Flex justify="center" align="center" className={styles.banner}>
					<Heading color="white" level={1}>{this.props.post.title}
					<img className={styles.headshot} src={this.props.post.detailImageUrl} />
					</Heading>
					<img className={styles.postHero} src={this.props.post.heroUrl} />
					<div className={styles.postData}>
						<figcaption>{this.props.post.category}</figcaption>
					</div>
				</Flex>
			</a>
	}
}

export default HeroPost
