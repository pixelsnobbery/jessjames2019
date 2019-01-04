import React from 'react'
import styled from 'styled-components'

const SectionElement = styled.section` 
padding: 64px 0;
position: relative;

> div {
  width: 850px;
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
  -webkit-transform: skewY(-8deg);
  transform: skewY(-8deg);
}
`

const Section = ({bgColor, bgImage, className, children}) => (
  <SectionElement bgColor={bgColor} className={className}>
    {bgImage}
    <div>
      {children}
    </div>
    
  </SectionElement>
)

export default Section




