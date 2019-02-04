import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ResultTab.module.scss'
import TabTitle from '../TabTitle'
import Row from '../GridRow'
import Column from '../GridColumn'

class ResultTab extends Component {
  constructor (props) {
    super(props)
    const noData = !props.formConfig || (
      !props.formConfig.formTitle &&
      !props.formConfig.items &&
      !props.formConfig.buttons
    )
    this.state = {
      noData
    }
  }

  static propTypes = {
    formConfig: PropTypes.object,
  }

  renderTitle () {
    const { formConfig } = this.props
    const title = formConfig && formConfig.formTitle

    if (!title) return null

    return (
      <TabTitle>{title}</TabTitle>
    )
  }

  renderInputs () {
    const { formConfig } = this.props
    const items = formConfig && formConfig.items

    if (!items || !items.length) return null

    return items.map((item) => {
      let input = item.type !== 'textarea' && item.type !== 'radio' && (<input type={item.type} name={item.name}/>)
      if (item.type === 'textarea') {
        input = (<textarea name={item.name} id='' cols='30' rows='10'/>)
      }
      if (item.type === 'radio') {

        input = item.values && item.values.map((value) => {
          return (
            <div key={value}><input type={item.type} name={item.name} value={value} /> {value}</div>
          )
        })
      }

      return (
        <Row key={item.name}>
          <Column span={1}>
            {item.label}
          </Column>
          <Column span={3}>
            {input}
          </Column>
        </Row>
      )
    })
  }

  renderButtons () {
    const { formConfig } = this.props
    const buttons = formConfig && formConfig.buttons

    if (!buttons || !buttons.length) return null

    const reactButtons = buttons.map((name) => {
      return (<button key={name}>{name}</button>)
    })

    return (
      <Row>
        <Column span={4} className={styles.buttonsColumn}>
          {reactButtons}
        </Column>
      </Row>
    )
  }

  renderNoData () {
    const { noData } = this.state
    if (noData) {
      return (
        <span className={styles.noData}>There is no data to show</span>
      )
    }
  }

  render () {
    return (
      <div className={styles.root}>
        { this.renderTitle() }
        { this.renderInputs() }
        { this.renderButtons() }
        { this.renderNoData() }
      </div>
    )
  }
}

export default ResultTab
