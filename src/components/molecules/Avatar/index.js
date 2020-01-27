import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, Link } from 'components/atoms'
const { kebabCase } = require(`lodash`)

export default ( {name, guest, ...props} ) => {
	const data = useStaticQuery(graphql`
		{
            allAuthorsYaml {
                edges {
                    node {
                        id
                    }
                }
            }
        }
	`)

	const person = data.allAuthorsYaml.edges
		.filter(edges => edges.node.id === name)
		.map(({ node }) => (
			<Link to={'/team/' + `${kebabCase(node.id)}`}>
				<div style={{ width: '3rem' }}>
					<Image circle src={'/images/headshots/' + kebabCase(node.id) + '.jpg'} />
				</div>
			</Link>
		))

	return (
        <div>{person}</div>
	)}

