import React, { Component } from 'react'
import { CardGrid } from 'components/atoms'
import { Post } from 'components/molecules'
import postFeed from './post_feed'

class Posts extends Component {
	render() {
		return (
			<CardGrid>
				{postFeed.map(post => {
					return <Post key={post.id} post={post} />
				})}
			</CardGrid>
		)
	}
}

export default Posts
