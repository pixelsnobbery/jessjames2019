import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import AccommodationHero from '../components/accommodation-hero'
import Card from '../components/card'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Section from '../components/layouts/section'
import Overlay from '../components/overlay'

const Hero = styled.div`
  display: block;
  height: 85vh;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  position: relative;

  h1, h2 {
    text-align:center;
    z-index:3;
    color:#fff;
  }
  h1 {
    font-size: 4rem;
  }
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .card {
    position: relative;
    flex-basis: 200px;
    height: 300px;
    overflow: hidden;
    margin: 0 8px;
    border-radius: 8px;
    transition: .8s transform ease;
    a {
      > img {
        display: block;
        width: 200px;
        height: 300px;
        object-fit: cover;
        object-position: left center;
      }
      h3 {
        z-index: 2;
        position:absolute;
        text-align:center;
        left: 0;
        right: 0;
        top: 50%;
        color: #fff;
        text-transform: uppercase;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.75);
        font-size: 1.4rem;
        transition: .8s font-size ease;
      }
    
      &:hover {
        h3 {
          font-size: 1.5rem;
        }
      }
  }
  &:hover, &:active {
    transform: translateY(-10px);
  }
  &.animated {
        animation: scaleUp .5s ease;
        animation-fill-mode: backwards;
      }
      @keyframes scaleUp {
        0%   { transform: translateY(50px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    }
`

// const Cards = styled.div`
//   display: flex;
//   justify-content:space-between;
// `


const Accommodation = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Hero>
        <AccommodationHero />
        <h1>Getting To Canada</h1>
        <Overlay></Overlay>
      </Hero>

      <Section bgColor="#f6f9fc">
          <h2>Coming from outside of Canada?</h2>
          <p className="lead">The nearest airport is Vancouver International Airport (YVR). The following UK airports have summer flights direct to Vancouver:</p>
          <CardWrapper>
            <Card>
              <h3>London Gatewick</h3>
              <span>13 flights per week</span>
            </Card>
            <Card>
              <h3>London Heathrow</h3>
              <span>21 flights per week</span>
            </Card>
            <Card>
              <h3>Manchester</h3>
              <span>3 flights per week</span>
            </Card>
            <Card>
              <h3>Glasgow</h3>
              <span>1 flight per week</span>
            </Card>

          </CardWrapper>
      </Section>

    </Layout>
  </ThemeProvider>
)

export default Accommodation



