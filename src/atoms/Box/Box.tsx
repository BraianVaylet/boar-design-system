import React, { HTMLAttributes, ReactNode } from 'react'
import theme from '../../theme'
import styled from 'styled-components'

const { sizes, spaces, zindex } = theme

export interface BoxPropsTypes extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
}

const baseStyles = {
  width: sizes.max,
  height: sizes.max,
  padding: spaces[1],
  zIndex: zindex.base
}

const BaseBox = styled.div<any>(baseStyles)

const BoxStyled = styled(BaseBox)<BoxPropsTypes>((props: any) => ({ ...props }))

export const Box = ({
  children = '',
  ...props
}: BoxPropsTypes) => {
  return (
    <BoxStyled {...props}>
      {children}
    </BoxStyled>
  )
}
