import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layouts/layout'
import VancouverHero from '../components/hero-images/vancouver'
import Overlay from '../components/overlay'

import Section from '../components/layouts/section'
import SectionTitle from '../components/layouts/section-title'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

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

const Travel = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Hero>
        <VancouverHero />
        <h1>Vancouver</h1>
        <Overlay></Overlay>
      </Hero>

      <Section>
        <SectionTitle text="Where to Stay"></SectionTitle>
      </Section>

      <Section>
        <SectionTitle text="Things to Do"></SectionTitle>
      </Section>

    </Layout>
  </ThemeProvider>
)

export default Travel
