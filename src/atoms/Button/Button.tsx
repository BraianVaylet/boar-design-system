import React, { HTMLAttributes, ReactNode } from 'react'
import theme from '../../theme'
import styled from 'styled-components'

const { colorScheme, fonts, sizes, spaces, radius, zindex } = theme

export interface ButtonPropsTypes extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  variant?: 'solid' | 'outline' | 'ghost' | 'link',
  colorScheme?: 'black' | 'white' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'
}

const BaseButton = styled.button({
  boxSizing: 'border-box',
  width: sizes.max,
  height: sizes.max,
  padding: `${spaces[1.5]} ${spaces[2]}`,
  margin: spaces[1],
  borderRadius: radius.base,
  border: `${spaces.px} solid transparent`,
  fontSize: fonts.fontSizes.md,
  lineHeights: fonts.lineHeights.normal,
  fontWeights: fonts.fontWeights.normal,
  letterSpacings: fonts.letterSpacings.normal,
  fontFamily: fonts.fonts.body,
  zIndex: zindex.base,
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.9
  },
  '&:active': {
    border: `${spaces.px} solid ${colorScheme.base}`,
    boxShadow: `0 0 ${spaces[2]} ${colorScheme.base}`
  },
  '&:focus': {
    border: `${spaces.px} solid ${colorScheme.base}`,
    boxShadow: `0 0 ${spaces[2]} ${colorScheme.base}`
  },
  '&:target': {
    border: `${spaces.px} solid ${colorScheme.base}`,
    boxShadow: `0 0 ${spaces[2]} ${colorScheme.base}`
  }

})

const LinkButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  color: colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
    opacity: 0.9
  },
  ...props
}))

const SolidButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  borderColor: colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  backgroundColor: colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  color: props.colorScheme === 'white' ? 'black' : 'white',
  ...props
}))

const OutlineButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  border: '1px solid',
  borderColor: colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  background: 'transparent',
  color: colorScheme[props.colorScheme] || props.backgroundColor || props.background,
  ...props
}))

const GhostButton = styled(BaseButton)<ButtonPropsTypes>((props: any) => ({
  borderColor: 'none',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: colorScheme[props.colorScheme] || props.backgroundColor || props.background,
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
