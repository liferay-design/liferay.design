import React from 'react'
import classes from './FeaturedPost.scss'
import postFeed from '../../Posts/post_feed'
import Post from '../../Posts/Post/Post'

export const FeaturedPost = () => {
	function getRandomPost(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}
	const featuredPost = getRandomPost(postFeed.length - 1)

	return <Post post={postFeed[featuredPost]} />
	// return (
	// 	<div
	// 		className={classes.banner}
	// 		style={{ backgroundImage: `url(/public/images/banner/${image}.jpg)` }}
	// 	/>
	// )
}

export default FeaturedPost
