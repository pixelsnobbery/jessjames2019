import React from 'react'
import styled from 'styled-components'

import CloudsImage from '-!svg-react-loader?name=Logo!../../images/clouds.svg';
const CloudsContainer = styled.div`
    position: absolute;
    bottom: 280px;
    right: 0;
    left: 0;
    top: 0;
    z-index: 4;
    svg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index:4;
        transform-origin: bottom right;
        animation: clouds 20s infinite;
        .b{fill:rgba(255,255,255,0.95);}

        &.off-white {
            z-index: 3;
            bottom: 5px;
            transform: scale(.75);
            .b {
                fill: rgba(245,245,250,0.8);
            }
        }
    }
    @keyframes clouds {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.045);
        }
    }

`
const Clouds  = ({ bgColour }) => (
    <CloudsContainer>
        <CloudsImage></CloudsImage>
    </CloudsContainer>
)

export default Clouds
