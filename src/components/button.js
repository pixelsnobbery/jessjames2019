import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
    padding: 8px;
    text-transform: uppercase;
    
    &:link, &:visited {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.white}!important;
        text-decoration: none;
        font-weight: 500;
    }
`

const Button = ({text, href}) => (
  <Btn href={href}>
    {text}
  </Btn>
)

export default Button
