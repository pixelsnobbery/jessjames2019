import React from 'react'
import styled from 'styled-components'

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
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 732" className={bgColour}>
            <g id="a" className="a"><g transform="translate(0 -212)"><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(1646 851)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(1767 809)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(1504 830)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(1380 839)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(1253 809)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(1121 830)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(1030 807)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(791 751)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(647 664)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(560 544)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(456 508)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(340 470)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(249 443)"/><circle className="b" cx="82.5" cy="82.5" r="82.5" transform="translate(154 392)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(-31 217)"/><circle className="b" cx="75.5" cy="75.5" r="75.5" transform="translate(107 295)"/><path className="b" d="M-24.117,142.682V818.3H898.84l-6.106-131.138-4.187-89.923L575.929,347.011,246.673,183.682" transform="translate(-25 212)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(920 814)"/><circle className="b" cx="104.5" cy="104.5" r="104.5" transform="translate(847 795)"/></g></g>
        </svg>
    </CloudsContainer>
)

export default Clouds
