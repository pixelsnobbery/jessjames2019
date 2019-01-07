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
    line-height: 1.2rem;
    margin-top: 8px;
    color: ${props => props.bgColor || '#000000'};
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

    &.animated {
        animation: scaleInRotate .5s ease;
        animation-fill-mode: backwards;
      }
      @keyframes scaleInRotate {
        0%   { transform: rotate(0) scale(0,0); }
        100% { transform: rotate(360deg) scale(1)(1); }
      }
  }
`

const SectionTitle = ({text, subtitle, bgColor, color, icon}) => (
  <SectionElement bgColor={bgColor} color={color}>
    <span className="icon wow">{icon}</span>
    {text}
    <span>{subtitle}</span>
  </SectionElement>
)

export default SectionTitle




