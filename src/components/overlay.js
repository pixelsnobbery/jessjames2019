import React from 'react'
import styled from 'styled-components'

const OverlayDiv = styled.div`
    background: ${props => props.bgColor || 'rgba(0,0,0,0.4)' }!important;
    position:absolute!important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1!important;
`

const Overlay = ({bgColor}) => (
    <OverlayDiv bgColor={bgColor}></OverlayDiv>
)

export default Overlay
