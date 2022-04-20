import React, { HTMLAttributes, ReactNode } from 'react'
import theme from '../../theme'
import styled from 'styled-components'

const { sizes, spaces, zindex } = theme

export interface CenterPropsTypes extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
}

const baseStyles = {
  width: sizes.max,
  height: sizes.max,
  padding: spaces[1],
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-wrap': 'wrap',
  zIndex: zindex.base
}

const BaseCenter = styled.div<any>(baseStyles)

const CenterStyled = styled(BaseCenter)<CenterPropsTypes>((props: any) => ({ ...props }))

export const Center = ({
  children = '',
  ...props
}: CenterPropsTypes) => {
  return (
    <CenterStyled {...props}>
      {children}
    </CenterStyled>
  )
}
