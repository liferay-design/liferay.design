import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, Link, Text, Flex } from 'components/atoms'

export default ( {id, guest, ...props} ) => {
	const data = useStaticQuery(graphql`
		{
            allAuthorsYaml {
                edges {
                    node {
                        id
                        slug
                        headshot
                    }
                }
            }
        }
	`)

	const author = data.allAuthorsYaml.edges
        .filter(edges => edges.node.id === id)
        .map(({ node }) => (
			<Flex {...props} align="center">
				<Link to={'/team/' + `${node.slug}`}> 
					<div
						style={{marginRight:'.5rem', width:'3rem'}}
					>
						<Image circle src={node.headshot} />
					</div>
				</Link>
				<Text size="medium" color="grey" >
	 				by {''}
	 				<Link to={'/team/' + `${node.slug}`}>{id}</Link>
	 			</Text>
			</Flex>
        ))

	return (
        <div>{author}</div>
	)}
