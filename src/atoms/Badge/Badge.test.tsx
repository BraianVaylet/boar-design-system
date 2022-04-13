/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Badge } from '.'

describe('Badge', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Badge>Testing Badge</Badge>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
