/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Text } from '.'

describe('Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Text>Testing Text</Text>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
