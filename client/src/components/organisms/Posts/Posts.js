import { Flex, Heading, Text } from 'components/atoms'
import React, { Component } from 'react'

import Post from './Post/Post'
import classes from './Posts.scss'
import postFeed from './post_feed'

class Posts extends Component {
	constructor(props) {
		super(props)

		this.state = {
			postFeed,
		}
	}
	render() {
		return (
			<div className={classes.postFeed} id="posts">
				<Flex justify="center" flexWrap="wrap">
					{this.state.postFeed.map(post => {
						return <Post key={post.id} post={post} />
					})}
				</Flex>
			</div>
		)
	}
}

export default Posts
