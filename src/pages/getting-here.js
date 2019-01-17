import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import AccommodationHero from '../components/hero-images/vancouver'
import Card from '../components/card'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Section from '../components/layouts/section'
import Overlay from '../components/overlay'
import SectionTitle from '../components/layouts/section-title';
import Button from '../components/button'

import PassportIcon from  '-!svg-react-loader?name=Passport!../images/passport-icon.svg'

const Hero = styled.div`
  display: block;
  height: 65vh;
  @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
    height: 85vh;
  }
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
    @media only screen and (min-width: ${props => props.theme.aboveMobile}) { 
    font-size: 4rem;
    }
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
        <p>If you are travelling from afar and are planning a trip to incorporate the wedding, we would advise you to give yourselves a day's leeway between the ferry to/from Galiano Island and your outbound/return flight. There's not many things more stressful than a delayed ferry that causes you to miss your flight!</p>
      </Section>

      <Section bgColor="#7795F8" textColor="#ffffff">
          <SectionTitle 
            text="Electronic Travel Authorization (eTA)" 
            bgColor={Theme.neonBlue}
            color="#ffffff">
          </SectionTitle>

        <p>All visitors are required to apply for an eTA before departing for Canada. It only costs $7, and can be applied for online. Verification is usually instant, however in rare cases, it can take a few days. We recommend you get it sorted a week or two in advance.</p>

        <p>eTA's last for 5 years, or until you get a new passport - whichever comes first.</p>

        <Button text="Find out more" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html" bgColor={Theme.secondary}></Button>
      
        <p>Note: Anyone visiting the US during their trip will also need to apply for an <a href="https://esta.cbp.dhs.gov/esta/" target="_blank" rel="nofollow noreferrer">ESTA</a>.</p>
      </Section>

      <Section>
        <SectionTitle
          text="UK Airports"
          subTitle=""></SectionTitle>
          <p className="lead">The nearest airport is Vancouver International Airport (YVR). The following UK airports have summer flights direct to Vancouver:</p>
          
          <ul>
            <li>
              <strong>London Gatwick: </strong>13 flights per week
            </li>
            <li>
              <strong>London Heathrow: </strong>21 flights per week
            </li>
            <li>
              <strong>Manchester: </strong>3 flights per week
            </li>
            <li>
              <strong>Glasgow: </strong>1 flight per week
            </li>
          </ul>

          <p>The following airlines offer direct flights to Vancouver:
          </p>

          <ul>
            <li>
              Air Transat
            </li>
            <li>
              Westjet
            </li>
            <li>
              British Airways
            </li>
            <li>
              Air Canada
            </li>
          </ul>

      </Section>

    </Layout>
  </ThemeProvider>
)

export default Accommodation



