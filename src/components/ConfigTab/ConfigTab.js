import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ConfigTab.module.scss'
import Row from '../GridRow'
import Column from '../GridColumn'
import TabTitle from '../TabTitle'

class ConfigTab extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inputText: JSON.stringify(props.formConfig),
      wrongTextFormat: false,
    }

    this.handleTextareaChange = this.handleTextareaChange.bind(this)
    this.handleApplyClick = this.handleApplyClick.bind(this)
  }

  static propTypes = {
    formConfig: PropTypes.object,
    setFormConfig: PropTypes.func,
  }

  handleTextareaChange (event) {
    this.setState({
      inputText: event.target.value,
      wrongTextFormat: false,
    })
  }

  handleApplyClick () {
    const { setFormConfig } = this.props
    const { inputText } = this.state

    try {
      const config = JSON.parse(inputText)
      if (typeof config === 'object' ) {
        setFormConfig(config)
      } else {
        this.setState({
          wrongTextFormat: true,
        })
      }
    } catch (e) {
      this.setState({
        wrongTextFormat: true,
      })
    }
  }

  renderError () {
    const { wrongTextFormat } = this.state
    if (!wrongTextFormat) return null
    return (
      <Row>
        <Column span={4}>
          <span className={styles.warning}>Wrong text format</span>
        </Column>
      </Row>
    )
  }

  render () {
    const { inputText } = this.state

    return (
      <div className={styles.root}>
        <TabTitle>Form constructor</TabTitle>
        <Row>
          <Column span={4}>
            <textarea
              className={styles.configField}
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Your config'
              value={inputText}
              onChange={this.handleTextareaChange}
            />
          </Column>
        </Row>
        { this.renderError() }
        <Row>
          <Column span={4} className={styles.buttonColumn}>
            <button className={styles.button} onClick={this.handleApplyClick}>Apply</button>
          </Column>
        </Row>
      </div>
    )
  }
}

export default ConfigTab
