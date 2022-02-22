import React, { FC, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

export interface ButtonPropsTypes extends HTMLAttributes<HTMLButtonElement> {
  /** Provider a 'content' for the button  */
  children: ReactNode,
  /** Provider a 'variant' for the button  */
  variant?: 'solid' | 'outline' | 'ghost' | 'link',
  colorSchema?: 'brown' | 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'black' | 'white'
}

const BaseButton = styled.button({
  padding: '10px 20px',
  borderRadius: 50,
  borderStyle: 'none',
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.9
  }
})

const LinkButton = styled(BaseButton)((props: any) => ({
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  color: props.colorSchema || props.backgroundColor || props.background,
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
    opacity: 0.9
  },
  ...props
}))

const SolidButton = styled(BaseButton)((props: any) => ({
  borderColor: props.colorSchema || props.backgroundColor || props.background,
  backgroundColor: props.colorSchema || props.backgroundColor || props.background,
  color: 'white',
  ...props
}))

const OutlineButton = styled(BaseButton)((props: any) => ({
  border: '1px solid',
  borderColor: props.colorSchema || props.backgroundColor || props.background,
  background: 'transparent',
  color: props.colorSchema || props.backgroundColor || props.background,
  ...props
}))

const GhostButton = styled(BaseButton)((props: any) => ({
  borderColor: 'none',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: props.colorSchema || props.backgroundColor || props.background,
    color: 'white',
    opacity: 0.9
  },
  ...props
}))

const ButtonStyled = styled(BaseButton)((props: any) => ({ ...props }))

/** A custom button component */
export const Button: FC<ButtonPropsTypes> = ({
  children,
  variant = 'solid',
  colorSchema = 'brown',
  ...props
}) => {
  if (variant === 'solid') {
    return (
      <SolidButton
        variant={variant}
        colorSchema={colorSchema}
        {...props}
      >
        {children}
      </SolidButton>
    )
  }

  if (variant === 'outline') {
    return (
      <OutlineButton
        variant={variant}
        colorSchema={colorSchema}
        {...props}
      >
        {children}
      </OutlineButton>
    )
  }

  if (variant === 'ghost') {
    return (
      <GhostButton
        variant={variant}
        colorSchema={colorSchema}
        {...props}
      >
        {children}
      </GhostButton>
    )
  }

  if (variant === 'link') {
    return (
      <LinkButton
        variant={variant}
        colorSchema={colorSchema}
        {...props}
      >
        {children}
      </LinkButton>
    )
  }

  return (
    <ButtonStyled
      variant={variant}
      colorSchema={colorSchema}
      {...props}
    >
      {children}
    </ButtonStyled>
  )
}