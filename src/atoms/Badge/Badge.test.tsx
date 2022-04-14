/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Badge } from '.'

describe('Badge', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Badge title={'title'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
