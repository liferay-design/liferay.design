import React, { Component } from 'react'
import Plx from 'react-plx'
import styles from './styles.module.scss'
import Icon from '../Icon'

const scrollArrow = [
	{
		start: 50,
		duration: 200,
		properties: [
			{
				startValue: 1,
				endValue: 0,
				property: 'opacity',
			}
		]
    },
    {
        start: 250,
        duration: 1,
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: 'scale',
            }
        ]
    }
]

export default class ScrollArrow extends Component {
        state = {
        	isTop: true,
        }

        componentDidMount() {
        	document.addEventListener('scroll', () => {
        		const isTop = window.scrollY < 800
        		if (isTop !== this.state.isTop) {
        			this.setState({ isTop })
        		}
        	})
        }

        render() {
            var onClick = function() {
                window.scroll({
                    top: `${ window.scrollY < 800 ? window.innerHeight : 0}`,
                    left: 0,
                    behavior: 'smooth',
                })
            }.bind(this)
            return (
				<Plx
					parallaxData={scrollArrow}
					className={`${styles.scrollArrow} ${
						this.state.isTop ? null : styles.up
					}`}
					tagName="button"
					onClick={onClick}
				>
					<div>scroll</div>
					<Icon name="scrollArrow" />
				</Plx>
			)
        }
    }
