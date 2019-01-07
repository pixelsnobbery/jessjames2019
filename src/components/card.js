import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    
    flex: 1 0 0px;
    min-width: 200px;
    background-color: #fff;
    margin: 0 8px;

    > img {
        margin: 0;
    }

    > div {
        padding: 16px;

        p {
            font-size: .8rem;
        }
    }
    h3 {
      text-align:center;
      color: #fff;
      background-color: ${props => props.theme.primary};
      width: 100%;
      padding: 16px;
      
    }
    h4 {
        margin-top: 0;
        margin-bottom: 8px;
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
