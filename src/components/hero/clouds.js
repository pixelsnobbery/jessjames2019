import React from 'react'
import styled from 'styled-components'

import CloudsImage from '-!svg-react-loader?name=Logo!../../images/clouds.svg';
const CloudsContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: -70px;
    width: 100%;
    z-index: 4;
`
const Clouds  = () => (
    <CloudsContainer>
        <CloudsImage></CloudsImage>
    </CloudsContainer>
        
)

export default Clouds
