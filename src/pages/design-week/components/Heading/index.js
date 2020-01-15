import { Heading } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
// import styles from './styles.module.scss'

export default class DWHeading extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    render () {
        const { title } = this.props
        return (
            <Heading>{title}</Heading>
        )
    }

}