import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import AccommodationHero from '../components/accommodation-hero'
import Card from '../components/card'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Section from '../components/layouts/section'
import Overlay from '../components/overlay'
import SectionTitle from '../components/layouts/section-title';

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

`

const Accommodation = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <Hero>
        <AccommodationHero />
        <h1>Getting To Canada</h1>
        <Overlay></Overlay>
      </Hero>

      <Section>
        <SectionTitle text="When to fly"></SectionTitle>
        <p>If you are travelling from afar and are planning a trip to incorporate the wedding, we would advise you to book return/onward travel no earlier than Friday July 5th to ensure you have enough time to get back to the mainland.</p>
      </Section>

      <Section bgColor="#f6f9fc">
        <SectionTitle
          text="Coming from Outside of Canada?"
          subTitle=""></SectionTitle>
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



