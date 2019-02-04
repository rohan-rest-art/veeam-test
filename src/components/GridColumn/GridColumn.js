import React from 'react'
import PropTypes from 'prop-types'

const GridColumn = (props) => (
  <div className={props.className} style={{ 'gridColumnEnd': `span ${props.span}` }}>
    {props.children}
  </div>
)

GridColumn.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number.isRequired,
  className: PropTypes.string,
}

export default GridColumn
