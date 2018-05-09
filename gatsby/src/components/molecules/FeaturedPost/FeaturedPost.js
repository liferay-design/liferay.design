import React from 'react'
import classes from './FeaturedPost.scss'
import postFeed from '../../organisms/Posts/post_feed'
import HeroPost from '../../organisms/Posts/HeroPost/HeroPost'

export const FeaturedPost = () => {
	function getRandomPost(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}
	const featuredPost = getRandomPost(postFeed.length - 1)

	return <HeroPost post={postFeed[featuredPost]} />
}

export default FeaturedPost
