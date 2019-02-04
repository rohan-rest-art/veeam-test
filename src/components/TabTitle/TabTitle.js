import React from 'react'
import styles from './TabTitle.module.scss'
import PropTypes from 'prop-types'

const TabTitle = (props) => (
  <h1 className={styles.h1}>
    {props.children}
  </h1>
)

TabTitle.propTypes = {
  children: PropTypes.node,
}

export default TabTitle
