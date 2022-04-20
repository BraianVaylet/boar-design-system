import React, { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { colorSchemePropsTypes, variantPropsTypes } from '../../types'

const { fonts, sizes, zindex, spaces, colorScheme } = theme

export interface BadgePropsTypes extends HTMLAttributes<HTMLSpanElement> {
  title?: string,
  children?: ReactNode,
  variant?: variantPropsTypes,
  colorScheme?: colorSchemePropsTypes
}

const baseStyles = {
  width: sizes.min,
  height: sizes.min,
  fontSize: fonts.fontSizes.md,
  lineHeight: fonts.lineHeights[3],
  fontWeight: fonts.fontWeights.bold,
  letterSpacing: fonts.letterSpacings.normal,
  fontFamily: fonts.fonts.body,
  border: `${spaces[1]} solid transparent`,
  padding: spaces[1],
  zIndex: zindex.base
}

const BaseBadge = styled.span<any>(baseStyles)

const LinkBadge = styled(BaseBadge)<BadgePropsTypes>((props: any) => ({
  backgroundColor: 'transparent',
  color: colorScheme[props.colorScheme],
  ...props
}))

const SolidBadge = styled(BaseBadge)<BadgePropsTypes>((props: any) => ({
  borderColor: colorScheme[props.colorScheme],
  backgroundColor: colorScheme[props.colorScheme],
  color: props.colorScheme === 'white' ? 'black' : 'white',
  ...props
}))

const OutlineBadge = styled(BaseBadge)<BadgePropsTypes>((props: any) => ({
  borderColor: colorScheme[props.colorScheme],
  background: 'transparent',
  color: colorScheme[props.colorScheme],
  ...props
}))

const GhostBadge = styled(BaseBadge)<BadgePropsTypes>((props: any) => ({
  color: colorScheme[props.colorScheme],
  backgroundColor: colorScheme[props.colorScheme] + '50',
  ...props
}))

const BadgeStyled = styled(BaseBadge)<BadgePropsTypes>((props: any) => ({ ...props }))

export const Badge = ({
  title,
  children = '',
  colorScheme = 'orange',
  variant = 'solid',
  ...props
}: BadgePropsTypes) => {
  if (variant === 'solid') {
    return (
      <SolidBadge
        colorScheme={colorScheme}
        {...props}
      >
        {title ? title.toUpperCase() : children}
      </SolidBadge>
    )
  }

  if (variant === 'outline') {
    return (
      <OutlineBadge
        colorScheme={colorScheme}
        {...props}
      >
        {title ? title.toUpperCase() : children}
      </OutlineBadge>
    )
  }

  if (variant === 'ghost') {
    return (
      <GhostBadge
        colorScheme={colorScheme}
        {...props}
      >
        {title ? title.toUpperCase() : children}
      </GhostBadge>
    )
  }

  if (variant === 'link') {
    return (
      <LinkBadge
        colorScheme={colorScheme}
        {...props}
      >
        {title ? title.toUpperCase() : children}
      </LinkBadge>
    )
  }

  return (
    <BadgeStyled
      colorScheme={colorScheme}
      {...props}
    >
      {title ? title.toUpperCase() : children}
    </BadgeStyled>
  )
}
