import React from 'react'
import styled from 'styled-components'

const CloudsDistanceContainer = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    svg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index:3;
        transform-origin: bottom right;
        animation: clouds 20s infinite;
        .b{fill:#fff;}

        &.off-white {
            z-index: 2;
            bottom: 5px;
            transform: scale(.75);
            .b {
                fill: rgba(245,245,250,0.9);
            }
        }
    }
    @keyframes clouds {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.03);
        }
    }

`
const Clouds  = ({ bgColour }) => (
    <CloudsContainer>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 732" className={bgColour}>
            <defs>
            <clipPath id="b"><rect width="1920" height="732"/></clipPath>
            </defs>
            <g id="a" class="a">
                <path class="b" d="M1757.39,867.146a104.567,104.567,0,0,1-115.818,2.643,104.51,104.51,0,0,1-150.326-14.827,104.678,104.678,0,0,1-98.133-4.61,104.525,104.525,0,0,1-171.207-20.364,104.325,104.325,0,0,1-81.309-40.861l2.243,48.174H39.883V210.632A104.523,104.523,0,0,1,146.5,32.781a104.514,104.514,0,0,1,138.69-11.9A104.66,104.66,0,0,1,409.608,80.4,104.706,104.706,0,0,1,466.371,122.4a104.6,104.6,0,0,1,121.351,95.427,104.739,104.739,0,0,1,64,71.614,104.568,104.568,0,0,1,48.718,31.588,104.637,104.637,0,0,1,131.12,57.27A104.6,104.6,0,0,1,967.636,460.57a104.292,104.292,0,0,1,49.808,27.1,104.587,104.587,0,0,1,133.351,36.364q1.35-.034,2.706-.034a104.5,104.5,0,0,1,104.487,102.825,104.839,104.839,0,0,1,58.107,50.187,103.985,103.985,0,0,1,51.794,14.636,104.508,104.508,0,0,1,160.866,4.39,104.659,104.659,0,0,1,100.674,6.173,104.509,104.509,0,0,1,150.182,14.644,104.719,104.719,0,0,1,93.316-13.393,104.456,104.456,0,1,1,54.149,156.079,104.519,104.519,0,0,1-169.684,7.606Z" transform="translate(-89 2)"/>
            </g>
        </svg>
    </CloudsContainer>
)

export default Clouds
