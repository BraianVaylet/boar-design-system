import React, { HTMLAttributes, ReactNode } from 'react'
import theme from '../../theme'
import styled from 'styled-components'

const { fonts, sizes, zindex } = theme

export interface TextPropsTypes extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  children?: ReactNode,
  as?: 'p' | 'span'
}

const baseStyles = {
  width: sizes.max,
  height: sizes.max,
  fontSize: fonts.fontSizes.md,
  lineHeights: fonts.lineHeights.normal,
  fontWeights: fonts.fontWeights.normal,
  letterSpacings: fonts.letterSpacings.normal,
  fontFamily: fonts.fonts.body,
  zIndex: zindex.base
}

const BaseSpanText = styled.span<any>(baseStyles)
const BaseParagraphText = styled.p<any>(baseStyles)

const TextSpanStyled = styled(BaseSpanText)<TextPropsTypes>((props: any) => ({ ...props }))
const TextParagraphStyled = styled(BaseParagraphText)<TextPropsTypes>((props: any) => ({ ...props }))

export const Text = ({
  children = '',
  as = 'span',
  ...props
}: TextPropsTypes) => {
  if (as === 'p') {
    return (
      <TextParagraphStyled {...props}>
        {children}
      </TextParagraphStyled>
    )
  }

  return (
    <TextSpanStyled {...props}>
      {children}
    </TextSpanStyled>
  )
}
