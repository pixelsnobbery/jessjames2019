import React from 'react'
import styled from 'styled-components'

const SectionElement = styled.section` 
padding: 96px 0;
position: relative;

p {
  color: ${props => props.textColor}!important;
}

> div {
  width: 100%;
  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    width: 850px;
  }
  margin: 0 auto;

  > * {
    position: relative;
    z-index: 2;
  }

  .gatsby-image-wrapper {
    z-index: 0;
  }
}

&:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  background-color: ${props => props.bgColor || "#fff"};
  top: 0;
  bottom: 0;
  transform: ${props => props.skewY || "skewY(-8deg)" };
}
`



const Section = ({bgColor, bgImage, skewY, className, children}) => (
  <SectionElement bgColor={bgColor} skewY={skewY} className={className}>
    {bgImage}
    <div>
      {children}
    </div>
    
  </SectionElement>
)

export default Section




