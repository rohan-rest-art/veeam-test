import React, { Component } from 'react'
import { formConfig as defaultConfig } from '../../const'
import { Route } from 'react-router-dom'
import ConfigTab from '../ConfigTab'
import ResultTab from '../ResultTab'

class FormConstructor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formConfig: defaultConfig,
    }
    this.setFormConfig = this.setFormConfig.bind(this)
  }

  setFormConfig (config) {
    this.setState({
      formConfig: config,
    })
  }

  render () {
    const { formConfig } = this.state
    return (
      <section>
        <Route path='/config' render={() => <ConfigTab formConfig={formConfig} setFormConfig={this.setFormConfig} />} />
        <Route path='/result' render={() => <ResultTab formConfig={formConfig} />} />
      </section>
    )
  }
}

export default FormConstructor
