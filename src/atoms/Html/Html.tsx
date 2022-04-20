import React from 'react'

export interface HtmlPropsTypes {
  html: string
}

export const Html = ({ html }: HtmlPropsTypes) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
