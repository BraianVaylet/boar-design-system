import React, { FC, HTMLAttributes, ReactNode } from 'react'

export interface ButtonPropsTypes extends HTMLAttributes<HTMLButtonElement> {
  /** Provider a 'content' for the button  */
  children: ReactNode,
  /** Provider a 'variant' for the button  */
  variant?: 'primary' | 'secondary'
}

/** A custom button component */
export const Button: FC<ButtonPropsTypes> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button {...props} style={{
      background: variant === 'primary' ? 'red' : 'blue',
      color: 'white',
      border: 'none',
      borderRadius: 100,
      padding: 10,
    }}>
      {children}
    </button>
  )
}