import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, Link, Text, Flex } from 'components/atoms'
const { kebabCase } = require(`lodash`)

export default ( {id, guest, ...props} ) => {
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

	const imagePath = '/images/headshots/'

	const author = data.allAuthorsYaml.edges
		.filter(edges => edges.node.id === id)
		.map(({ node }) => (
			<Flex {...props} align="center">
				<Link to={'/team/' + kebabCase(node.id)}>
					<div style={{ marginRight: '.5rem', width: '3rem' }}>
						<Image circle src={imagePath + kebabCase(node.id) + '.jpg'} />
					</div>
				</Link>
				<Text size="medium" color="grey">
					by {''}
					<Link to={'/team/' + kebabCase(node.id)}>{id}</Link>
				</Text>
			</Flex>
		))

	return (
        <div>{author}</div>
	)}
