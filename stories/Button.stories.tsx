import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, ButtonPropsTypes } from '../src/Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Default Text'
    },
    onClick: {
      action: 'Clicked'
    }
  }

}


const Template: Story<ButtonPropsTypes> = args => (
  <Button {...args} />
)

export const Default = Template.bind({})
export const Secondary = Template.bind({})

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
  onClick: action('secondary click')
}

export default meta