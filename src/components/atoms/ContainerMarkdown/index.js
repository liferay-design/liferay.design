import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'


const ContainerMarkdown = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

ContainerMarkdown.propTypes = {
    children: PropTypes.node,
}

export default ContainerMarkdown
