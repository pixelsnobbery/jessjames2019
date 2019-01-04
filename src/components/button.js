import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
    padding: 8px 16px;
    text-transform: uppercase;
    display: inline-block;

    &:link, &:visited {
        background: ${props => props.bgColor || props.theme.primary }!important;
        color: ${props => props.theme.white}!important;
        text-decoration: none;
        font-weight: 500;
        transition: .2s background-color ease;
    }

    &:hover, &:active {
      background-color: #333;
    }

    &.ghost {
      &:link, &:visited {
        border: 3px solid ${props => props.borderColor || "#000000"};
        background: none;
        color: ${props => props.borderColor || "#000000"}!important;
      }
    }

    
`

const Button = ({text, href, className, bgColor}) => (
  <Btn href={href} className={className} bgColor={bgColor}>
    {text}
  </Btn>
)

export default Button
