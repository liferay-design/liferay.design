import React, { Component } from 'react'
import { Flex } from 'components/atoms'
import { Post } from 'components/molecules'
import classes from './Posts.module.scss'
import postFeed from './post_feed'

class Posts extends Component {
	render() {
		return (
			<div className={classes.postFeed} id="posts">
				<Flex justify="center" flexWrap="wrap">
					{postFeed.map(post => {
						return <Post key={post.id} post={post} />
					})}
				</Flex>
			</div>
		)
	}
}

export default Posts
