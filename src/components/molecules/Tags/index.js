import { Link } from 'components/atoms'
import React from 'react'
import { colors, fontSizes, fontWeights } from 'theme'
const { kebabCase } = require(`lodash`)


const Tags = ({ tags }) => {
	if (!tags) return null
	const tagLinks = tags.map((tag, i) => {
		const divider = i < tags.length - 1 && <span>{` `}</span>
		return (
			<span key={tag}>
				<Link 
					style = {{
						background:colors.black,
						borderRadius:fontSizes.micro,
						padding:fontSizes.micro,
						textTransform:"uppercase",
						color:colors.lightGrey,
						fontWeight:fontWeights.black,
						letterSpacing:"1px",
						fontSize:fontSizes.small,
					}} 
					to={`/tags/${kebabCase(tag.toLowerCase())}`}>{tag}
				</Link>
				{divider}
			</span>
		)
	})
	return (
		<span>
			{tagLinks}
		</span>
	)
}

export default Tags
