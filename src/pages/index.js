import React from 'react'
import styled from 'styled-components'

import LayoutIndex from '../components/layouts/layout-index'
import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import LogoImage from '-!svg-react-loader?name=Icon!../images/logo.svg';
import Polaroid1 from '../images/polaroid_1.jpg'
import Polaroid2 from '../images/polaroid_2.jpg'
import Polaroid3 from '../images/polaroid_3.jpg'
import Polaroid4 from '../images/polaroid_4.jpg'
import Polaroid5 from '../images/polaroid_5.jpg'

import WOW from "wowjs"

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 32px 0;

    h2 {
      margin: 0 0 32px 0;
    }

    p {
      margin: 0 0 48px 0;
    }

    .float-left {
      width: 50%;
    }

    @keyframes polaroidsIn {
      0%   { transform: scale(0,0); }
      100% { transform: scale(1,1); }
    }

    .grid-display {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 94vh;
      padding: 4rem 0px 2rem;
      margin: 0px auto;
      -webkit-backface-visibility: hidden;

      &.animated {
        .row {
          .box {
            animation: polaroidsIn 1s ease;
          }
        }      
      }

      

      .row1 {
        max-width: 45%;
        position:absolute;
        left:0;
        top: 8rem;
        text-transform: uppercase;
        h2 {
          font-size: 1.8rem;
          margin-bottom: .5rem;
        }
        h3 {
          color: ${props => props.theme.primary};
          font-weight: 200;
        }
        
      }

      .row {
        -webkit-backface-visibility: hidden;
        .box {
          background-color: #333;
          margin: 8px;
          width: 20%;
          -webkit-backface-visibility: hidden;
          transform-origin: center bottom;

          
          
          position: relative;
          &:before {
            content: '';
            display: block;
            padding-top: 75%;
          }
          .content {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            img {
              object-fit: cover;
              height: 100%;
              width: 100%;
            }
          }
        }
      }

      .row2 {
        display: flex;
        align-items: flex-end;
        margin-left: 0%;
        .box {
          position: relative;
          opacity: 1;
          display: inline-block;
          transform: perspective(1000px) translate3d(0px, 0px, 0px) !important;
          border-radius: 0.8rem;
          margin: 0.3rem;
          overflow: hidden;
          width: 19.74%;
          &:first-child {
            top: 7.5rem;
            width: 31%;
          }
          &:last-child {
            width: 48.68%;
          }
          
        }
      }

      .row3 {
        display: flex;
        align-items: flex-start;
        margin-left: 8.2%;

        .box {
          position: relative;
          
          opacity: 1;
          display: inline-block;
          transform: perspective(1000px) translate3d(0px, 0px, 0px) !important;
          border-radius: 0.8rem;
          margin: 0.3rem;
          overflow: hidden;
          width: 38%;
          &.two {
            padding-bottom: 8em;
          }
          &.three {
            padding-bottom:4em;
          }
          
          &:first-child {
            top: 7.5rem;
            width: 25.6%;
          }
          &:last-child {
            width: 39.48%;
            display: flex;
            flex-direction: column;
          }
        }
      }

      
    }


  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    max-width: 1000px;

  }
`

const Index = () => (
  <ThemeProvider theme={Theme}>
    <LayoutIndex>
      {/* <Logo>
        <LogoImage></LogoImage>
        <h3>Website coming soon...</h3>
      </Logo> */}
      <div className="cloudsBottom"></div>
      <Container>
        <div className="grid-display wow" data-wow-offset="400">
          <div className="row row1">
            <h2>
              We're getting hitched
            </h2>
            <h3>and then having a party</h3>
            
          </div>
          <div className="row row2">
            <div className="box">
              <div className="content">
              <img src={Polaroid1} />
              </div>
            </div>
            <div className="box">
              <div className="content">
              <img src={Polaroid3} />
              </div>
            </div>
            <div className="box">
              <div className="content">
              <img src={Polaroid4} />
              </div>
            </div>
          </div>
          <div className="row row3">
            <div className="box 1">
              <div className="content">
              </div>
            </div>
            <div className="box two">
              <div className="content">
              <img src={Polaroid2} />
              </div>
            </div>
            <div className="box three">
              <div className="content">
              <img src={Polaroid5} />
              </div>
            </div>
          </div>
        </div>
        
      </Container>
    </LayoutIndex>
  </ThemeProvider>
)

export default class IndexPage extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render () {
    return (
      <Index></Index>
    )
  };
};