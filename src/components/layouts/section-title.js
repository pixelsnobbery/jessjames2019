import React from 'react'
import styled from 'styled-components'

const SectionElement = styled.h2` 
  text-transform: uppercase;
  overflow: hidden;
  width: 100%;
  display: block;
  line-height: 2rem;
  font-size: 2rem;
  color: ${props => props.color || '#000000'};

  span {
    display: block;
    font-size: .8rem;
    font-family: 'Lato';
    font-weight: normal;
  }

  span.icon {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: ${props => props.bgColor || props.theme.primary};
    float:left;
    margin-right: 16px;
  }
`

const SectionTitle = ({text, subtitle}) => (
  <SectionElement>
    <span className="icon"></span>
    {text}
    <span>{subtitle}</span>
  </SectionElement>
)

export default SectionTitle




