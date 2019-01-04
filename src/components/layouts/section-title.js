import React from 'react'
import styled from 'styled-components'

const SectionElement = styled.h2` 
  text-transform: uppercase;
  overflow: hidden;
  width: 100%;
  display: block;
  line-height: 2.2rem;
  font-size: 2rem;
  color: ${props => props.color || '#000000'};

  span {
    display: block;
    font-size: .8rem;
    font-family: 'Lato';
    font-weight: normal;
  }

  span.icon {
    width: 90px;
    height: 90px;
    border-radius: 45px;
    background-color: ${props => props.bgColor || props.theme.primary};
    float:left;
    margin-right: 32px;
    display: flex;
    justify-content: center;
align-items: center;

    svg {
      width: 60%;
      path {
        fill: #fff;
      }
    }
  }
`

const SectionTitle = ({text, subtitle, bgColor, color, icon}) => (
  <SectionElement bgColor={bgColor} color={color}>
    <span className="icon">{icon}</span>
    {text}
    <span>{subtitle}</span>
  </SectionElement>
)

export default SectionTitle




