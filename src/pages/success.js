import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts/layout'
import Overlay from '../components/overlay'
import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'
import TravelHero from '../components/hero-images/galiano'
import Section from '../components/layouts/section'

import SectionTitle from '../components/layouts/section-title'

const Hero = styled.div`
  display: block;
  height: 85vh;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;

  h1, h2 {
    text-align:center;
    z-index:3;
    color:#fff;
  }
  h1 {
    font-size: 4rem;
  }
  span {
    color: #fff;
    position: relative;
    z-index: 3;
    font-size: 1.2rem;
    text-align: center;
    max-width: 500px;
    font-weight: 200;
  }
`

const Success = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

    <Hero>
        <TravelHero />
    <h1>Success</h1>
        <span>Thanks for your RSVP! We can't wait to see you in July! You can contact us at <a href="mailto:us@jessjames2019.com">us@jessjames2019.com</a> if you need anything!<br /><br />Jess & James</span>
        <Overlay />
      </Hero>

      <Section>
        <SectionTitle text="Success!"></SectionTitle>

      </Section>

    </Layout>
  </ThemeProvider>
)

export default Success



