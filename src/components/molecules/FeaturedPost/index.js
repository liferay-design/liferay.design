import postFeed from 'components/organisms/Posts/post_feed'
import React from 'react'
import HeroPost from '../HeroPost'

export const FeaturedPost = () => {
	function getRandomPost(max) {
		return Math.floor(Math.random() * Math.floor(max))
	}
	const featuredPost = getRandomPost(postFeed.length - 1)

	// featuring product designer opening effecitve Jan 31, 2019
	return <HeroPost post={postFeed[3]} />
	// this is the original post randomizer
	// return <HeroPost post={postFeed[featuredPost]} />
}

export default FeaturedPost
