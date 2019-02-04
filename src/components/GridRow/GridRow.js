import React from 'react'
import PropTypes from 'prop-types'
import styles from './GridRow.module.scss'

const GridRow = (props) => (
  <div className={styles.root}>
    {props.children}
  </div>
)

GridRow.propTypes = {
  children: PropTypes.node,
}

export default GridRow
