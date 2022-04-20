/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Center } from '.'

describe('Center', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Center>Testing Center</Center>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
