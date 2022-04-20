/* eslint-disable no-undef */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Html } from '.'

describe('Html', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Html html={'<p style={{color: "red"}}>Testing Html</p>'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
