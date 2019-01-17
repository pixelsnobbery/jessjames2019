import React from 'react'
import styled from 'styled-components'

import Clouds from "./hero/clouds";

import HeroImage from '-!svg-react-loader?name=Icon!../images/hero.svg';
import Logo from '-!svg-react-loader?name=Logo!../images/logo.svg';

const HeroWrapper = styled.div`
    background: #fff; /* Old browsers */
    display: block;
    position: relative;

    overflow:hidden;


    .heroImg {
        height: 100%;
    }
    
    .title {
        position:absolute;
        max-width: 100%;
        left: 50px;
        right: 50px;
        @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
            max-height: 250px;
            max-width: 250px;
            left: 48px;
            bottom: 100px;
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
`

const Hero = () => (
  <HeroWrapper>
    <div className="title">
        <div className="center">
            <Logo className="logo"></Logo>
            <h3>Galiano Island, British Columbia, Canada</h3>
        </div>
    </div>
    <div className="heroImg">
        <HeroImage></HeroImage>
    </div>
    
    <Clouds bgColour="white"></Clouds>
  </HeroWrapper>
)

export default Hero
