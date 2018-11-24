import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    flex-grow: 1;
    max-width: 30%;
    background-color: #f6f6f6;
    margin: 0 8px;
    h3 {
      text-align:center;
      color: #fff;
      background-color: ${props => props.theme.primary};
      width: 100%;
      padding: 8px;
    }
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`

const Card = ({children}) => (
    <CardDiv>
        {children}
    </CardDiv>
)

export default Card
