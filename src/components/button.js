import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
    margin-bottom: 32px;
    padding: 10px 16px;
    text-transform: uppercase;
    transition: all .1s ease;
    display: inline-block;

    &:link, &:visited {
        background: ${props => props.bgColor || props.theme.primary }!important;
        color: ${props => props.theme.white}!important;
        text-decoration: none;
        font-weight: 500;
        transition: .2s background-color ease;
        box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    }

    &:hover, &:active {
      background-color: #333!important;
    }

    &.ghost {
      &:link, &:visited {
        border: 3px solid ${props => props.borderColor || "#000000"};
        background: none!important;
        color: ${props => props.borderColor || "#000000"}!important;
      }
      &:hover, &:active {
        background: #000!important;
        color: #fff!important;
        transform: translateY(-4px);
        box-shadow: 0 3px 6px rgba(0,0,0,0.4);
      }
    }

    &:last-child {
      margin-bottom: 0;
    }

    
`

const Button = ({text, href, className, bgColor}) => (
  <Btn href={href} className={className} bgColor={bgColor}>
    {text}
  </Btn>
)

export default Button
