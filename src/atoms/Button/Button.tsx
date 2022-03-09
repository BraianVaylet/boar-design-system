import React, { HTMLAttributes, ReactNode } from 'react'
import theme from '../../theme'
import styled from 'styled-components'

export interface ButtonPropsTypes extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  variant?: 'solid' | 'outline' | 'ghost' | 'link',
  colorScheme?: 'black' | 'white' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'
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

const LinkButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  color: theme.colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
    opacity: 0.9
  },
  ...props
}))

const SolidButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  borderColor: theme.colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  backgroundColor: theme.colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  color: props.colorScheme === 'white' ? 'black' : 'white',
  ...props
}))

const OutlineButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  border: '1px solid',
  borderColor: theme.colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  background: 'transparent',
  color: theme.colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  ...props
}))

const GhostButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  borderColor: 'none',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: theme.colorScheme[props.colorScheme] || props.backgroundColor || props.background,
    color: props.colorScheme === 'white' ? 'gray' : 'white',
    transition: 'all .5s ease',
    opacity: 0.9
  },
  ...props
}))

const ButtonStyled = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({ ...props }))

/** A custom button component */
export const Button = ({
  children,
  variant = 'solid',
  colorScheme = 'orange',
  ...props
}: ButtonPropsTypes) => {
  if (variant === 'solid') {
    return (
      <SolidButton
        variant={variant}
        colorScheme={colorScheme}
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
        colorScheme={colorScheme}
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
        colorScheme={colorScheme}
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
        colorScheme={colorScheme}
        {...props}
      >
        {children}
      </LinkButton>
    )
  }

  return (
    <ButtonStyled
      variant={variant}
      colorScheme={colorScheme}
      {...props}
    >
      {children}
    </ButtonStyled>
  )
}
