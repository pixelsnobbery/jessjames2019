import React from 'react'
import styled from 'styled-components'

import CloudsImage from '-!svg-react-loader?name=Logo!../../images/clouds.svg';
const CloudsContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4;
    

    .cloudsBottom {
        height: 0;
        background-color: #fff;
        animation: slidein 1s ease;
    }

    @keyframes slidein {
        0% {
            height: 500px;
        }
        100% {
            height: 0;
        }
    }

`
const Clouds  = () => (
    <CloudsContainer>
        <CloudsImage></CloudsImage>
        <div class="cloudsBottom"></div>
    </CloudsContainer>
        
)

export default Clouds
