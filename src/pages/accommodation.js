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

  > div {
    flex-grow: 1;
    max-width: 30%;
    h3 {
      text-align:center;
      color: #fff;
      background-color: ${props => props.theme.primary};
      width: 100%;
      padding: 8px;
    }
  }
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



