/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Heading } from '.'

describe('Heading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Heading>Testing Text</Heading>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
