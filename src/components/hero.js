import React from 'react'
import styled from 'styled-components'

import Clouds from "./hero/clouds";

import HeroImage from '-!svg-react-loader?name=Icon!../images/hero.svg';
import Logo from '-!svg-react-loader?name=Logo!../images/logo.svg';

const HeroWrapper = styled.div`
    background: #fff; /* Old browsers */
    display: block;
    position: relative;
    .title {
        position:absolute;
        max-width: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
            height: 350px;
            width: 350px;
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
        <div class="center">
            <Logo className="logo"></Logo>
            <h3>Galiano Island, British Columbia, Canada</h3>
        </div>
    </div>
    <HeroImage></HeroImage>
    <Clouds bgColour="white"></Clouds>
    
  </HeroWrapper>
)

export default Hero
