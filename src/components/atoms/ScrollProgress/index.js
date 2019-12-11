import React, { Component } from 'react'
import Plx from 'react-plx'
import styles from './styles.module.scss'

const scrollProgress = [
	{
		start: 0,
		end: 'footer',
		properties: [
			{
				startValue: 0,
				endValue: 1,
				property: 'scaleX',
			}
		]
	}
]

export default class ScrollProgress extends Component {
	render() {
		return (
    <Plx
        parallaxData={scrollProgress}
        className={styles.scrollProgress} />
		)
	}
}
