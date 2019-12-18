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
	render() {
        var onClick = function() {
            window.scroll({
                top: window.innerHeight,
                left: 0,
            behavior: 'smooth'});
          }.bind(this);
		return (
            <Plx
                parallaxData={scrollArrow}
                className={styles.scrollArrow}
                tagName="button"
                onClick={onClick}>
                    <div>scroll</div>
                    <Icon name="scrollArrow" />
            </Plx>
		)
	}
}
