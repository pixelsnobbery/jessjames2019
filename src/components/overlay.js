import React from 'react'
import styled from 'styled-components'

const OverlayDiv = styled.div`
    background: rgba(0,0,0,0.3);
    position:absolute!important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1!important;
`

const Overlay = () => (
    <OverlayDiv></OverlayDiv>
)

export default Overlay
