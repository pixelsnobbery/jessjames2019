import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    
    flex: 1 0 0px;
    min-width: 200px;
    background-color: #fff;
    margin: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    padding: 16px;

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
`

const Card = ({children}) => (
    <CardDiv>
        {children}
    </CardDiv>
)

export default Card
