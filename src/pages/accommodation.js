import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import AccommodationHero from '../components/accommodation-hero'
import Card from '../components/card'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Image1 from '../images/bodega_cabin_1.jpg'

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

const Cards = styled.div`
  display: flex;
  justify-content:space-between;
`

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 32px 0;

  @media only screen and (min-width: ${props => props.theme.aboveMobile}) {
    max-width: 1000px;
  }

`

const Accommodation = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Hero>
        <AccommodationHero />
        <h1>Accommodation</h1>
        <div className="overlay"></div>
      </Hero>

      <Container>
      <p>Bodega Ridge has 6 3-bedroom cabins available on-site. There's also several cabins at Bodega Cove which sleeps a further 12.</p>
    
      <h2>Accommodation Prices</h2>
      
      <h3>Bodega Ridge 3 bedroom cabin</h3>

      <p>There are seven charming, self-contained log cabins, all with three bedrooms, living room, full kitchen and bath. Each cabin sleeps six comfortably, and all bedrooms have a queen-size bed with dreamy pillow-top mattress.</p>

      <p>Take in the view from your cedar deck, have a long soak in the tub, or curl up in front of the wood stove.</p>
      <ul>
        <li>
          Price per double room: $140/night
        </li>
      </ul>

      <h3>Bodega Cove </h3>

      <p>A 5-minute walk from Bodega Ridge, and the ceremony site, Bodega Cove consists of 5 cedar cabins. There are two designs: romantic one bedroom units and more spacious two bedroom cabins ideal for two couples or a small family. </p>

      <ul>
        <li>
          1 bedroom cabin: $350/night
        </li>
        <li>
          2 bedroom cabin (price per room): $200/night
        </li>
      </ul>

      <img src={Image1} alt="Bodega Ridge" />

      <h2>Other Accommodation Options</h2>

      <p>Galiano Island has plenty of other accommodation options available. Check out some of our favourites:</p>

      <Cards>
        <Card title="Serenity by the Sea" image="../images/serenity-by-the-sea.jpg"></Card>
        <Card title="Arrow's Run"></Card>
        <Card title="Galiano Inn & Spa"></Card>
      </Cards>
      </Container>
    </Layout>
  </ThemeProvider>
)

export default Accommodation



