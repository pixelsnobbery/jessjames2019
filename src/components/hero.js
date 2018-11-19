import React from 'react'
import styled from 'styled-components'

import Clouds from "./hero/clouds";

import HeroImage from '-!svg-react-loader?name=Icon!../images/hero.svg';
import Logo from '-!svg-react-loader?name=Logo!../images/logo.svg';

const HeroWrapper = styled.div`
    background: #5bbbce; /* Old browsers */
    background: -moz-linear-gradient(top, #5bbbce 0%, #c2dfdc 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #5bbbce 0%,#c2dfdc 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(bottom, #5bbbce 0%,#c2dfdc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  

    display: block;
    position: relative;

    .cloud {
        width: 40px;
        position: absolute;
        right: 200px;
        transform: translateX(0);
        top: 150px;
        .b{fill:#fff;}
        animation: cloud 60s ease infinite;
    }

    @keyframes cloud {
        0%, 100% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-300px);
        }
    }

    .title {
        position:absolute;
        bottom: 0;
        top: 100px;
        max-width: 400px;
        left: 64px;
        right: 64px;
        @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
            right: auto;
            height: 350px;
            bottom: 280px;
            width: 350px;
            top: auto;
        }
        
        z-index: 5;

        h3 {
            font-size:1rem;
            text-align: center;
            font-weight: 200;
            color: #666!important;
            margin-top: 16px;
        }
    }

    .cloudsBottom {
        position:relative;
        background: #fff;
        height: 300px;
        display: block;
    }
`

const Hero = () => (
  <HeroWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 106 54" className="cloud">
        <g id="a" className="a"><ellipse className="b" cx="29" cy="15.5" rx="29" ry="15.5" transform="translate(48 20)"/>
            <ellipse className="b" cx="26.5" cy="20" rx="26.5" ry="20" transform="translate(30)"/>
            <ellipse className="b" cx="28.5" cy="15.5" rx="28.5" ry="15.5" transform="translate(0 23)"/>
            <ellipse className="b" cx="15" cy="12" rx="15" ry="12" transform="translate(11 12)"/>
        </g>
      </svg>
      
        <Clouds bgColour="off-white"></Clouds>
        <Clouds bgColour="white"></Clouds>
    <HeroImage></HeroImage>
    <div className="ocean"></div>
    <div className="cloudsBottom"></div>
    <div className="title">
        <Logo className="logo"></Logo>
        <h3>Galiano Island, British Columbia, Canada</h3>
      </div>
  </HeroWrapper>
)

export default Hero
