import React, { HTMLAttributes, ReactNode } from 'react'
import theme from '../../theme'
import styled from 'styled-components'

const { fonts, sizes, zindex } = theme

export interface HeadingPropsTypes extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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

const BaseHeading1Text = styled.h1<any>(baseStyles)
const BaseHeading2Text = styled.h2<any>(baseStyles)
const BaseHeading3Text = styled.h3<any>(baseStyles)
const BaseHeading4Text = styled.h4<any>(baseStyles)
const BaseHeading5Text = styled.h5<any>(baseStyles)
const BaseHeading6Text = styled.h6<any>(baseStyles)

const TextHeading1Styled = styled(BaseHeading1Text)<HeadingPropsTypes>((props: any) => ({
  fontSize: fonts.fontSizes['4xl'],
  ...props
}))
const TextHeading2Styled = styled(BaseHeading2Text)<HeadingPropsTypes>((props: any) => ({
  fontSize: fonts.fontSizes['3xl'],
  ...props
}))
const TextHeading3Styled = styled(BaseHeading3Text)<HeadingPropsTypes>((props: any) => ({
  fontSize: fonts.fontSizes['2xl'],
  ...props
}))
const TextHeading4Styled = styled(BaseHeading4Text)<HeadingPropsTypes>((props: any) => ({
  fontSize: fonts.fontSizes.xl,
  ...props
}))
const TextHeading5Styled = styled(BaseHeading5Text)<HeadingPropsTypes>((props: any) => ({
  fontSize: fonts.fontSizes.lg,
  ...props
}))
const TextHeading6Styled = styled(BaseHeading6Text)<HeadingPropsTypes>((props: any) => ({
  fontSize: fonts.fontSizes.md,
  ...props
}))

export const Heading = ({
  children = '',
  as = 'h1',
  ...props
}: HeadingPropsTypes) => {
  if (as === 'h1') {
    return (
      <TextHeading1Styled {...props}>
        {children}
      </TextHeading1Styled>
    )
  }

  if (as === 'h2') {
    return (
      <TextHeading2Styled {...props}>
        {children}
      </TextHeading2Styled>
    )
  }

  if (as === 'h3') {
    return (
      <TextHeading3Styled {...props}>
        {children}
      </TextHeading3Styled>
    )
  }

  if (as === 'h4') {
    return (
      <TextHeading4Styled {...props}>
        {children}
      </TextHeading4Styled>
    )
  }

  if (as === 'h5') {
    return (
      <TextHeading5Styled {...props}>
        {children}
      </TextHeading5Styled>
    )
  }

  if (as === 'h6') {
    return (
      <TextHeading6Styled {...props}>
        {children}
      </TextHeading6Styled>
    )
  }

  return (
    <TextHeading1Styled {...props}>
      {children}
    </TextHeading1Styled>
  )
}
