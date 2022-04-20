/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Box } from '.'

describe('Box', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Box>Testing Box</Box>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
