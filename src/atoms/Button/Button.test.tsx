/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from '.'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button>Testing Button</Button>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
