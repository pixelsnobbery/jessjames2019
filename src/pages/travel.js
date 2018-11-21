import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import AccommodationHero from '../components/accommodation-hero'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Tofino from '../images/tofino.jpg'
import Vancouver from '../images/vancouver.jpg'
import Whistler from '../images/whistler.jpg'
import Okanagan from '../images/okanagan.jpg'
import Banff from '../images/banff.jpg'


const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 32px 0;

  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    max-width: 1000px;
  }

`

const Hero = styled.div`
display: block;
height: 65vh;
display:flex;
flex-direction:column;
justify-content: flex-start;
padding-top: 120px;
align-content: center;
position: relative;

h1, h2 {
  text-align:center;
  z-index:3;
  color:#fff;
}

.overlay {
  background: rgba(0,0,0,0.5);
  position:absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
`
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .card {
    position: relative;
    flex-basis: 280px;
    height: 400px;
    overflow: hidden;
    margin: 0 8px;
    border-radius: 8px;
    transition: .8s transform ease;
    > img {
      display: block;
      width: 100vw;
      height: 100vh;
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
      font-size: 2rem;
      transition: .8s font-size ease;
    }
    &:hover {
      transform: translateY(-10px);

      h3 {
        font-size: 2.2rem;
      }
    }
  }
`

const Travel = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Hero>
        <AccommodationHero />
        <h1>Travel</h1>
        <div className="overlay"></div>
      </Hero>



        We're so excited that you're coming to join us! 

        <h2>Coming from outside of Canada?</h2>

        <h2>Getting to Galiano Island</h2>
        <p>Blah</p>

        <h2>Places you have to see whilst you're here</h2>
        <CardWrapper>
          <div class="card">
            <img src={Whistler} />
            <h3>Whistler</h3>
          </div>

          <div class="card">
            <img src={Vancouver} />
            <h3>Vancouver</h3>
          </div>

          <div class="card">
            <img src={Tofino} />
            <h3>Tofino</h3>
          </div>

          <div class="card">
            <img src={Banff} />
            <h3>Banff</h3>
          </div>

          <div class="card">
            <img src={Okanagan} />
            <h3>Okanagan</h3>
          </div>
        </CardWrapper>
        <h2>Our personal, off the beaten track recommendations</h2>
        <p>Blah blah</p>


      
    </Layout>
  </ThemeProvider>
)

export default Travel
